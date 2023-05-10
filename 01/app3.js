console.log('Inicio de programa');

setTimeout( () => {
    console.log('primer timeout')
},3000)
setTimeout( () => {
    console.log('segundo timeout')
},0)
setTimeout( () => {
    console.log('tercero timeout')
},0)

console.log('Fin del programa')


function saludar(nomber){
    let mensaje = `hola ${nombre}`;
    return mensaje
}

let saludo = saludar ('fernando')
console.log(saludo);