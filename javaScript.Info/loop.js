// Loop
// We often need to repeat actions.

// while syntax
/* while (condition) {
    // code
    // so-called "loop body"
  } */

/* let i = 0
while (i < 3) {
    console.log(i) // 1, 2, 3
    i++
} */

/* let i = 3
while (i) {
    console.log(i) // 3, 2, 1
    i--
} */

/*

let i = 3
while (i) console.log(i--) // 3, 2, 1

*/

// The “do…while” loop   syntax:

/*
do {
    // loop body
  } while (condition);
 */

/* let i = 0
do {
    console.log(i) // 3, 2, 1
    i++
} while (i < 3)  */

// The “for” loop
// The for loop is more complex, but it’s also the most commonly used loop. syntax
/*

for (begin; condition; step) {
    // ... loop body ...
  }

*/

/*

for (let i = 0; i < 10; i++) {
    console.log(i)
}

*/

// Let’s examine the for statement part-by-part:
/*

begin	    let i = 0	Executes once upon entering the loop.
condition	i < 3	    Checked before every loop iteration. If false, the loop stops.
body	   alert(i)	    Runs again and again while the condition is truthy.
step	  i++	        Executes after the body on each iteration.

*/

/*

// for (let i = 0; i < 3; i++) console.log(i)

// run begin
let i = 0;

// if condition → run body and run step
if (i < 3) {
    console.log(i)
    i++
}

// if condition → run body and run step
if (i < 3) {
    console.log(i)
    i++
}

// if condition → run body and run step
if (i < 3) {
    console.log(i)
    i++
}

// if condition → run body and run step
if (i < 3) {
    console.log(i)
    i++
}
// ...finish, because now i == 3

*/

// Inline variable declaration

/*

for (let i = 0; i < 3; i++) {
    console.log(i)
}
console.log(i)  // ReferenceError

*/

// Instead of defining a variable, we could use an existing one:

/*

let i = 0
for (i = 0; i < 3; i++) {
    console.log(i) // 0, 1, 2
}
console.log(i)  // 3 visible, because declared outside of the loop

*/

// Skipping parts
/*

let i = 0
for (; i < 3; i++) {//  no need for "begin"
    console.log(i)
}

*/

// We can also remove the step part:
/*

let i = 0
for (; i < 3;) {
    console.log(i++)
}

// This makes the loop identical to while (i < 3).



*/

// We can actually remove everything, creating an infinite loop:

/*

for (; ;) {
    // repeats without limits
    console.log("MSI")
}
// Please note that the two for semicolons ; must be present. Otherwise, there would be a syntax error.

*/

// Breaking the loop
// Normally, a loop exits when its condition becomes falsy.

/*

let sum = 0
while (true) {
    let value = +prompt("Enter the number", '')
    if (!value) break; // (*)

    sum += value;
}
alert('sum ' + sum)

*/

// Continue to the next iteration

/*

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i)  // 1, 3, 5, 7, 9
}

*/

// The continue directive helps decrease nesting

/*

for (let i = 0; i < 10; i++) {
    if (i % 2) {
        console.log(i) // 1, 3, 5, 7, 9
    }
}

*/

// No break/continue to the right side of ‘?’

// let value = (i < 5) ? console.log(i) : continue; // continue isn't allowed here

/*


if (i < 5) {
    console.log(i)
}
else {
    continue;
}


*/


// Labels for break/continue

/* for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        let input = prompt(`Enter the value${i},${j}`, '')
        // what if we want to exit from here to Done (below)?
    }
}
alert('Done') */

// A label is an identifier with a colon before a loop: syntax
/*

labelName: for (...) {
    ...
}

*/

/* outer: for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        let input = prompt(`value at coords (${i}, ${j})`, '')

        if (!input) break outer;
    }
}

alert("Done !") */

/*

let i = 0
// while (++i < 5) console.log(i) // 1, 2, 3, 4
while (i++ < 5) console.log(i)  // 1, 2, 3, 4, 5

*/

// for (let i = 0; i < 5; i++)console.log(i)
// for (let i = 0; i < 5; ++i)console.log(i)

/* for (let i = 2; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
} */

// Replace "for" with "while" 
/* for (let i = 0; i < 3; i++) {
    console.log(`number ${i}`)
}

let i = 0
while (i < 3) {
    console.log(`number ${i}`)
    i++
} */

/* 

let num;
do {
    num = prompt("Enter a number greater then 100 ?", '');
} while (num <= 100 && num) 

*/
/* 
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

    for (let j = 2; j < i; j++) { // look for a divisor..
        if (i % j == 0) continue nextPrime; // not a prime, go next i
    }

    alert(i); // a prime
} */