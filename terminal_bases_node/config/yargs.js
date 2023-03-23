const argv =  require('yargs')
                .options({
                  'b' : {
                          alias : 'base',
                          demandOption : true,
                          type : 'number',
                          describe : 'Es la base para multiplicar'
                        },
                  'l' : {
                          alias : 'list',
                          demandOption : false,
                          type : 'boolean',
                          default : false,
                          describe : 'lista la tabla de multiplicar'
                        }
                })
               .check( (argv, opt) => {
                    if ( isNaN(argv.b) )  throw new Error("Only Numbers")

                    return true
                })
                .argv

module.exports = argv