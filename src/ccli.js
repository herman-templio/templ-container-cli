#!/usr/bin/env node
/** */
import {program} from './index.js'

program.name('ccli')
    .description('Templ Container CLI')

program.parseAsync(process.argv)
