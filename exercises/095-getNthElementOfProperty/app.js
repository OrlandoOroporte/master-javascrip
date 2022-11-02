// Write your function here
function getNthElementOfProperty (obj,key,n){
    if(n >= obj[key].length || !Array.isArray(obj[key]) || !obj[key] )return undefined

    return obj[key][n]
}

let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2
 