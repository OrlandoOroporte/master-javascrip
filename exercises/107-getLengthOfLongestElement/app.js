function getLengthOfLongestElement(arr) {
    // Your code here
    if (!arr) return  0
    else {
    let a = 0
    arr.map(item => item.length > a ? a = item.length : null )
    return a}

}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5