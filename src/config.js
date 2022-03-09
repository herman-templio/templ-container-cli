import { homedir } from "os"
import dotenv from 'dotenv'
import { readFile } from "fs/promises"
export async function getConfig() {
    
    const dir=process.env.CCLI_CONFIG_DIR||homedir()
    const file = process.env.CCLI_CONFIG_FILE||`${dir}/.templ/config.js`
    let env=process.env
    try {
        env= Object.assign(env,dotenv.parse( await readFile(file)))
    } catch(e) {
        console.log('Unable to load configuration file',e.message);
    }
    return {container:env.CCLI_CONTAINER,user:env.CCLI_USER,token:env.CCLI_TOKEN}
}