// The "switch" statement
// A switch statement can replace multiple if checks.

/*

The syntax
The switch has one or more case blocks and an optional default.

switch(x) {
    case 'value1':  // if (x === 'value1')
      ...
      [break]

    case 'value2':  // if (x === 'value2')
      ...
      [break]

    default:
      ...
      [break]
  }

  */

/*

//   Example

let age = 25;

switch (age) {
    case 12:
        console.log('You are small')
        break
    case 25:
        console.log('You are Young man')
        break
    case 45:
        console.log('Your are vary young man')
        break
    default:
        console.log('You are not use age ')
}

*/

/* // An example without break:

let age = 25;
switch (age) {
    case 12:
        console.log('You are small')
        break
    case 25:
        console.log('You are young man')
    case 45:
        console.log('You are vary young man')
    default:
        console.log('You are not use age')
} */

// Any expression can be a switch/case argument
/*

let a = '1'
let b = 0
switch (+a) {
    case b + 1:
        console.log('This runs, because +a is 1, exactly equal b + 1')
        break
    default:
        console.log("this does not run")
}

*/

// Grouping of “case”

/*

let a = 3
switch (a) {
    case 4:
        console.log('Right')
        break
    case 3:
    case 5:
        console.log('Wrong')
        console.log('Why do not you take a match class ?')
        break
    default:
        console.log('The result is strong really !')
}


*/

/*

let age = prompt('Enter a value')

switch (age) {
    case '0':
    case '1':
        alert('Zero and One')
        break
    case '2':
        alert('Two')
        break
    case 3:
        alert('Never executes!')
        break
    default:
        alert('An unknown value')
}

 */


// Rewrite the "switch" into an "if"

/* switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;

    default:
      alert( 'We hope that this page looks ok!' );
  } */

/*


let browser = prompt("Enter the number ", '')

if (browser == 'Edge') {
    console.log('You have got the Edge!');
}
else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
    console.log("Okay we support these browsers too")
}
else {
    console.log("We hope that this page looks ok!")
}


*/

// Rewrite "if" into "switch" 
/* let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
 */

let a = +prompt('a?', '');
switch (a) {
    case 0:
        console.log(0)
        break
    case 1:
        console.log(1)
        break
    case 2:
    case 3:
        console.log('2,3')
        break
    default:
}