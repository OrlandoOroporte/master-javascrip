let obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
  let arr = obj[key]
  if (!arr || !Array.isArray(arr) || arr.length < 1) return []
  else {
    let a = 0 
    arr.map(item => item > a ? a = item : null)
    return a
  }
    // your code here
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4