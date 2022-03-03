// Nullish coalescing operator '??'
// The nullish coalescing operator is written as two question marks ??.

/* let user;
console.log(user ?? 'MSI') // "MSI" (user not defined) */

// assigned to a name:
/* let userName = 'John'
console.log(userName ?? "Not defined") // "John"

let firstName = null
let lastName = undefined
let nickName = 'SuperCoder'

console.log(firstName ?? lastName ?? nickName ?? "Anyone")  // 'SuperCoder' */

// Comparison with ||

/* let firstName = null
let lastName = undefined
let nickName = 'SuperCoder'

console.log(firstName || lastName || nickName || "Anyone")  // 'SuperCoder' */

// The important difference between them is that:

// || returns the first truthy value.
// ?? returns the first defined value.

/* let height = 0
console.log(height ?? 100)
console.log(height || 100)
 */
/*


The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed.
so the result of || is the second argument, 100.
The height ?? 100 checks height for being null/undefined, and it’s not,
so the result is height “as is”, that is 0.


*/

// Precedence

/* let height = null
let width = null
let area = (height ?? 100) * (width ?? 50)
console.log(area) */

// Using ?? with && or || 
/* 

let x = 1 && 2 ?? 3
console.log(x)  // SyntaxError  

*/

/* 

let x = (1 && 2) ?? 3
console.log(x) 

*/