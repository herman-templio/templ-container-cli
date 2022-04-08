import { commandRunner } from "./runner.js";

export default function incidentSub(incident,{program}) {
incident.description('Incident commands')

incident
    .command('open <message> [app]')
    .description(`Opens an incident with the given error message`)
    .option('--type <type>','incident type')
    .option('--data <json>','Addtitional incident data as json')
    .action(async function(message,app,options){
        let data
        try {
            data=options.data && JSON.parse(options.data)||{}
        } catch(e) {
            console.log('Failure to parse JSON',options.data);
            process.exit(1)
        }
        return program.wrap(commandRunner({command:['incident'],args:{
            cmd:'open',app,message,
            type:options.type,data
        }}))
    })

incident
    .command('close [app]')
    .description(`Closes incidents`)
    .option('--type <type>','incident type')
    .action(async function(app,options){
        program.info('Closing incident')
        return program.wrap(commandRunner({command:['incident'],args:{
            cmd:'close',app,type:options.type
        }}))
    })
}
