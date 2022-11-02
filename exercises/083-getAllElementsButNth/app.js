function getAllElementsButNth(array, n) {
    // Write your function here
    array.splice(n,1)
    return array

}
let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']

//con el metodo splice() se le pasa index del elemento donde incia a borrar, y el segundo parametro son la cantidad de elementos a borrar
// si no pasa el segundo  parametro borrara todo a paritr del index dado.