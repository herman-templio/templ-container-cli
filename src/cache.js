import { commandRunner } from "./runner.js";
async function lastOutputLine(res,program) {
    if(!res.msg) {
        program.error('Unexpected empty response',res)
    } else {
        program.info(...res.msg.trim().split('\n').slice(-1))
    }
}

export default function cacheSub(cache,{program}) {
cache
    .command('purge [app]')
    .description('Purges (deletes content of) server cache.')
    .action(async (app)=>{
        return program.wrap(commandRunner({command:['cache'],args:{cmd:'purge',app:app}}))
    })

cache
    .command('status [app]')
    .description('Status of server cache.')
    .action(async (app)=>{
        // Output last output line of response
        return program.wrap(
            commandRunner({command:['cache'],args:{cmd:'status',app:app}}),
            lastOutputLine
        )
    })

cache
    .command('enable [app]')
    .description('Enablesserver cache.')
    .action(async (app)=>{
        return program.wrap(commandRunner({command:['cache'],args:{cmd:'enable',app:app}}))
    })

cache
    .command('disable [app]')
    .description('Disables server cache.')
    .action(async (app)=>{
        return program.wrap(commandRunner({command:['cache'],args:{cmd:'disable',app:app}}))
    })
}
