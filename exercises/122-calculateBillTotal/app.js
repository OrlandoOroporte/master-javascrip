function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let tax = 0.095
    let ivaM = 1.15 
    return (preTaxAndTipAmount * tax) + (preTaxAndTipAmount * ivaM)
}
let output = calculateBillTotal(20);
console.log(output); // --> 24.9