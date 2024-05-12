
/////////////// hw-1

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



////////////// hw-2

/////// recursion

// const staircase = {
//     step: 5,
//     nextStep: {
//         step: 4,
//         nextStep: {
//             step: 3,
//             nextStep: {
//                 step: 2,
//                 nextStep: {
//                     step: 1,
//                 },
//             },
//         },
//     },
// };

// function goBySteps(obj) {
//     if(obj.step === 1) return `step No. ${obj.step}`

//     while(obj.step > 1) {
//         console.log(`step No. ${obj.step}`);
//         return goBySteps(obj.nextStep)
//     }
// }

// console.log(goBySteps(staircase))


/////////////////// get persons


// let persons = [
//     {
//         id: 325326,
//         firstname: "Dan",
//         lastname: "Tiger",
//         image: "url",
//         birthday: "03.18.1990",
//         gender: "Male",
//         hobbie: ["Football", "Reading"],
//         nationality: "switzerland",
//         friends: [325330, 325334],
//         residence: 10041
//     },
//     {
//         id: 325326,
//         firstname: "Fan",
//         lastname: "Tiger",
//         image: "url",
//         birthday: "03.18.2005",
//         gender: "Male",
//         hobbie: ["Football", "Reading"],
//         nationality: "switzerland",
//         friends: [325330, 325334],
//         residence: 10041
//     },
//     {
//         id: 325330,
//         firstname: "Frank",
//         lastname: "Lion",
//         image: "url",
//         birthday: "10.05.1991",
//         gender: "male",
//         hobbie: ["walking", "basketball"],
//         nationality: "syria",
//         friends: ["", "", ""],
//         residence: 10041
//     },
//     {
//         id: 325334,
//         firstname: "Bilal",
//         lastname: "Zakki",
//         image: "url",
//         birthday: "08.19.1999",
//         gender: "male",
//         hobbie: ["swimming", "walking"],
//         nationality: "canda",
//         friends: [325330, 325326],
//         residence: 10012
//     }
// ]

// function findPerson(firstname, lastname) {
//     const person = persons.filter(person => {
//         return person.firstname === firstname && person.lastname === lastname
//     })

//     return person
// }

// console.log(findPerson('Dan', 'Tiger'))


// function getAllFullnames(persons) {

//     const allFirstNames = persons.map(person => person.firstname)
//     const allLastNames = persons.map(person => person.lastname)

//     return {
//         allFirstNames,
//         allLastNames
//     }
// }

// console.log(getAllFullnames(persons))


////////////
/////////////////////// TODO
////////////

// let todosArr = []
// let completed = []


// let todoSection = document.createElement('section')
// todoSection.classList.add('todo_section')
// document.body.append(todoSection)

// todoSection.insertAdjacentHTML(
//     "beforeend",
//     `<h2>TODO</h2>
//     <form class="todo_form">
//         <input class="todo_input" type="text" />
//         <button class="todo_add_btn">ADD</button>
//     </form>
//     <div class="todos_div">

//     </div>
//     <div class="todo_footer">
//         <p class="todos_count">Completed ${completed.length} / ${todosArr.length}</p>
//     </div>
//     `
// )

// ////// render todo

// let todosDiv = document.querySelector('.todos_div')
// let input = document.querySelector('.todo_input')
// let addBtn = document.querySelector('.todo_add_btn')
// let todosCount = document.querySelector('.todos_count')

// function updateTodos(todosArr) {
//     todosArr.forEach((todo) => {
//         todosDiv.insertAdjacentHTML(
//             'afterbegin',
//             `<div class="todo_div">
//                 <input type="checkbox" class="todo_completed" />
//                 <p class="todo_name">${todo.name}</p>
//                 <button id="${todo.id}" onclick="deleteTodo(${todo.id})" class="todo_delete_btn">X</button>
//             </div>`
//         )
//     })
// }

// updateTodos(todosArr)

// ////// updage todo

// function updateTodosContent(todosArr) {
//     todosDiv.innerHTML = null
//     updateTodos(todosArr)
// }

// /////// add todo

// function addTodo(e) {
//     e.preventDefault()

//     if (input.value.trim() != '') {
//         todosArr = [
//             {
//                 id: Math.random(),
//                 name: input.value,
//                 completed: false
//             },
//             ...todosArr
//         ]

//         updateTodosContent(todosArr)
//         input.value = ''
//         todosCount.innerHTML = `Completed ${completed.length} / ${todosArr.length}`

//         callChangeCompletedFunction()

//     }
// }

// addBtn.addEventListener('click', (e) => addTodo(e))

// ///////// delete todo

// function deleteTodo(id) {
//     let btns = [...document.querySelectorAll('.todo_delete_btn')]

//     btns.forEach(btn => {
//         if (btn.id == id) {
//             btn.parentElement.remove()
//         }
//     })

//     todosArr = todosArr.filter(todo => todo.id !== id)
//     completed = todosArr.filter(c => c.completed)

//     todosCount.innerHTML = `Completed ${completed.length} / ${todosArr.length}`
// }


// //////// checkbox

// function callChangeCompletedFunction() {
//     let checkboxes = [...document.querySelectorAll('.todo_completed')].reverse()
//     checkboxes.forEach(changeCompleted)
// }

// function changeCompleted(checkbox, index) {
//     checkbox.addEventListener('change', (e) => {
//         todosArr[index].completed = e.target.checked
//         if (e.target.checked) {
//             completed.push(todosArr[index])
//         }

//         completed = todosArr.filter(c => c.completed)
//         todosCount.innerHTML = `Completed ${completed.length} / ${todosArr.length}`
//     })
// }

// callChangeCompletedFunction()



//////////
//////////////////// COUNTER
//////////


let countnerSection = document.createElement('section')
countnerSection.classList.add('counter_section')
document.body.append(countnerSection)

countnerSection.insertAdjacentHTML(
    'afterbegin',
    `<h1 class="counter_title">Counter</h1>
    <input type="number" readonly class="counter_number" />
    <div class="counter_btns_div">
        <button class="decrease_btn">-</button>
        <button class="increase_btn">+</button>
        <button class="reset_btn">Reset</button
    </div>
    `
)

let counterNumber = document.querySelector('.counter_number')
counterNumber.value = 0

let decreaseBtn = document.querySelector('.decrease_btn')
let increaseBtn = document.querySelector('.increase_btn')
let resetBtn = document.querySelector('.reset_btn')

let decrement = function() {
    if(counterNumber.value > 0) counterNumber.value--
}

let increment = function() {
    counterNumber.value++
}

let reset = function() {
    counterNumber.value = 0
}


decreaseBtn.addEventListener('click', decrement)
increaseBtn.addEventListener('click', increment)
resetBtn.addEventListener('click', reset)