function getLengthOfShortestElement(arr) {
    // your code 
     if (!arr || arr.length < 1) return 0
     else {
        let a = Infinity
        arr.map(item => item.length < a ? a = item.length : null)
        return a
     }
    
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3