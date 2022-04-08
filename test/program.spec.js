import {program} from '../src/index.js'
import {setRunner} from "../src/runner.js";
import { expect } from "chai"

let run_data, run_config
const runner = function (data,config) {
    return async() => {
        run_data=data; run_config=config
        return {status:"OK"}
    }
}
setRunner(runner)

describe('Running program',()=>{
    const base_args=[
        'node',
        'src/ccli.js',
    ]
    before(async()=>{
        // Test config
        process.env['CCLI_CONFIG_FILE']='test/.templ/ccli.env'
        program.name('test-templ')
        .description('Testing Templ Container CLI')
    })
    it('version',async()=>{
        const args=[
            'version'
        ]
        await program.parseAsync(base_args.concat(args))
    })
    it('purge cache',async()=>{
        const args=[
            'cache',
            'purge'
        ]
        await program.parseAsync(base_args.concat(args))
        expect(run_data.command[0]).to.equal('cache')
        expect(run_data.args.cmd).to.equal('purge')
    })

    it('open incident',async()=>{
        const args=[
            'incident',
            'open',
            'some error',
            '1',
            '--type','e-type',
            '--data','{"sms":"12345","email":["mail1","mail2"]}',
        ]
        await program.parseAsync(base_args.concat(args))
        console.log(run_data);
        expect(run_data.command[0]).to.equal('incident')
        expect(run_data.args.cmd).to.equal('open')
        expect(run_data.args.app).to.equal('1')
    })

    it('restart php',async()=>{
        const args=[
            'php',
            'restart'
        ]
        await program.parseAsync(base_args.concat(args))
        expect(run_data.command[0]).to.equal('restart')
        expect(run_data.args[0]).to.equal('php')
    })

})