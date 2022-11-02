function convertDoubleSpaceToSingle(str) {
    // your code here
    let newStr = str.split('  ')
    return newStr.join(' ')
    
}
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

// con el metodo split() se ubican los dobles espacios y lo devuelve el mismo string 
// el metodo join() los une con un espacion o cualquier otro caracter que se defina