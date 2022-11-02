function addToFront(arr, element) {
  // your code here
 let newArra = arr
 newArra.unshift(element)
  return newArra
}

let output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

//Hint: you can use unshift

// const hint= () => {
//   let Old_array = [1, 2, 3]
//   Old_array.unshift(4);   
//   console.log(Old_array); // -> 4, 1, 2, 3
// }