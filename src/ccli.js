#!/usr/bin/env node --no-warnings
/** */
import {program} from './index.js'

program.name('ccli')
    .description('Templ Container CLI')

program.parseAsync(process.argv)
