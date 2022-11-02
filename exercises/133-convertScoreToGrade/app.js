function convertScoreToGrade(score) {
    // your code here
    let conv = {
        A : Array.from({length: 101 - 90}, (x, i) => i + 90),
        B : Array.from({length: 90 - 80}, (x, i) => i + 80),
        C : Array.from({length: 80 - 70}, (x, i) => i + 70),
        D : Array.from({length: 70 - 60}, (x, i) => i + 60),
        F : Array.from({length: 60}, (x, i) => i )
    }
    let nota = ""
    if(score < 0 || score < 100){
        for (let key in conv ) {
         conv[key].map(e => score === e ? nota = key : null)
        }
        return nota
    }else return "INVALID SCORE"
    }


let output = convertScoreToGrade(91);
console.log(output); // --> 'A'