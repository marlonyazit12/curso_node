const {crearArchivo} = require("./helpers/multiplicar")
const argv = require("./config/yargs")


//console.log(yargs.base , 'base')
//console.log(yargs.list , 'list')


crearArchivo( argv.base, argv.list )
.then(result => console.log(result))
.catch(err => console.log(err))

