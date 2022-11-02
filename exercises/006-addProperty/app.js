function addProperty(obj, key) {
  // your code here
  obj[key] = true
  return obj
}

let myObj = {

};

addProperty(myObj,"mi casa");
addProperty(myObj,"carro")

console.log(myObj)
