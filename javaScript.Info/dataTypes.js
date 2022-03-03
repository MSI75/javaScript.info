// There are 8 basic data types in JavaScript.

// number for numbers of any kind: integer or floating - point, integers are limited by ±(253 - 1).
// bigint is for integer numbers of arbitrary length.
// string for strings.A string may have zero or more characters, there’s no separate single - character type.
// boolean for true / false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// object for more complex data structures.
// symbol for unique identifiers.

// he typeof operator allows us to see which type is stored in a variable.

// Usually used as typeof x, but typeof(x) is also possible.
// Returns a string with the name of the type, like "string".
// For null returns "object" – this is an error in the language, it’s not actually an object.


// work 
let name = 'MSI'
console.log(`Hello ${1}`)
console.log(`Hello ${'name'}`)
console.log(`Hello ${name}`)

// var
// var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them. 
// “var” has no block scope
// declared with var, are either function-scoped or global-scoped. They are visible through blocks. 

// if in var 
if (true) {
    var test = true;
}
console.log(test)

// for in var 
for (var i = 0; i < 10; i++) {
    var love = 'I hate love'
}
console.log(love)
console.log(i)

// function in var 
function sayHi() {
    if (true) {
        var phrase = 'I hate love'
    }
    console.log(phrase)
}
sayHi()
// console.log(phrase)  // ReferenceError

// Declare the same variable with var 
var userName = 'MSI'
var userName = 'my name'
console.log(userName)

// “var” variables can be declared below their use 