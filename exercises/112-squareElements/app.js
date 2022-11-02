function squareElements(arr) {
  // your code here

  let newArr = []
  arr.map(item => newArr.push(item*item))

  return newArr 

}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]