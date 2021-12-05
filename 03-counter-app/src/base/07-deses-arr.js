const returnArray = () =>{
    return ['ABC', 123];
}

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const usState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

export { returnArray };