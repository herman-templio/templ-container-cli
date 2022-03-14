import { commandRunner } from "./runner.js";

export default function phpSub(php,{program}) {
php
    .command('restart')
    .description('Restarts php.')
    .action(async ()=>{
        program.wrap(commandRunner({command:['restart'],args:['php']}))
    })
}
