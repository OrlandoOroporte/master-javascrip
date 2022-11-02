let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for (var key in obj2){
        if (obj1[key]){
            obj1[key];
        }
        else{
            obj1[key] = obj2[key];
        }
    }

}
extend(obj1,obj2)
console.log(obj1)

//en este caso solicite con for que evaluara cada key del obj2, 
//si coincide con algun key del obj1 retorna true por lo tanto queda igual. 
// en caso contrario incorpora el key del obj2 al obj1