
// let arr = [-5, 6, 0, 4, 0, 1, 6]

/////////////// promise


// class myCustomPromise {
//     constructor(handler) {
//         this.status = 'pending'
//         this.value = null

//         const resolve = value => {
//             if(this.status === "pending") {
//                 this.status = 'fulfilled'
//                 this.value = value
//             }
//             try {
//                 handler(resolve, reject)
//             } catch(err) {
//                 reject(err)
//             }
//         }
//         const reject = value => {
//             if(this.status === "pending") {
//                 this.status = 'rejected'
//                 this.value = value
//             }
//         }
//     }
//     then(onFulfilled, onRejected) {
//         if(this.status === 'fulfilled') {
//             onFulfilled(this.value)
            
//         } else if(this.status === 'rejected') {
//             onRejected(this.value)
//         }
//     }
//     catch(onRejected) {
//         if(this.status === 'rejected') {
//             onRejected(this.value)
//         }
//     }
// }

// let p = new myCustomPromise((resolve, reject) => {
//     if(arr.length > 1) {
//         resolve(arr)
//     } else {
//         reject('shorter')
//     }
// })
// .then((res) => {
//     console.log(res);
// })

// let pr = new Promise((resolve, reject) => {
//     if(arr.length > 4) {
//         resolve('long')
//     } else {
//         reject('short')
//     }
// })

// pr.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     throw new Error(err)
// }).finally(() => {
//     console.log('finish');
// })



/////////////// reduce

// let arr = [1,2,3,4,5]

// Array.prototype.customReduce = function(fn, val) {
//     let acc = val || 0

//     for(let i = 0; i < this.length; i++) {
//         acc = fn(acc, this[i], i, this)
//     }

//     return acc
// }

// let a = arr.customReduce((acc, n, index, arr) => {
    

//    return acc += n

// }, 0)

// console.log(a);

///////////////  Duplicates

// Array.prototype.showDuplicates = function() {
//     let newArr = []

//     this.map((n, i, arr) => {
//         console.log(n, i);
//         if(arr.indexOf(n) != i) {
//             newArr.push(n)
//         }
//     }) 

//     return newArr
// }
// let arr = [-5, 6, 0, 4, 0, 1, 6]

// function dup(arr) {
//     let obj = {}
//     let newArr = []

//     for(let i = 0; i < arr.length; i++) {
//         if(obj[arr[i]]) {
//             obj[arr[i]] = obj[arr[i]] + 1
            
//         } else {
//             obj[arr[i]] = 1
//         }
//     }
//     for (x in obj) {
//         if(obj[x] !== 1) {
//             newArr.push(x)
//         }
//     }
//     return newArr
// }

// console.log(dup(arr))

// function getString(str) {
//     let obj = {}

//     for(let i = 0; i < str.length; i++) {
//         if(obj[str[i]]) {
//             obj[str[i]] = obj[str[i]] + 1
//         } else {
//             obj[str[i]] = 1
//         }
//     }

//     return obj
// }

// console.log(getString('hayastan'));


// let a = arr.showDuplicates()
// console.log(a);

///////////////////////  BankApp

// class BankUser {
//     #account1
//     #account2

//     constructor(name, surname) {
//         this.name = name
//         this.surname = surname
//         this.#account1 = {
//             name: "Hakob1",
//             password: 1234,
//             balance: 50000
//         }
//         this.#account2 = {
//             name: "Hakob2",
//             password: 5678,
//             balance: 30000
//         }
//         this.accounts = [this.#account1, this.#account2]
//     }

//     get account1_Balance() {
//         return this.#account1.balance
//     }
//     get account2_Balance() {
//         return this.#account2.balance
//     }

//     cashOut(password, amount) {
//         let chosenAcc = this.accounts.filter(ac => ac.password == password)[0]

//         if (amount > chosenAcc.balance) {
//             throw new Error(`in account ${chosenAcc.name} not enough money`)
//         } else {
//             chosenAcc.balance -= amount
//             console.log(`You have cashed out ${amount} AMD from ${chosenAcc.name} account
//         Your balance now is ${chosenAcc.balance}`);
//         }
//     }
//     creditAccount(password, amount) {
//         let chosenAcc = this.accounts.filter(ac => ac.password == password)[0]

//         if (typeof amount !== "number") throw new Error('you must write digits')
        
//         if(amount < 0) {
//             throw new Error('please write real number')
//         } else {
//             chosenAcc.balance += amount
//             console.log(`your balance has been topped up ${amount}.
//             Your balance now is ${chosenAcc.balance}`);
//         }

//     }
//     getLoan(password) {

//     }

// }

// const myBank = new BankUser('Hakob', 'Ayvazyan')

// console.log(myBank)
// myBank.cashOut(1234, 10000)
// myBank.creditAccount(1234, 1000)
