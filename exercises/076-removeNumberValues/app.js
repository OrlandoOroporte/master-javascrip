let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    for (var key in obj) {
        if (obj[key] > 0){
            delete obj[key]
        }
    }
    return obj
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }

//se recorre el objeto con for () 
//se evalua con if si el obj[key] es mayor a 0 y se borra si es true