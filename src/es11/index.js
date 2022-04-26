const button = document.getElementById('btn');

button.addEventListener('click', async function (){
    const module = await import('./file.js');
    module.hello()
})

//! GIB 'n(number)'
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber) // 9007199254740991n
console.log(anotherBigNumber) // 9007199254740991n

//! Promise allSettled
const promise1 = new Promise((resolve, reject) => reject('reject'))
const promise2 = new Promise((resolve, reject) => resolve('resolve'))
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'))

Promise.all([promise1, promise2, promise3])
    .then(response => console.log(response))

// [
//     { status: 'rejected', reason: 'reject' },
//     { status: 'fulfilled', value: 'resolve' },
//     { status: 'fulfilled', value: 'resolve 1' }
// ]

//! GlobalThis
console.log(windos)
console.log(globalThis)

//! Operador NULL
const fooo = null ?? 'default string'; // default string
const fooo1 = 'asd' ?? 'default string'; // 'asd'
console.log(fooo)
console.log(fooo1)

//! Optional sheining
const user = {};
console.log(user?.profile?.email)

if(user?.profile?.email){
    console.log('email')
}else{
    console.log('fail')
}