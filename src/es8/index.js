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