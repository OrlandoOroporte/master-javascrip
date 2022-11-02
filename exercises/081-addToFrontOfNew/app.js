function addToFrontOfNew(arr, element) {
    // Write your function here
    let newArr = []
    newArr.push(element)

    arr.forEach((i)=>[
        newArr.push(i)
    ])

    return newArr

}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]

//Siguiendo los paramtros del ejercicio se declaro un nuevo arrary newArr
//se incorpora el elemento con el metodo push()
//