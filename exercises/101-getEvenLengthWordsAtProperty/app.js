let obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    let newArr = []
    let arr = obj[key]
    if (!obj[key] || !Array.isArray(obj[key])) {
      return []
    } else {
    arr.forEach(e => {
    if (e.length % 2 === 0){
      newArr.push(e)
    }
    });}
    return (newArr)
}

let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
