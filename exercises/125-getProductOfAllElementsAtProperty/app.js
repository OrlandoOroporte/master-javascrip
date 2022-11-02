let obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here

    let a = 1 
    let arr = obj[key]
    if (!arr || !Array.isArray(arr) || arr.length < 1)return 0
    else {
      arr.forEach(element => {
         a = a * element      
     });
     return a
    }   
   
  
}
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24