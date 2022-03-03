// sum array 

// let arr = [25, 1000, 2, 3, 4, 5, 6]
// console.log(arr)
// console.log(arr.length)

/* let sum = 0
for (let i = 0; i < arr.length; i++) {

    sum += arr[i]
    console.log('The number of sum = ', sum)
}
console.log(sum) */

// reverse Array
/* let revers = []
for (let i = 0; i < arr.length; i++) {
    revers[i] = arr[arr.length - i - 1]
}
console.log(revers) */

// let max = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }

// }
// console.log(max)


// let min = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// console.log(min)

// star patter
/* let n = 5
let str = ''
for (let i = 1; i <= n; i++) {
    // console.log('*' + ' *' + ' *' + ' *' + ' *' )
    for (j = 1; j <= n; j++) {
        str += ' *'
        // console.log(str)
    }
    str += '\n'
    // console.log(str)
}
console.log(str) */


/*

let n = 5
let str = ''
for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        str += " "
    }
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
        str += "*"
    }
    str += '\n'
}
console.log(str)

*/

/*

let color = ['red', 'blue', 'green', 'white', 'black']

for (let i = 1; i < color.length; i++) {
    console.log(color[i])
}

*/

/*

let a = [25, 26]
let max = 0
for (let i = 1; i < a.length; i++) {
    if (a[i] > max) {
        max += a[i]
    }
}
console.log(max)


*/

// 01

/*

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
let sum1 = 0
let sum2 = 0

let sum = (arr_1, arr_2) => {
    for (let i = 0; i < arr_1.length; i++) {
        sum1 += arr_1[i]
    }

    for (let j = 0; j < arr_2.length; j++) {
        sum2 += arr_2[j]
    }
    return sum1 + sum2
}
console.log(sum(arr_1, arr_2))

*/

// 02
/*

function evenFunc(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
evenFunc(22)

*/

// 03
/*

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

let revers = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
    }
}
revers(arr)

*/

/* 04

let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
let arr_5 = [];

for (let i = 0; i < arr_3.length; i++) {
    arr_5[i] = arr_3[i] + arr_4[i]

}
console.log(arr_5) */
/* let str1 = 'javascript'
for (let i = 0; i < str1.length; i++) {
    if ((i) % 2 == 0) {
        console.log(str1[i] + "Z")
    }
} */

// 05

/*
let str2 = "don’t know why";
let result = 'no';
// console.log(str2.length)
for (let i = 0; i < str2.length; i++) {
    if (str2[i] == 'y') {
        result = 'yes';
        break
    }

}
console.log(result) */



// 06

/* let n = 5
let fact = 1
for (let i = 1; i <= n; i++) {
    fact *= i
}
console.log(fact) */

// 07

/* function factorialFunc(n) {
    if (n == 0) {
        return 0
    }
    else if (n < 0) {
        return -1
    }
    else {
        let fact = 1
        for (let i = 1; i <= n; i++) {
            fact *= i
        }
        return fact
    }
}
console.log(factorialFunc(5)) */

// 08


/* let i = 1;
while (true) {
    let pin = +prompt("guess a pin");
    if (pin == 4444) {
        alert("correct!");
        break;
    } else {
        if (i <= 4) {
            alert("try again");
        } else {
            break;
        }
    }
} */



// 09



/* let str3 = "racecar";
// console.log(str3.length)
let str4 = "Java";


function palindromeFunc(str3, str4) {
    for (let i = 0; i < str3.length / 2; i++) {
        if (str3[i] !== str3[str3.length - 1 - i]) {
            console.log('No')
            break
        }
        else {
            console.log('yes')
            break;
        }
    }


    for (let i = 0; i < str4.length / 2; i++) {
        if (str4 !== str4[str4.length - 1 - i]) {
            console.log('no')
            break
        }
        else {
            console.log('yes')
            break
        }
    }

}
palindromeFunc(str3, str4) */




// 10

/* let num1 = 2;
let num2 = 8;
let sum = 0


function sumFunc(num1) {
    for (let i = 1; i <= num1; i++) {
        sum += i
        // console.log(sum)
    }
    return sum
}
console.log(sumFunc(num1))


for (let i = 1; i <= num2; i++) {
    sum += i
    console.log(sum, '+', i, '=', sum)
}
 */


/* 

let s = '1236';
let revers = []
for (let i = 0; i < s.length; i++) {
    revers[i] = s[s.length - i - 1]
}
console.log(revers) 

*/

/* 
let n = 5;
let A = [1, 8, 7, 56, 90]
let max = [0];
for (let i = 0; i < n; i++) {
    if (A[i] > max) {
        max = A[i]
        console.log(max)
    }
}
console.log(max) 

*/


/* let array = [5, 9, 7, 6]
let n = array.length

let xor = []
for (let i = 0; i < n; i++) {
    xor[i] = array[i] ^ array[i + 1]
    console.log(xor)
    // console.log(xor)
}
console.log(xor) */

/* let arr = [5, 9, 2, 6]
let n = arr.length

let bitwiseOR = []
for (let i = 0; i < n; i++) {
    bitwiseOR[i] = arr[i] | arr[i + 1]
}
console.log(bitwiseOR) */

/* let arr = [1, 2, 3, 4];
let n = arr.length;

let sum = 0;
for (let i = 0; i < n; i++) {
    sum += arr[i]
}
console.log(sum) */

/* let arr = [1, 2, 3, 4, 5];
let n = arr.length;

let x = arr[n - 1]
for (let i = n - 1; i > 0; i--) {
    arr[i] = arr[i - 1]
    // console.log(arr)
}
arr[0] = x
console.log(arr) */

/* let arr = [1, 2, 4, 5, 8, 10];
let n = arr.length;

let x = 9;
let count = 0;
for (let i = 0; i < n; i++) {
    if (arr[i] <= x) {
        count++;
        // console.log(count)
    }
}
console.log(count) */