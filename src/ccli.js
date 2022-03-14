#!/usr/bin/env node
/** */
import {program} from './index.js'
import {setRunner} from "./runner.js";
import {apiRunner} from './api-runner.js'
setRunner((...args) => {
    return async () => {
        return apiRunner(...args)
    }
})

program.name('ccli')
    .description('Templ Container CLI')

program.parseAsync(process.argv)
