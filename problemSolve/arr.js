/* let arr = [1, 2, 3, 4, 5];
let n = arr.length;

let x = arr[n - 1]
for (let i = n - 1; i > 0; i--) {
    arr[i] = arr[i - 1]
    console.log(arr)
}
arr[0] = x
console.log(arr) */

/* let arr = [1, 345, 234, 21, 56789];

let n = arr.length;

let max = arr[0];
let min = arr[0];

for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
        max = arr[i]

    }
    if (arr[i] < min) {
        min = arr[i]
    }
}
let p = [max, min]
console.log(p)

*/

/*


let arr = [1, 2, 3, 4, 5];
let n = arr.length;

for (let i = 0; i < n - 1; i += 2) {
    wave = arr[i];
    // console.log(wave)
    arr[i] = arr[i + 1];
    // console.log(arr)
    arr[i + 1] = wave
    // console.log(arr)

}
console.log(arr)


*/

/*

let arr = [5, 3, 1, 6, 9];
let n = arr.length;

let chocolate = arr[0]

for (let i = 0; i < n; i++) {
    if (arr[i] < chocolate) {
        chocolate = arr[i]

    }

}
console.log(chocolate)

*/

/*

et name = ["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"]
let n = name.length

let max = name[0]
for (let i = 0; i < n; i++) {
    if (name[i] > max) {
        max = name[i]
    }
}
console.log(max)

*/


/*
let arr = [1, 2, 3, 4];
let n = arr.length;

let multi1 = arr[0];
let multi2 = arr[0];
for (let i = 0; i < n; i++) {
    if (arr[i] < arr[n - 3]) {
        multi1 = arr[i] + arr[i + 1]
    }
    if (arr[i] < arr[n - 1]) {
        multi2 = arr[i] + arr[i + 1]
    }

}
let p = multi1 * multi2;
console.log(p)

 */


/* let arr = [40, 50];
let n = arr.length;

sum = 0
for (let i = 0; i < n; i++) {
    sum += arr[i]
}
if (sum % 3 == 0) {
    console.log('yes')
}
else {
    console.log('No')
} */

/* let A = [5, 7, 9, 3, 6, 2];
let B = [1, 2, 6, -1, 0, 9];

let N1 = A.length;
let N2 = B.length;

let max = A[0]
let min = B[0]
for (let i = 0; i < N1; i++) {
    if (A[i] > max) {
        max = A[i]
    }
}
for (let i = 0; i < N2; i++) {
    if (B[i] < min) {
        min = B[i]
    }
}

let multi = max * min;
console.log(multi) */


/* let arr = [1, 2, 2, 2, 5, 7, 9];
let n = arr.length;

let x = 2;
let count = 0;
for (let i = 0; i < n; i++) {
    if (arr[i] <= x) {
        count++;
        console.log(count)
    }
}
console.log(count) */


// Array triplet maximum sum 

/* 

let arr = [15, 4, 2, 7, 9, 10];
let n = arr.length;

let min = arr[0]
let sum = 0
for (let i = 0; i < n; i++) {

    if (arr[i] >= 9) {
        sum += arr[i]
    }
}
console.log(sum) 


*/


let arr = [2, 2, 3, 3, 7, 4, 5];
let n = arr.length;

for (let i = 0; i < n; i++) {
    console.log(arr[i])
}