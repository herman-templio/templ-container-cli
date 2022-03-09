import {Program} from './utils.js'
export const program = new Program()

/** Top level command which runs sub-commands located in separate files. */
program
    .command('php','php related commands',  { executableFile: 'php.js' })

program
    .command('cache','cache related commands',  { executableFile: 'cache.js' })
