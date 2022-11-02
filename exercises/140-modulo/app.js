function modulo(num1, num2) {
    // your code here

    let div = (num1/num2).toString().split('.')
    let rest = div[div.length -1]

return rest

}

let output = modulo(25, 4);
console.log(output); // --> 1