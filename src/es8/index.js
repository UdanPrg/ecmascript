//! Entries
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries)
console.log(entries.length)

//! Object Values
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const values = Object.values(data);
console.log(values)
console.log(values.length)

//! Padding
const string = 'hello';
console.log(string.padStart(8, 'hi '))
console.log(string.padEnd(13, '-----'))

//! Trainig commas
const obj = {
    name: 'Oscar', //<-- ','
}

const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(()=> resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
}

const hellAsync = async () =>{
    const hello = await helloWorld();
    console.log(hello);
}

hellAsync();

const anotherFunction = async () =>{
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error)
    }
}

anotherFunction();