import { commandRunner } from "./runner.js";

export default function serviceSub(service,{program}) {
service
    .command('restart <service>')
    .description('Restarts the given service.')
    .action(async (service)=>{
        program.wrap(commandRunner({command:['restart'],args:[service]}))
    })
}
