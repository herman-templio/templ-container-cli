import { commandRunner,setRunner } from "./runner.js";
import { Program } from "./utils.js";
import {apiRunner} from './api-runner.js'
const cache=new Program()
setRunner((...args) => {
    return async () => {
        return apiRunner(...args)
    }
})
cache
    .command('purge [app]')
    .description('Purges (deletes content of) server cache.')
    .action(async (app)=>{
        return cache.wrap(commandRunner({command:['cache'],args:{cmd:'purge',app:app}}))
    })

cache
    .command('status [app]')
    .description('Status of server cache.')
    .action(async (app)=>{
        // Output last output line of response
        return cache.wrap(
            commandRunner({command:['cache'],args:{cmd:'status',app:app}}),
            lastOutputLine
        )
    })

cache
    .command('enable [app]')
    .description('Enablesserver cache.')
    .action(async (app)=>{
        return cache.wrap(commandRunner({command:['cache'],args:{cmd:'enable',app:app}}))
    })
cache
    .command('disable [app]')
    .description('Disables server cache.')
    .action(async (app)=>{
        return cache.wrap(commandRunner({command:['cache'],args:{cmd:'disable',app:app}}))
    })

async function lastOutputLine(res) {
    if(!res.msg) {
        cache.error('Unexpected empty response',res)
    } else {
        cache.info(...res.msg.trim().split('\n').slice(-1))
    }
}
cache.parseAsync(process.argv)
