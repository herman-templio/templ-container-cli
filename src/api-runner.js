//import fetch from 'node-fetch';
import axios from 'axios'
import { getConfig } from './config.js'
const default_config ={
    api:process.env.CCLI_API||'http://localhost:7321'
}

export async function apiRunner({command,args},config) {
    config=Object.assign({},default_config,await getConfig(),config)
    const path = command.join('/')
    const userConfig=getConfig()
    const data={args,container:config.container,user:config.user}
    if(!(config.container&&config.token)) {
        return {status:"error",msg:"missing configuration"}
    }

    const options={headers:{authentication:config.token}}
    //return  await fetch(`${config.apiURL}/${path}`,{method:'POST',body:data}).then(res=>res.json)
    const res = await axios.post(`${config.api}/${path}`,data,options)
    return res.data
}