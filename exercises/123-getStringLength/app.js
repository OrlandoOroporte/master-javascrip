function getStringLength(string) {
    // your code here
    return [...string].reduce((a) => a + 1, 0)
}

let output = getStringLength('hello');
console.log(output); // --> 5

//descompogo cada valor del string en un array con express operator
