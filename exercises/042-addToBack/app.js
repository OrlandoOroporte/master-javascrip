function addToBack(arr, element) {
  // your code here
  let newArr = arr 
  newArr.push(element)
  return newArr
}

let output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]