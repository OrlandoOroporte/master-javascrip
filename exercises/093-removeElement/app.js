// Write your function here

function removeElement (arr, element){

    let result = arr.filter( array => array != element)

    return result
}
let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
