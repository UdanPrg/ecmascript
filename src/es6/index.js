//! - Function default params f(a=0)
function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//* es6
function newFunction2(name = 'oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}
newFunction2();
newFunction2('Ricardo', 23, 'CO');

//! - Concatenación ${}
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//* es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


// ! Salto de Línea ``
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" + "Nullam iaculis ex nec rutrum cursus. Phasellus at urna sed nisi egestas bibendum in eu augue. Cras varius nunc nisi, vel aliquet ex fringilla non."

//* es6
let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Nullam iaculis ex nec rutrum cursus. Phasellus at urna sed nisi egestas bibendum in eu augue. Cras varius nunc nisi, vel aliquet ex fringilla non.
`;

console.log(lorem);
console.log(lorem2);

 //! Desestrccturación {} = var
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age);

 //* es6
let {name} = person;
console.log(name);

//! Operador de Propagación '...'

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2]
console.log(education);

//! LET = Local Scope

{
    var globalVar = "Global Var"
}

{
    let globalLet = 'Global Let'
    console.log(globalLet)
}

console.log(globalVar)

//! CONST = Inamoved value

const a = 'b';
a = 'a';
console.log(a)

//! Parámetros en Objetos
let name = 'uriel';
let age = 25;

obj = {name: name, age: age};
// es6
obj2 = {name, age}
console.log(obj2);

//! Arrow functions: params=>TODO
const names = [
    {name: 'Oscar', age: 32},
    {name: 'Yesica', age: 27}

];

let listOfNames = names.map(function(item){
    console.log(item.name);
} );

let listOfNames2 = names.map(item=>console.log(item.name));

let listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name =>{
    ...
}

const square = num => num * num;

//! Promesas ASINC Programing

const helloPromise = () =>{
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey!')
        }else{
            reject('Ups!')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(()=> console.log('hola'))
    .catch(error => console.log(error))
//? Investigar como usar promesas para conectar APIs


//! Clases

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return  this.valueA + this.valueB;
    }
}

const calc = new calculator();

console.log(calc.sum(2,2));

//! Importar modulos
import {hello} from './module';

hello();

//! Generadores

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);