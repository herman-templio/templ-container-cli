
export let commandRunner=function (data,config) {
    return async() => {
        console.log('running',data,config);
        return {status:"OK"}
    }
}

export function setRunner(runner) {
    commandRunner=runner
}