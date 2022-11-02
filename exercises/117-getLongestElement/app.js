function getLongestElement(arr){
    if (!arr) return []
    else {
        let b = ""
        arr.map(item => item.length > b.length ? b = item : null)
        return b 

    }
}
    

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'