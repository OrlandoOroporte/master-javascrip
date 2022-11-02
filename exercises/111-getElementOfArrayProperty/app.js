let obj = {
    key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if (!obj[key] || index < obj[key.length]||!Array.isArray(obj[key])) return undefined
    else return obj[key][index]

}
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output);