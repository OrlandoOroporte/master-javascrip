function computeProductOfAllElements(arr) {
  // your code here
  if(!arr || arr.length < 1) return 0
  else {
    let aux = 1
    arr.map(item => item  ? aux = item * aux : null)
    return aux 
  } 
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

