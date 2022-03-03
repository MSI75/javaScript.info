/* 
alert("hello world")
function getType(type) {
    switch (typeof type) {
        case 'boolean':
            return "boolean";
        case 'number':
            return 'number';
        case 'string':
            return "string";
        case 'object':
            return 'Object';
        case 'undefined':
            return "undefined";
        case 'function':
            type(4);
            return "function called";

        default:
            return "invailed type";
    }
}

function multi(a) {
    console.log(a * a);
}
console.log(getType(multi)) */


// function typeOfFunc(dataType) {
//     if ('number' === typeof (dataType)) {
//         return 'This datatype is number type'
//     }
//     else if ('undefined' === typeof (dataType)) {
//         return 'This dataType is undefined type'
//     }
//     else if ('string' === typeof (dataType)) {
//         return 'This dataType is string type'
//     }
//     else if ('null' === typeof (dataType)) {
//         return 'This dataType is null type'
//     }
//     else if ('boolean' === typeof (dataType)) {
//         return 'This dataType is boolean type'
//     }
//     else if ('object' === typeof (dataType)) {
//         return 'This dataType is object type'
//     }
//     else {
//         return 'Not dataType'
//     }
// }

// console.log(typeOfFunc(true))


/* let x = 5
console.log(typeof (x)) */


/* function promptFunc() {
    let age = prompt(' Input Yore age , Your are', 20)
    if (age < 10) {
        alert('not allowed')
    }
    else if (age < 18) {
        alert('restricted ')
    }
    else {
        alert(' allowed')
    }
}
promptFunc() */

let age = confirm('Are your gether then 20')
alert(age)