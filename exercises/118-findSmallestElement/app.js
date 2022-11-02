function findSmallestElement(arr) {
    // your code here
    if(arr.length < 1) return 0
    else {
        let a = Infinity
        arr.map(i => i <= a ? a = i : null )
        return a 
    }

}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1