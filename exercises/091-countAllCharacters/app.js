// Write your function here

function countAllCharacters (arr){
    let obj = {}   
    if (arr === ""){
        return {}
    }

    for (const i of arr) {
        obj[i] = obj[i] + 1 || 1
    }
    return obj    
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}