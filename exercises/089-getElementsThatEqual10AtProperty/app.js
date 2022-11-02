// Write your function here

function getElementsThatEqual10AtProperty (obj,key){
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
        return []
    }


    let arr = []
    let newArr = obj[key]
    newArr.forEach(e => {
        if (e === 10){
            arr.push(e)
        }
        
    });
  
    return arr
}
let obj = {
    key: [1000, 10, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]