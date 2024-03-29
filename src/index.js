import {Program} from './utils.js'
export const program = new Program()
/**@typedef {Object} SubcommandOptions
 * @property {Program} program
 */
program.command('version').description('Prints version.').action(async()=>{
    const p = await import('../package.json',{assert: {type: "json"}})
    console.log(p.default.version);
})

/** Top level command which runs sub-commands located in separate files. */
import phpSub from './php.js'
phpSub(program.command('php').description('php related commands'),{program})

import cacheSub from './cache.js'
cacheSub(program.command('cache').description('cache related commands'),{program})

import incidentSub from './incident.js'
incidentSub(program.command('incident').description('incident related commands'),{program})

/** Top level command which runs sub-commands located in separate files. */
import serviceSub from './service.js'
serviceSub(program.command('service').description('service related commands'),{program})
