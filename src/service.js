import { Command } from "commander";
import { commandRunner } from "./runner.js";
/**
 * 
 * @param {Command} service 
 * @param {import("./index.js").SubcommandOptions} param1 
 */
export default function serviceSub(service,{program}) {

// List
service
    .command('list')
    .description('List existing services.')
    .action(async ()=>{
        program.wrap(commandRunner({command:['services'],args:{cmd:'list'}}))
    })
// status
service
    .command('status <service>')
    .description('Status of the given service.')
    .action(async (/**@type {string}*/service)=>{
        program.wrap(commandRunner({command:['services'],args:{cmd:'status',service}}))
    })

// start
service
    .command('start <service>')
    .description('Start the given service.')
    .action(async (/**@type {string}*/service)=>{
        program.wrap(commandRunner({command:['services'],args:{cmd:'start',service}}))
    })

// stop
service
    .command('stop <service>')
    .description('Stop the given service.')
    .action(async (/**@type {string}*/service)=>{
        program.wrap(commandRunner({command:['services'],args:{cmd:'stop',service}}))
    })

// restart
service
    .command('restart <service>')
    .description('Restarts the given service.')
    .action(async (/**@type {string}*/service)=>{
        program.wrap(commandRunner({command:['restart'],args:[service]}))
    })

}
