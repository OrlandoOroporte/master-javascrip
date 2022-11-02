function getLargestElement(arr) {
  // your code here
  if (arr.length < 1) return 0
  else {
    let a = 0
    arr.map( i => i > a ? a=i : null)
    return a 
  }
  
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;