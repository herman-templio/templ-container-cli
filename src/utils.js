export const echo = console.log
export const error = console.error
import {Command} from "commander"
import completion from "commander-completion"
completion({Command:Command})
export class Program extends Command {
    constructor() {
        super()
        //this.program=new Command()
        this.option('-v,--verbose','Verbose output')
            .option('-s,--silent','No/minimal output')
            .option('-d,--debug','Debug output')
            //.enablePositionalOptions()
            .action(function (){
                if(!process.env.COMP_LINE) {
                    this.help()
                    return
                }
                this.complete({
                    line: process.env.COMP_LINE,cursor: parseInt(process.env.COMP_POINT||0)
                },(err,res)=>{
                    console.log(...res);
                })
            })
    }
    verbose(...args) {
        if(this.getOptionValue('verbose')) {
            return echo(...args)
        }
    }
    info(...args) {
        if(!this.getOptionValue('silent')) {
            return echo(...args)
        }
    }
    debug(...args) {
        if(!this.getOptionValue('debug')) {
            return echo(...args)
        }
    }
    error(...args) {
        if(!this.getOptionValue('silent')) {
            return error(...args)
        }
    }
    async wrap(fn,handler) {
        try {
            if(handler) return handler(await fn(),this)

            const {status,msg,debug}=await fn()
            this.info(status)
            if(msg) this.info(msg.trim())
            if(debug) this.debug(debug)
            if(status.match(/ok/i)) return
            process.exit(1)
        } catch(e) {
            error('Failed with error',e.message)
            process.exit(1)
        }
    }
}
