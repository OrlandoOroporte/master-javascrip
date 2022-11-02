function findShortestOfThreeWords(word1, word2, word3) {
  
    let arr = [word1, word2, word3]
    let ml = Infinity
    arr.map(e => e.length < ml ? ml = e : null)
    return ml 
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'