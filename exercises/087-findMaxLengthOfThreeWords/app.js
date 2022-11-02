// Write your function here
function findMaxLengthOfThreeWords (a,b,c){

    let max = Math.max(a.length, b.length, c.length)
    return max
}

let output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3

//con el metodo Math.max se b usca el mayor  valor del lenght de cada word 