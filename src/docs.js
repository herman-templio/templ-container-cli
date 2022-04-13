/** Generate docs for program */
import {program} from './index.js'
program.name('templ')
    .description('Templ Container CLI')
// Recursively decend commands
function generateDocs(command,level) {
    let args=''
    if(command._args.length)
        args = command._args?.map(a=>argString(a)).join(' ')
    console.log('#'.repeat(level),command.name(),args);

    console.log(command.description());
    console.log();

    if(command.options.length) {
        console.log('Options:')
        command.options.forEach(a=>console.log(`+ **${a.flags.replace(/([><])/g,'\\$1')}**`,a.description));
        console.log();
    }
    //console.log( command.description() )
    //console.log('Options:', command.opts() )
    if(command.commands.length) {
        console.log('Subcommands:')
        command.commands.forEach(c=> console.log(`+ **${c.name()}** - ${c.description()}`));
        console.log();
        command.commands.forEach(subComm=> generateDocs(subComm,level+1))
        console.log();
    }
}
const commands= generateDocs(program,1)
function argString(a) {
    let arg = a.name()
    if(a.variadic) arg=`${arg}...`
    if(a.required) arg=`\\<${arg}\\>`
    else arg=`[${arg}]`
    return arg
}
