let obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return []
  else {
    obj[key].pop()
    return obj[key]}
    // your code here

}

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]