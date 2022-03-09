import { commandRunner,setRunner } from "./runner.js";
import { Program } from "./utils.js";
import {apiRunner} from './api-runner.js'
const php=new Program()
setRunner((...args) => {
    return async () => {
        //console.log('Custom runner',...args);
        return apiRunner(...args)
    }
})
php
    .command('restart')
    .description('Restarts php.')
    .action(async ()=>{
        php.wrap(commandRunner({command:['restart'],args:['php']}))
    })

php.parseAsync(process.argv)
