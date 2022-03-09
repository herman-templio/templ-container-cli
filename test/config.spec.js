import { expect } from "chai"
import { getConfig } from "../src/config.js"

describe('Loading config',()=>{
    before(async()=>{
        process.env['CCLI_CONFIG_FILE']='test/.templ/ccli.env'
    })
    it('gets the config',async()=>{
        let config = await getConfig()
        console.log(config);
        expect(`${config.container}`).to.equal(`1`)
    })
})