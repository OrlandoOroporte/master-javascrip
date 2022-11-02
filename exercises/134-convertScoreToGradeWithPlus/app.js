function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    let conv = {
        A : Array.from({length: 101 - 90}, (x, i) => i + 90),
        B : Array.from({length: 90 - 80}, (x, i) => i + 80),
        C : Array.from({length: 80 - 70}, (x, i) => i + 70),
        D : Array.from({length: 70 - 60}, (x, i) => i + 60),
        F : Array.from({length: 60}, (x, i) => i )
    }
    let nota = ""
    let simb = ""
    if(score < 0 || score <= 101){
        for (let key in conv ) {
         conv[key].map(e => (score === e )  ? nota =  key  : null)
        }
        if (nota === 'F'){simb=""}
        else if(score.toString().charAt(1) === '8' || score.toString().charAt(1) === '9' || score === 100 ){simb = '+'}
        else if(score.toString().charAt(1) === '0' || score.toString().charAt(1) === '1' || score.toString().charAt(1) === '2' ){
          simb = '-'
        } 
    return nota + simb
    }else return "INVALID SCORE"
    }


let output = convertScoreToGradeWithPlusAndMinus(42);
console.log(output); // --> 'A-'