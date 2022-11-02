let obj = {
    name: 'Sam',
    age: 20
}

function removeStringValues(obj) {
    // your code here

    for(var key in obj){
        if(typeof obj[key] === 'string'){
            delete obj[key]
        }
    }
    
    return obj
}

removeStringValues(obj);
console.log(obj); // { age: 20 }

// se recorre el obj con for()
// se evalua con if cual es la condicion del obj[key] con typeof, si es string lo borra y devuelve el objeto 