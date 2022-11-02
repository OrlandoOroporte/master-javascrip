function removeOddValues(obj) {
    // your code here
    for (var key in obj) {
        if(obj[key] % 2 > 0){
            delete obj[key]
        }
    }
    return obj
}

//Se recorre el obj con for( ) si el obj[key] es impar lo borra y retorna el obj