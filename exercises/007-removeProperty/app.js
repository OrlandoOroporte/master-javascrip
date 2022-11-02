function removeProperty(obj, key) {
  // your code here
  delete obj[key];
  
}

let casa = {
  carro:"toyota",
  moto: "bera"
}

removeProperty(casa, "carro")
console.log(casa)