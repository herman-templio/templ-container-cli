import {Program} from './utils.js'
export const program = new Program()

program.command('version').action(async()=>{
    const p = await import('../package.json',{assert: {type: "json"}})
    console.log(p.default.version);
})

/** Top level command which runs sub-commands located in separate files. */
program
    .command('php','php related commands',  { executableFile: 'php.js' })

program
    .command('cache','cache related commands',  { executableFile: 'cache.js' })
