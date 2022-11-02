// Write your function here

function getElementsLessThan100AtProperty (obj, key){

    let arr = obj[key]
    let newArr = []

    arr.forEach(element => {
        if (element < 100){
            newArr.push(element)
        }
        
    });
    return newArr 
}

let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]
