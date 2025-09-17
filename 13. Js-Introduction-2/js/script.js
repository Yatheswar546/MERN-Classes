// Js Data Types
/*
    A) Primitive Data Types
    1) String     - single word, group of words
    2) Number     - Js has no double, float
    3) BigInt     - for large range of numbers
    4) Boolean    - true/false
    5) Undefined  - variable is declared but not assigned with any value
    6) NULL       - variable is assigned with NULL value

    B) Non-Primitive Data Types
    7) Object
        An Object
        An Array
        A Date
        Functions
*/

var str = "Today is JS - Day 01"
// console.log(str)

// var num = 3.156
// console.log(typeof (num))

var undefined_example;
// console.log(undefined_example);
// console.log(typeof (undefined_example));

var x;
// console.log(x)
// console.log(typeof (x))

var y = null;
// console.log(y)
// console.log(typeof (y))

// Exponential Notation
// num1 = 1234e5    // 123400000
// num2 = 1234e-5   // 0.01234

// console.log(num1)
// console.log(num2)

////////////////////////////////////////////
// Type Conversion - change of one datatype into another
/*
    1. Implicit
    2. Explicit
*/

let x1 = 5
let x2 = "5"

// console.log(x1 == x2)

res1 = 51 + 90
// console.log(res1);

res2 = "Hello " + "Everyone";
// console.log(res2);

res3 = 51 + 90 + "JavaScript";
// console.log(res3);
// console.log(typeof(res3));

/*  
    51 + 90 + "JavaScript"
    141 (number) + "JavaScript" (string)
    "141" (string) + "JavaScript" (string)
    141JavaScript
*/

res4 = 50 + 30 + "JavaScript" + 20 + 100
// console.log(res4) 
/*
    80JavaScript120
    200JavaScript
    JavaScript200

    Working:
    50 + 30 + "JavaScript" + 20 + 100
    80 (number) + "JavaScript" + 20 (number) + 100 (number)
    "80" (string) + "JavaScript" + 20 (number) + 100 (number)
    "80JavaScript" + 20 (number) + 100 (number)
    "80JavaScript" + "20" (string) + 100 (number)
    "80JavaScript20" (string) + "100" (string)
    "80JavaScript20100"
*/

let num = 123;

// console.log(num, typeof (num))

let str1 = String(num);

// console.log(str1, typeof (str1));

let str2 = "456"

// console.log(str2, typeof (str2));

let num2 = Number(str2);

// console.log(num2, typeof (num2));

num2 = num2 + 300;

// console.log(num2, typeof (num2))

////////////////////////////////////////////

// Conditional Statements
/*
    1) if
    2) if-else
    3) if-elseif
    4) switch
*/

let a = 100;

// if (a === 100) {
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }

// if (a > 100) {
//     console.log("a is greater than 100");
// }
// else if (a < 100) {
//     console.log("a is less than 100");
// }
// else {
//     console.log("a is 100");
// }

switch (85) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "No day";
}

// console.log(day)

////////////////////////////////////////////

// Loops
/*
    1) for
    2) for-in
    3) for-of
    4) while
    5) do-while
*/

for (let i = 10; i > 0; i--) {
    // console.log(i);
}

a1 = ["a", "b", "c", "d", "e", "f", "g", "h"];
for (let x in a1) {
    // console.log(x, a1[x]);
}
/*
    0, a1[0]
    1, a1[1]
    2, a1[2]
*/

a1 = ["a", "b", "c", "d", "e"];
for (let x of a1) {
    // console.log(x);
}

// console.log("while");
res = 0;
while (res < 10) {
    // console.log(res);
    res += 1;
}

// console.log("do-while");
ans = 10
do {
    // console.log(ans)
    ans -= 1
} while (ans > 0);