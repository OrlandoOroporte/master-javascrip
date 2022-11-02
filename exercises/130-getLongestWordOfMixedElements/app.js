function getLongestWordOfMixedElements(arr) {
    let a = arr.filter(e => typeof e == 'string')
    let b = ''
    if (a.length > 0){
        a.map(e => e.length > b.length ? b = e :null)
        return b 
    }
    else return ''
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'