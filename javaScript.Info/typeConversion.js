// typeConversion 

function typeFunc(type) {
    switch (typeof type) {
        case 'boolean':
            return 'boolean'
        case 'number':
            return 'number'
        case 'undefined':
            return 'undefined'
        case 'string':
            return 'string'
        case 'null':
            return 'null'
        case 'object':
            return 'object'
        case 'function':
            type(4)
            return 'function called'
        default:
            return 'Not types'
    }
}

function multi(a) {
    console.log(a * a)
}
let object = {
    a: '75'
}
let a;
console.log(typeFunc(a))