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

    const getInFoUsuario = async (id) => {

        try{
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)
        return `El salario del empleado ${empleado} es de ${salario}`
     } catch(error){
        return error

      } 
    }

    const id = 8;
    getInFoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));