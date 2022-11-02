let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here
    for (var key in obj){
        if(obj[key] < num){
            delete obj[key]
        }
    }
    return obj 
}

// Se recorre el obj con for por cada key. 
// consulta con if si el Key es menor al num y lo borra borra el key 