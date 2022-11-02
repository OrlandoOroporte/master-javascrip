function getAverageOfElementsAtProperty (obj, key){
    if (!obj[key]  || obj[key].length === 0){
        return 0
    }
    let arr = obj[key];
    let sum = 0 ;

    arr.forEach((n)=>{
        sum+=n
    })

    return sum / arr.length

}
let obj = {
    key: [1, 2, 3]
  };
  let output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); // --> 

// se crean las condiciones con if para descartar los arrays vacios o que no sean arrays
//con el metodo forEach se ejecuta la funcion de suma por cada elemento del array
//se devuelve el resultado de la suma entre el numero de elementos