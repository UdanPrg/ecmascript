//! Flat
let array = [1,2,3, [1,2,3,[1,2,3]]];
console.log(array.flat(2));
// [
//     1, 2, 3, 1, 2,
//     3, 1, 2, 3
// ]

//! FlatMap
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value *2]));
// [
//    1, 2, 2, 4,  3,
//    6, 4, 8, 5, 10
// ]

//! TrimStart
let hello = '          hello World'
console.log(hello) // |          hello World
console.log(hello.trimStart()) // |hello World

//! TrimEnd
let hello = 'hello World          '
console.log(hello) // hello World          |
console.log(hello.trimEnd()) // hello World|

//! Optional '(error)'
//* try{

//* }catch{
//*     error // Ya disponible dentro
//* }

//! FromEntries

let entries = [["name", "oscar"], ["age", 32]]
console.log(Object.fromEntries(entries)) // { name: 'oscar', age: 32 }

//! Objeto tipo Symbol
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);