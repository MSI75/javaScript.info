'use strict'





// console.log(Number([]))
// console.log(Number({}))
// console.log(Number(""))
// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number(false))
// console.log(Number(true));
// console.log(Number(NaN));
// console.log(Number("4"))
// console.log(Number("string"));

// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(0))
// console.log(Boolean(null))
// console.log(Boolean(false))
// console.log(Boolean(true))
// console.log(Boolean(NaN))
// console.log(Boolean("4"))
// console.log(Boolean("string"))


// console.log(String(0))
// console.log(String({}));
// console.log(String([]) === "");
// console.log(String(undefined))
// console.log(String(null))


// console.log(2 + 2 + +"3" + 5 + 2);
// console.log("2" + 2);
// console.log("6" / 2);
// console.log("4" * 2);
// console.log("3" - 2);
// console.log(typeof (2 + 2));
// console.log(typeof (2 + '2'));

// console.log("" + false)
// console.log([] + false + true)
// console.log(false + true + []);
// console.log([] + 1)
// console.log([] * 6);
// console.log([] / 1);
// console.log([] - 1);

// console.log(1 + []);
// console.log(1 * []);
// console.log(1 / [])
// console.log(1 - [])

// console.log({} + [])
// console.log({} * []);
// console.log({} / [])
// console.log({} - []);
// console.log({} + 2);

// console.log(null == undefined);
// console.log(null === undefined);

// console.log(null == false)
// console.log(undefined == false);
// console.log(NaN == null)
// console.log(NaN == false)
// console.log(NaN == undefined)

// console.log(false == 0)
// console.log(false == '');

// console.log(NaN == 0);
// console.log(NaN == '');
// console.log(null == 0);
// console.log(null == '');
// console.log(undefined == 0)

// console.log(0 || null || 2 || 3)
// console.log(1 && 2 && 0);
// console.log(1 && "hello world" && 5);

// console.log(0 || 2);
// console.log(false ?? 1)

//while loop, do while loop, for loop

// while(condition){
//     code
// }



// let i = 0;
// for (i && console.log("start"); i <= 3; i++ && console.log("end")) {
//     console.log("index => ", i)
// }


//reverse, sum of all elements, max number of an array, min number

// let arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 4) {
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// while (true) {
//     let age = prompt("how old are you?");
//     if (age <= 18) {
//         console.log("Your are not allowed");
//     } else {
//         console.log("Your are welcome");
//         break;
//     }
// }


sayHello(2, 3);

function sayHello(a, b) {
    console.log(a, b);
    // for (let i = 0; i < arguments.length; i++) {
    //     console.log(arguments[i])
    // }
    console.log(this)
}

// sayHello.prototype.constructor(5, 10)



// let sayGreet = () => {
//     console.log("Hello!")
// }
// sayGreet();

// let sayHello = greeting => {
//     console.log(greeting)
// }
// sayHello("Hello world");

// let sayHello = (greeting, name) => {
//     console.log(greeting, name);
//     console.log(this)
// }
// sayHello("hello", "jhon");



var a = 1;

let b = 3;
var c;


function func() {
    console.log(b)
    console.log("my function");
    var str = "amar sonar bangla";

    function a() {
        let str2 = "hello";
        console.log(str)
        console.log(str2);
        console.log(b)
    }

    console.log(str2)

    a();

    console.log(str);
}
func();


// console.log(d)
// let d;
// // arrowFunc();

// let arrowFunc

// arrowFunc = () => {
//     console.log("arrow function");
// }

// c = 10;










