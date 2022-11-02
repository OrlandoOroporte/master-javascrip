function findShortestWordAmongMixedElements(arr) {
    // your code here
 let b = arr.filter( e => typeof e  === 'string')

 if(!b || !Array.isArray(b) || b.length < 1) return ''
 else {
     let a = '000000000000000000000000000000000'
     b.map(i => i.length < a.length ? a = i : null )
     return a
 }

}
let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'