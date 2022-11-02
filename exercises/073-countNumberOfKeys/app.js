function countNumberOfKeys(obj) {
    // your code here
return Object.keys(obj).length
}

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 5
  };
  let output = countNumberOfKeys(obj);
  console.log(output); 

  // se recorre el obj con la propiedad Object.keys() y se cuenta los elemento con .length