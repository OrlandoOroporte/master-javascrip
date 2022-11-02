function removeEvenValues(obj) {
    // your code here
    for (var key in obj){
        if (obj[key] % 2 === 0){
            delete obj[key]
        }
    }
    return obj 
}

// se recorre el obj dado con for y se evalua con if el si el key es par. 
// si es par lo elemina y retorna el objeto. 