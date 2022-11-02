let obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let arr = obj[key]
    let sum = 0
    if (Array.isArray(arr) && arr.length > 0){

        for (i=0;i<arr.length; i++){
            sum += arr[i]
        }
        return sum
    } else return 0
}


let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13