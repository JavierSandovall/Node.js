const empleados = [
    {
        id: 1,
        nombre: 'Javeir'
    },
    {
        id:2,
        nombre:'luna'
    },
    {
        id: 3,
        nombre: 'fluffy'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id:2,
        salario:1500
    }
   
];
const getEmpleado = (id, ) => {
    
    return  new Promise((resolve,reject)=>{// el resolve es algo que vamos a llamar un callback si todo se hace correctamente y el reject se ejecuta si sucede un error 
        const empleado = empleados.find( e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`no existe empleado con id ${id}`);
        
   });
}

    const getSalario = () => {

    return new Promise((resolve,reject)=>{
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario)
        ?resolve(salario)
        : reject(`no existe salario para el id ${ id}`)
    })

    }

 const id = 8

    //getEmpleado(id)
    //.then(empleado => console.log(empleado))
    //.catch(err => console.log(err))

    //getSalario(id)
    //.then(salario => console.log(salario))
    //.catch(err => console.log(err)) 

     let nombre;

    getEmpleado(id)
   .then( empleado =>{
     nombre = empleado
     return getSalario(id)
    })
   .then(salario => console.log('El empleado:', nombre, 'tiene uns salario de:',salario))
   .catch(err => console.log(err))