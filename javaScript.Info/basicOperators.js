// unary 
// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number: 
/* let x = 1
x = -x
console.log(x) */

// An operator is binary if it has two operands. The same minus exists in binary form as well: 
/* let x = 2, y = 7
console.log(y - x)
 */
// Maths

// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.

// The first four are straightforward, while % and ** need a few words about them. 

// Remainder %
/* let x = 7
let y = 25
console.log(y % x) */

// Exponentiation ** 
// The exponentiation operator a ** b raises a to the power of b. 
// In school maths, we write that as ab. 

/* let x = 5
let y = 3

console.log(x ** y)

console.log(x ** (1 / 2))
 */

// String concatenation with binary + 

/* let s = 'my' + ' ' + 'string'
console.log(s)

let add = '7' + 2
console.log(add)

let add1 = 7 + '2'
console.log(add1)

console.log(2 + 2 + '8')  // "48" 
console.log('2' + 2 + 8) // "228" and not "12" */

// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers. 

/* console.log('75' + '25') // '7525' and not '100'
console.log('75' / '25') //  3
console.log(7 - '2') // 5 */

// Numeric conversion, unary +
// The plus + exists in two forms: the binary form that we used above and the unary form.

// No effect no numbers 
/* let x = 1
console.log(+x) // 1

let y = -2
console.log(+y) // -2

// Converts non number 
console.log(+true) // 1
console.log(+"") // 0 */

/* let apple = '75'
let orange = '125'
console.log(apple + orange) // '75125'

// Binary Plus + 
console.log(+apple + +orange) // 200 */

// Assignment 
/* let x = 2 * 2 + 1
console.log(x) */
// Assignment = return value
/* let a = 5
let b = 7
let c = 3 - (a = b + 5)
console.log(c) // -9
console.log(a) // 12 */

// chaining Assignment 
/* let a, b, c;
a = b = c = 2 + 2
console.log(a)
console.log(b)
console.log(c)

c = 2 + 2
a = c
b = c
console.log(a)
console.log(b)
console.log(c) */

// Modify in place 
/* let n = 2 + 2
n = n + 5
n = n + 6
console.log(n) */
/* let n = 7
n += 5
n *= 6
n /= 9
n -= 9
console.log(n) */

// Increment 
// Increment ++ increases a variable by 1: 
/* let count = 2
count++
console.log(count) // 3 */

// Decrement 
// Decrement -- decreases a variable by 1: 
/* let count = 7
count--
console.log(count) // 6 */

// The operators ++ and -- can be placed either before or after a variable.

// When the operator goes after the variable, it is in “postfix form”: counter++ , counter--.
// The “prefix form” is when the operator goes before the variable: ++counter, --counter.

// let a = 7

// let b = ++a
// console.log(a) // 8
// console.log(b) // 8

/* let c = a++
console.log(c) // 7
console.log(a) // 8 */

// let d = --a
/* console.log(d) // 6
console.log(a) // 6
*/

/* let e = a--
console.log(e) // 7
console.log(a) // 6 */

/* let count = 7
console.log(2 * count++) // 14
console.log(2 * ++count) // 18 */

/* let count = 1
console.log(2 * count)  // 2
count++ */

// Bitwise operators
// Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.
// The list of operators:

// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )


// Comma
// The comma operator , is one of the rarest and most unusual operators 
/* let a = (1 + 2, 3 + 2)
console.log(a)

// three operations in one line
for (let a = 5, b = 7, c = a * b; a < 10; a++) {

} */

// Work 
// The postfix and prefix forms 

/* let a = 1, b = 1
let c = ++a
let d = b++
console.log(c) // 2
console.log(d) // 1
 */
// Assignment result 
/* let a = 2
let x = 1 + (a *= 2)
console.log(x) */

// Type conversions 
// What are results of these expressions? 
/* "" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2 */

// Fix the addition 

let a = prompt('First number', 1)
let b = prompt('Second number', 2)
// alert(a + b)  // '12'

alert(+a + +b) // 3