function sumDigits(num) {
    // your code here
let arr = [...String(num)]
let a = 0
let b = -arr[1]

if (arr[0] === '-'){
    arr.shift();
    arr.splice(0,1,b);
    arr.forEach(element => {
        a = Number(element) + a
    });
    return a
}
else {
    arr.forEach(element => {
        a = Number(element) + a
    })
    return a
}}
    
let output = sumDigits(316);
console.log(output); // --> 4 