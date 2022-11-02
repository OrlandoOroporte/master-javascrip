function findShortestElement(arr) {
    // your code here
    if(arr.length < 1) return ''
    else {
        let a = '000000000000000000000000000000000'
        arr.map(i => i.length < a.length ? a = i : null )
        return a
    }

}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'