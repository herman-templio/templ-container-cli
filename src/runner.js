
export let commandRunner=function (data,config) {
    return async() => {
        console.log('running',data,config);
    }
}

export function setRunner(runner) {
    commandRunner=runner
}