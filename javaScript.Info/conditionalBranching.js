// Conditional Branching

// To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.

// if statement

// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

// { } curly braces
/* let year = 2023
if (year == 2023) {
    console.log('I am happy year of life')
} */

/* let year = 2025
if (year == 2025) {
    console.log('My life partner with me')
} */

// Boolean Conversion
// falsy value -> 0, null, undefined, "", NaN, false


// The “else” clause
// The if statement may contain an optional “else” block. It executes when the condition is falsy.
/* let year = 2020
if (year == 2020) {
    console.log('I hate love for your')
}
else {
    console.log('I love my allah')
} */


// else if

/* let year = 2025
if (year == 2025) {
    console.log('My life partner in year in sha allah');
} if (year == 2023) {
    console.log('I will be comeback my job sector')
}
else {
    console.log('Enjoy my life others years !')
} */

// Conditional operator ‘?’
// Sometimes, we need to assign a variable depending on a condition.

/* let access;
let age = 18;
if (age > 18) {
    access = true
}
else {
    access = false
}

console.log(access) */

/* let age = 18
let access = age < 18 ? true : false
console.log(access) */

// In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:
// the same
// let accessAllowed = age > 18;

// Multiple ‘?’
// A sequence of question mark operators ? can return a value that depends on more than one condition.

/* let age = 25

let access = age < 3 ? 'Hi, baby' : age < 18 ? 'Hello' : age < 100 ? 'Greeting' : 'what an unusual age !'

console.log(access) */

/* let age = 25

if (age < 3) {
    console.log('Hi, baby')
} else if (age < 18) {
    console.log('Hello')
} else if (age < 100) {
    console.log("Greeting")
} else {
    console.log("What an unusual age !")
} */

// Non-traditional use of ‘?’
// Sometimes the question mark ? is used as a replacement for if:
/* let company = 'Netscape'
// (company == 'Netscape') ? console.log('Right') : console.log('Wrong')
if (company == 'Netscape') {
    console.log("Right")
} else {
    console.log('Wrong')
}
 */

// Work 

/* if ('0') {
    console.log("Hello World")
}

let value = 'EcmaScript'

if (value == 'EcmaScript') {
    console.log('Right')
}
else {
    console.log('We do not know EcmaScript')
} */

/* let a = 1
if (a > 0) {
    console.log(1)
} else if (a < 0) {
    console.log(-1)
}
else {
    console.log(0)
} */

/* let a = 5, b = 7
let result = (a + b < 4) ? "Below" : "Over"
console.log(result) */

let login = ''

let message = (login == 'Employee') ? "Hello" : (login == 'Director') ? 'Greeting' : (login == '') ? 'No login' : ''
console.log(message)