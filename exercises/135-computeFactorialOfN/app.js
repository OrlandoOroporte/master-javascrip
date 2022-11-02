function computeFactorialOfN(n) {
    // your code here
   let prod = 1
    for(let i=1; i < n + 1; i++){
        prod *= i 
    }

    return prod 

}

let output = computeFactorialOfN(5); console.log(output); // --> 6