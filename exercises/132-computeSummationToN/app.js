function computeSummationToN(n) {
 let a = Array.from({length:n},(_,i)=> i+1)
 console.log(a)
 let sum = 0 
 for (let  i of a) {
  sum += i
 }
 return sum 
}

let output = computeSummationToN(6);
console.log(output); // --> 21

