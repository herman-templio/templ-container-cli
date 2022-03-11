# templ-container-cli
CLI for containers

## `./src/ccli.js -h`

```
Usage: ccli [options] [command]

Templ Container CLI

Options:
  -v,--verbose    Verbose output
  -s,--silent     No/minimal output
  -d,--debug      Debug output
  -h, --help      display help for command

Commands:
  version
  php             php related commands
  cache           cache related commands
  help [command]  display help for command
```

###  `./src/ccli.js php -h`

```
Usage: php [options] [command]

Options:
  -v,--verbose    Verbose output
  -s,--silent     No/minimal output
  -d,--debug      Debug output
  -h, --help      display help for command

Commands:
  restart         Restarts php.
  help [command]  display help for command
 ```
 
 ### `./src/ccli.js cache -h`
```
Usage: cache [options] [command]

Options:
  -v,--verbose    Verbose output
  -s,--silent     No/minimal output
  -d,--debug      Debug output
  -h, --help      display help for command

Commands:
  purge [app]     Purges (deletes content of) server cache.
  status [app]    Status of server cache.
  enable [app]    Enablesserver cache.
  disable [app]   Disables server cache.
  help [command]  display help for command
```
