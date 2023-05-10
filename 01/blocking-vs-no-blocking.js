const getUsuarioSync = ( id ) => {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 3000 ) {
        // Esperando...
        // Haciendo fetch de base de datos...
        // Robando datos de facebook...
    }

    return {
        id,
        nombre: `Usuario ${ id }`
    }; 
}


const getUsuario = (id, callback ) => {
    const usuario = {
        id,
        nombre: `Usuario ${ id }`
    };
    
    setTimeout(() => {
        callback( usuario );
    }, 3000);
}

module.exports = {
    getUsuario,
    getUsuarioSync
}

//blocking
const { getUsuarioSync } = require('./usuarios/usuarios');

console.log('Inicio de programa');
console.time('inicio');


const usuario1 = getUsuarioSync( 1 );
console.log('Usuario 1:', usuario1 );


const usuario2 = getUsuarioSync( 2 );
console.log('Usuario 2:', usuario2 );



console.log('Fin de programa');
console.timeEnd('inicio');

//no blocking

const { getUsuario } = require('./usuarios/usuarios');

console.log('Inicio de programa');
console.time('inicio');


getUsuario( 1, ( usuario ) => {
    console.log('Usuario 1:', usuario );
});


getUsuario( 2, ( usuario) => {
    console.log('Usuario 2:', usuario );
    console.timeEnd('inicio');
});


console.log('Fin de programa');