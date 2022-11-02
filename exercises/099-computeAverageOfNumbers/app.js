function computeAverageOfNumbers (arr){
    let num = arr.length
    let sum = 0
    if (num === 0) return 0
    for (i=0; i < num ; i++){
        sum += arr[i]
    }
return sum/num
}
let input = [1,2,3,4,5];
let output = computeAverageOfNumbers(input);
console.log(output);
