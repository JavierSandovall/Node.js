const deadpool ={
    nombre : 'wade',
    apellido : 'winston',
    poder : 'regeneracion',
    getNombre(){
        return `${this.nombre } ${ this.apellido } ${ this.poder }`
    }
}
//console.log(deadpool.getNombre())

// const nombre = deadpool.nombre;
// const apellido  = deadpool.apellido;
// const  poder  = deadpool.poder;

function imprimirHeroe({ nombre, apellido , poder, edad = 20}){

   
     console.log(nombre, apellido, poder, edad)
}

// imprimirHeroe(deadpool)

const heroes = ['deadpool', 'superman', 'batman'];

const [,,h3] = heroes


console.log(h3)
