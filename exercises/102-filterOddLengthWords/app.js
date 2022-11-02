function filterOddLengthWords(words) {
    // your code here


    let newA = []
    if (!Array.isArray(words))return []
    else{
words.map(e => {
    e.length % 2 !=0 ? newA.push(e) : null
})}
return newA

}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']