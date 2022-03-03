// Logical Operator
// There are four logical operators in JavaScript
// | (OR), && (AND), ! (NOT), ?? (Nullish Coalescing

/* let n = 5
for (let i = n - 1; i >= 1; i--) {
    n = n * i
}
console.log(n) */

// || (OR)
// The “OR” operator is represented with two vertical line symbols:

/*

let a = 5, b = 7
let result = a || b
console.log(result)  // 5

*/

/*

console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false

*/

/*

if (1 || 0) {
    console.log('truthy!'); // truthy!
}
if (0 || 0) {
    console.log('truthy!'); //
}

*/

/*

let hours = 9

if (hours < 10 || hours > 18) {
    console.log('The Office is closed !') // The office is closed !
}

*/

/*

let hours = 12
let isWeekend = true
if (hours < 10 || hours > 18 || isWeekend) {
    console.log('The office is closed !')
}

*/

// OR "||" finds the first truthy value

/* console.log(1 || 0)  // 1
console.log(0 || 1)  // 1
console.log(null || 1) // 1
console.log(null || 0 || 1) // 1
console.log(undefined || null) // null

let firstName = ""
let lastName = ""
let nickName = "SuperCoder"

console.log(firstName || lastName || nickName || "MSI") // "SuperCoder" */
/*


console.log(true || console.log('MSI')) // true
console.log(false || console.log('MSI')) // "MSI"

*/

// && (AND)
// The AND operator is represented with two ampersands &&:

/* console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false

let hours = 12
let minute = 30

if (hours == 12 && minute == 30) {
    console.log('The time is 12.30') // 'The time is 12.30'
} */

/* if (1 && 0) { // evaluated as true && false
    console.log('do not work, because the result the falsy')
} */

// AND “&&” finds the first falsy value
// result = value1 && value2 && value3;

/*

console.log(1 && 0)  // 0
console.log(1 && 5)  // 5
console.log(null && 5) // null
console.log(0 && 'no matter what'); // 0

*/

/* console.log(1 && 2 && null && 3) // null

console.log(1 && 2 && 3) // 3 */

// Don’t replace if with || or &&
/*

let x = 1

let y = (x > 0) && console.log('MSI')
console.log(y)
// "MSI"
// undefined

if (x > 0) console.log('MSI') // "MSI"

*/

// ! (NOT)
// The boolean NOT operator is represented with an exclamation sign !.
// result = !value;

/* console.log(!true) // false
console.log(!false) // true
console.log(!0) // true
console.log(!1) // false
console.log(!!'non-empty string') // true
console.log(!!null) // false

console.log(Boolean('non-empty string')) // true
console.log(Boolean(null)) // false  */

// work

// console.log(null || 2 || undefined) // 2

// console.log(console.log(1) || 2 || console.log(3)) // 1 , 2

// console.log(1 && null && 2) // null

// console.log(console.log(1) && console.log(2)) // 1 , undefined 

// console.log(null || 2 && 3 || 4) // 3

// console.log(age >= 14 && age <= 99)
// console.log(!(age >= 14 && age <= 99))
/* 

if (-1 || 0) {
    console.log('One') // "One"
}
if (-1 && 0) {
    console.log('Two')  // 
}

if (null || -1 && 1) {
    console.log('Three') // "Three"
}

*/


let userName = prompt("Write your useName ", '')
if (userName == "Admin") {
    let password = prompt("your password", '')
    if (password == 'TheMaster') {
        alert("Welcome!")
    }
    else if (password == "" || password == null) {
        alert("Cancel")
    }
    else {
        alert('Wrong password')
    }
}
else if (userName == "" || password == null) {
    alert("Cancel")
}
else {
    alert("I do not know you")
}