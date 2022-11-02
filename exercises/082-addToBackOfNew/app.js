function addToBackOfNew(arr, element) {
    // Write your function her
    let newArr = [...arr]
    
    // arr.forEach((e) => {
    //  newArr.push(e)
    // });
    newArr.push(element)

    return newArr
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]

//a los efectos del ejercicio se recorre el array dado con forEach() y se le da la funcion de incorpar cada elemento. 
//se incorpora el nuevo elemento al final con push()
//se puede hacer con menos cod si se usa express operator ... para crear una copia del array dado en el nuevo. 