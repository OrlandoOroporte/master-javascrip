function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let a = arr.filter(e => typeof e == 'number')
  let b = Infinity
  if (a.length > 1 ) {
    a.map(e => e < b ? b = e : null)
    return b
  }
  else return 0
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4