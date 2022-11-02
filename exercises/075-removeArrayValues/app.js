function removeArrayValues(obj) {
    // your code here
    for (var key in obj) {
        if (obj[key].length > 0){
            delete obj[key]
        }    }
    return obj 
}

// se recorre el objeto con for()
// se evalua con if si el obj[key] es un array con la propiedad .length