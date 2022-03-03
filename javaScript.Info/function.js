/* function sayHi() {
    console.log('Hello baby !')
}

let tal = sayHi


tal()
sayHi() */

/* let sayHi = function () {
    console.log('Hello baby !')
}

// sayHi()

let func = sayHi

func()
sayHi() */

/* function sayHi() {
    console.log('hello World !')
}

let sayHi = function () {
    console.log('Hello baby !')
};


let sayHi = 5
console.log(sayHi)
 */

// call back function

/*

function ask(question, yes, no) {
    if (question) {
        yes()
    }
    else {
        no()
    }
}


function showAsk() {
    console.log('You agreed !')
}

function showCancel() {
    console.log('you cancel execution')
}

*/

// ask("Do you agree ?", showAsk, showCancel);
// ask('Do you agree ?', function () { console.log("You agreed") }, function () { console.log('You canceled the execution.') })


// function declaration



/*

function ask(a, b) {
    return a + b
}
console.log(ask(25, 75))



// function expression

let expr = function (a, b) {
    return a + b
}
console.log(expr(25, 75))

*/

// Declaration
/*

sayHi("MSI")
function sayHi(name) {
    console.log(`My name is ${name}`)
}

*/

// Expression

/*

expression("MSI")
let expression = function (name) {
    console.log(`My name is ${name}`)
}

*/

/* let sayAge = prompt("what is your age?", 18);

if (sayAge > 18) {
    function welcome() {
        alert("Welcome our site !");
    }
}

else {
    function welcome() {
        alert("full fill your age then go to our website")
    }
}

welcome(); */

// callback

/* function getName(name) {
    console.log('My Name is ' + name);
}

function processingName(callback) {
    let name = "MSI";
    callback(name)
}

processingName(getName) */

/* function myName(name, callName) {
    console.log("Hello World !")

    callName(name)
}

function subName(name) {
    console.log('Hi ' + name)
}

myName('MSI', subName) */

// Arrow function
/*
let func = (a, b) => {
    return a + b
}

console.log(func(7, 5)) */


/* let func = () => console.log("Hello World !")
func() */
/* console.log("Hello World !")
[1, 2].forEach(console.log) */

/* let useName = prompt("Your name ?", "Ali");
let isTeaWent = confirm("Do you want some time ?");

alert(useName);
alert(isTeaWent); */


// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }

// let x=prompt("x?",''), n=prompt("n?",'')
// if (n<=0)
// {
//   alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// }
// else
// {
//   alert(pow(x,n))
// }

// Taken from a well - known javascript library
// let i = 5; i < 10 ? console.log("I am selected !") : console.log("I am not selected !")

// Object
/* let user = {
    // Property value of the object
    name: "MSI",
    age: 23,
    home: "Bhola"
} */

// get property value of the object
/* console.log(user.name)
console.log(user.age) */

// remove
// console.log(delete user.age)

// user["I am come"] = 'Your Room, you are ready! today, I can not miss, I best try for you ! even you are give support '
// console.log(user["I am come"])
// console.log(user)

// user[key] = "I love my father"

// console.log(user[key])
// console.log(user)

// access by variable
// let key = "I love my father";
// user[key] = true
// console.log(user)

// computed properties


/*
let bag = {
    fruit: 75,

};
console.log(bag.fruit) */


// Property value shorted

/* function makeUse(name, age) {
    return {
        name: name,
        age: age
    }
}
let user = makeUse("SI", 23)
console.log(user.name) */


/* let obj = {
    for: 2,
    let: 7,
    return: 5
}
console.log(obj.for + obj.let + obj.return) */

/* let obj = {
    1: "Test"
};
console.log(obj[0])
console.log(obj['0'])
console.log(obj[1]) */

/* let obj = {}
obj.proto = 5
console.log(obj.proto) */

/* let user = {}
console.log(user.n == undefined) */

/* let obj = {
    age: 23,
    name: "MSI",

}

console.log('MSI' in obj)  // false
console.log("age" in obj) // true  */


/* let obj = {
    age: 23,
}
let key = "age"
console.log(key in obj) */


/* let obj = {
    test: undefined,
};
// let key = "test"
console.log(obj.test)
console.log("test" in obj) */

/* let user = {
    name: "MSI",
    age: 23,
    isAdmin: true
}

for (let msi in user) {
    console.log(msi)
    // values for the keys
    console.log(user[msi])
} */

/* let codes = {
    "75": "MSI",
    "7": "Choice",
    "5": "Choc"
}

for (let code in codes) {
    console.log(code)
    console.log(codes[code])
} */


/* function sum(a, b) {
    return a + b;
};
console.log(sum(7, 5, 3, 7, 5, 9)) */

/* function sumAll(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
        return sum;
    }
}
console.log(sumAll(7, 5))
console.log(sumAll(7, 5)) */


/* let x = 10;
let y = x + x++ + ++x
console.log(y)
 */


// cloning 
/* let user = {
    name: 'MSI',
    year: 2023
}

let clone = {}

for (let key in user) {
    clone[key] = user[key]
}

user.name = 'jack'

console.log(clone) */

// Garbage Collection 
/* function user(man, woman) {
    woman.husband = man;
    man.wife = woman;
    return {
        father: man,
        Mather: woman
    }
}

let family = user({
    name: "John"
},
    {
        name: "Rook"
    }
)

delete family.father
delete family.Mather.husband
console.log(family) */


/* let user = {
    name: 'John',
    age: 245,
    sayHi: function () {
        console.log("Hello World !")
    }
}
console.log(user.sayHi()) */

/* function sayHi() {
    console.log(this.name);
}
sayHi() */

let user = { name: 'MSI' }
let rate = { name: 'SI' }

function sayHi() {
    console.log(this.name)
}
sayHi()