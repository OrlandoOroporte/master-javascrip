let obj = {
  key: [1, 2, 3, 4, 5]
};
let newArr = []
function getOddElementsAtProperty(obj, key) {
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return []
  else {
  obj[key].map( e => e % 2 > 0 ? newArr.push(e) : null)
  }

 return newArr
}

let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]