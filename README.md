# templ 
Templ Container CLI

Options:
+ **-v,--verbose** Verbose output
+ **-s,--silent** No/minimal output
+ **-d,--debug** Debug output

Subcommands:
+ **version** - Prints version.
+ **php** - php related commands
+ **cache** - cache related commands
+ **incident** - Incident commands

## version 
Prints version.

## php 
php related commands

Subcommands:
+ **restart** - Restarts php.

### restart 
Restarts php.


## cache 
cache related commands

Subcommands:
+ **purge** - Purges (deletes content of) server cache.
+ **status** - Status of server cache.
+ **enable** - Enablesserver cache.
+ **disable** - Disables server cache.

### purge [app]
Purges (deletes content of) server cache.

### status [app]
Status of server cache.

### enable [app]
Enablesserver cache.

### disable [app]
Disables server cache.


## incident 
Incident commands

Subcommands:
+ **open** - Opens an incident with the given error message.
+ **close** - Closes incidents

### open \<message\> [app]
Opens an incident with the given error message.

Options:
+ **--type \<type\>** incident type
+ **--notify-email \<addresses\>** Comma-separated list of emails to notify
+ **--notify-sms \<numbers\>** Comma-separated list of numbers (inclusive Country Code) to notify via sms

### close [app]
Closes incidents

Options:
+ **--type \<type\>** incident type



