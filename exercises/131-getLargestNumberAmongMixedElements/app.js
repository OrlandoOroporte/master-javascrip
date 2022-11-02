function getLargestNumberAmongMixedElements(arr) {
    let a = arr.filter(e => typeof e == 'number')
    let b = 0
    if (a.length > 0){
        a.map(e => e > b ? b = e : null)
        return b 
    }
    else return 0
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5