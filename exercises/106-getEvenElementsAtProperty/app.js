
let obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    let arr = obj[key]
    if (!arr || !Array.isArray(arr) || arr.length < 1 ) return []
    else {
    let newArr = arr.filter(item => item % 2 == 0 )
  return newArr}
}
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]

// se realiza con filter() como opcion a la solucion del ejercicio con map()