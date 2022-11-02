let obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
  let arr = obj[key]
  if (!arr || !Array.isArray(arr) || arr.length == 0) return []
  else {
  let a = Infinity
  arr.map( item => item < a ? a = item : null )
  return a }
    // your code here
}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1