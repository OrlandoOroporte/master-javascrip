function getLongestOfThreeWords(word1, word2, word3) {
 
    let arr = [word1, word2, word3]
    let ml = ''
    arr.map(e => e.length > ml.length ? ml = e : null)
    return ml 
}

let output = getLongestOfThreeWords('small', 'medium', 'large');
console.log(output); // --> 'these'