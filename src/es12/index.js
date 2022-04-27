//! ReplaceAll
const string = "Javascript es maravilloso, con Javascript puedo crear el futuro de la web";

const replecedString = string.replace("Javascript", "Python");
console.log(replecedString)

const replecedString2 = string.replaceAll("Javascript", "Python")
console.log(replecedString2)

//! Métodos Privados '#method'
class Message {
    #show(val){
        console.log(val);
    };
    get #add(val){
        ...
    }
}
const message = new Message();
message.show('Hola');


//! Promise '.any'
const promise1 = new Promise((resolve, reject) => reject("1"))
const promise2 = new Promise((resolve, reject) => resolve("2"))
const promise3 = new Promise((resolve, reject) => resolve("3"))

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))

//! Weak Ref
class anyClass{
    constructor(element){
        this.ref = new WeakRef(element)
    }
    {...}
}

//! Operadores nuevos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse)

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse)

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse)