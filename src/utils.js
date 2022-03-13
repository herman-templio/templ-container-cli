export const echo = console.log
export const error = console.error
import {Command} from "commander"

export class Program extends Command {
    constructor() {
        super()
        //this.program=new Command()
        this.option('-v,--verbose','Verbose output')
            .option('-s,--silent','No/minimal output')
            .option('-d,--debug','Debug output')
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
            if(handler) return handler(await fn())
            
            const {status,msg,debug}=await fn()
            this.info(status)
            if(msg) this.info(msg)
            if(debug) this.debug(debug)
        } catch(e) {
            error('Failed with error',e.message)
            process.exit(1)
        }
    }
}
