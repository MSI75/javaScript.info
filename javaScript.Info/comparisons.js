// comparisons
// We know many comparison operators from maths.
// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
// Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

// Boolean is the result

// All comparison operators return a boolean value:

// true – means “yes”, “correct” or “the truth”.
// false – means “no”, “wrong” or “not the truth”.

/*

console.log(7 < 5)
console.log(7 > 5)
console.log(5 <= 5)
console.log(5 === 5)
console.log(5 != 65)

*/

/*

let result = 7 > 5
console.log(result)

*/

// String comparison
// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

/*

console.log('z' > 'a')
console.log('Z' > 'A')
console.log('a' > 'A')
console.log('A' > 'a')

*/


/*


The algorithm to compare two strings is simple:

Compare the first character of both strings.
If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
Repeat until the end of either string.
If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

*/

/* console.log('Glow' > 'Glee')
console.log('Bee' > 'Be') */

// comparisons of the different type
// When comparing values of different types, JavaScript converts the values to numbers.

/*

console.log('5' > 1)
console.log('01' == 1)

console.log(true > 1) // false
console.log(true == 1) // true
console.log(false == 0) // true


*/

/*

let a = 0
console.log(Boolean(a)) // false
let b = '0'
console.log(Boolean(b)) // true
console.log(a == b) // true

*/

// Strict equality
// A regular equality check == has a problem. It cannot differentiate 0 from false:
/*

console.log(0 == false)
console.log('' == false)

*/
// A strict equality operator === checks the equality without type conversion.
// In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.
// console.log(0 === false)

// comparisons null and undefined
// There’s a non-intuitive behavior when null or undefined are compared to other values.
// For a strict equality check ===

// console.log(null === undefined)

// For a non-strict check ==

// console.log(null == undefined)

// Strange result: null vs 0
/*

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null === 0) // false
console.log(null >= 0) // true

*/

// An incomparable undefined
// The value undefined shouldn’t be compared to other values:
/*

console.log(undefined > 0) // false
console.log(undefined < 0) // false
console.log(undefined == 0) // false

*/

// work 

/* 

5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false 

*/