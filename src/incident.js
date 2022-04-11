import { commandRunner } from "./runner.js";

export default function incidentSub(incident,{program}) {
incident.description('Incident commands')

incident
    .command('open <message> [app]')
    .description(`Opens an incident with the given error message.`)
    .option('--type <type>','incident type')
    .option('--notify-email <addresses>','Comma-separated list of emails to notify')
    .option('--notify-sms <numbers>','Comma-separated list of numbers (inclusive Country Code) to notify via sms')
    .action(async function(message,app,options){
        let notify={}
        try {
            notify.email=options.notifyEmail && options.notifyEmail.split(',')
            notify.sms=options.notifySms && options.notifySms.split(',')
        } catch(e) {
            console.log('Failure to parse options',e)
            process.exit(1)
        }
        return program.wrap(commandRunner({command:['incident'],args:{
            cmd:'open',app,message,
            type:options.type,data:{notify}
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
