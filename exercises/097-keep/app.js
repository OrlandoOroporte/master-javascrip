function keep (arr, elem){

    let newArr = []

    arr.forEach(e => {
        if (e == elem)[
            newArr.push(e)
        ]
        
    });
  return newArr
}
let output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); 