const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base = 5 , list = false) => {

    try {
        const multiplos = [1,2,3,4,5,6,7,8,9,10]
        let salida = ''
        let save = ''


        multiplos.forEach( ( n ) => {
            
            salida += ` ${base}` + colors.brightCyan(' * ') + `${n}`+ colors.brightCyan(' = ') +`${base*n} \n`
            save   += ` ${base} * ${n} =  ${base*n} \n`
        } )

        if (list)
        {
            console.clear()
            console.log(colors.green('============================='))
            console.log(colors.rainbow(` Tabla de multiplicar ${base}`))
            console.log(colors.green('============================='))
            console.log(salida)
        }


        fs.writeFileSync(`tabla-${base}.txt`,save)

        return `tabla-${base}.txt creado correctamente`    

    } catch (error) {

        throw error;

    }
    

}

module.exports = {
    crearArchivo
}