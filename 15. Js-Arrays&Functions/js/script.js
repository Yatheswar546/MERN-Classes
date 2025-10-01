// Js Arrays - collection of heterogeneous elements in continuous memory locations 

// Creating an Array
//                 0            1             2      3    4
let students = ["Bharath", "SaiNavadeep", "Akash", 123, true];
// console.log(students);

const fruits = new Array("Apple", "Banana", "Grapes");
// console.log(fruits);

// Arrays Memory Representation
let x = [1, 2, 3]
let y = x

// console.log(x === y);

let z = [1, 2, 3];

// console.log(x === z);

// In arrays it will check for memory locations but not for actual values.

let movies = ["WAR2", "Coolie", "Kingdom", "Narasimha", "Salaar"];
let films = movies;

// console.log(movies);
// console.log(films);

movies[0] = "Spirit";
// console.log(movies);
// console.log(films);
// Arrays are Mutable

// Accessing Array Elements;

// console.log(films[4]);
// console.log(movies[16]);

for (let i = 0; i < movies.length; i++) {
    // console.log(movies[i]);
}

for (let i in movies) {
    // console.log(i, movies[i]);
}

for (let film of movies) {
    // console.log(film);
}

// Array Methods
movies = ["WAR2", "Coolie", "Kingdom", "Narasimha", "Salaar", "Mirai"];
// console.log(movies)

// console.log(movies.length);

// console.log(movies.at(2));

// movies.pop()
// console.log(movies);

// movies.push('RRR')
// console.log(movies);

// movies.shift();
// console.log(movies);

// movies.unshift('OG');
// console.log(movies);

// delete movies[1];
// console.log(movies);

/////////// Concatination of Arrays ///////////

telugu_movies = ["OG", "Devara", "Kingdom", "Narasimha", "Salaar"];

hindi_movies = ["WAR2", "Pathan", "Tiger", "Dear Zindagi"];

let indian_films = telugu_movies.concat(hindi_movies);
// console.log(indian_films);

let total_films = telugu_movies + ',' + hindi_movies;
// console.log(total_films);
// console.log(typeof (total_films));


/////////// Slicing of Arrays ///////////

movies = ["WAR2", "Coolie", "Kingdom", "Narasimha", "Salaar"];
////////// 0       1           2          3            4

// console.log(movies.slice(1));
// console.log(movies.slice(2));
// console.log(movies.slice(1, 4)); // [1, 4)
// console.log(movies.slice(2, 5)); // [1, 4)

// array_name.splice(position_to_add, no. of elements to be removed, new_element)
// movies.splice(3, 0, 'Mirai');
// console.log(movies);
// movies.splice(2, 2, 'OG');
// console.log(movies);

/////////// Search Methods ///////////

movies = ["Coolie", "Kingdom", "Coolie", "Narasimha", "Coolie", "Salaar", "OG"];
/////////    0        1          2          3           4           5       6

// console.log(movies.indexOf('Coolie'));
// console.log(movies.lastIndexOf('Coolie'));
// console.log(movies.includes('OG'));
// console.log(movies.includes('Mirai'));


/////////// ARRAY to STRING ///////////
movies = ["Coolie", "Kingdom", "Narasimha", "Mirai", "Salaar", "OG"];
// console.log(movies);
// console.log(typeof(movies));

// films = movies.join(' - ');
// console.log(films);
// console.log(typeof(films));


////////////////////  ARRAY to STRING & STRING to ARRAY ///////////////////

// String to Array ( split() )
let statement = "This is our Full Stack Internship";
console.log(statement.split(' '));

// Array to String ( join() )
movies = ["WAR2", "Coolie", "Kingdom", "Coolie", "Narasimha", "Salaar", "OG"];
console.log(movies.join(' - '));


///////////// Js Functions /////////////////
// Functions are a block of code which can be reusable.

/* Syntax

    // function_defintion
    function function_name (parameters){

        .... code ......

        return statement;
    
    }

    // function_call
    function_name(parameters);
*/

/*
    Two types of Functions:
    1. Parameterized 
    2. Non-Parameterized

*/

function hello() {
    // console.log("Hello Everyone");

    return "I am return function";
}

// hello();

// var ans = hello();

// console.log(ans);


function add(num1, num2) {
    // return num1 + num2;
}

let res = add(400, 76)

// console.log(res);

/////////////// Hoisting ////////////////
/*
    It is a mechanism where "variables" and "function declarations"
    are moved to the top of their scope before code execution

    var is used but not let and const

*/

a = 10;
// console.log(a);

var a;

/*
 var a;
 a = 10;
 console.log(a);
*/

func();
function func() {
    // console.log("Hello")
}

/*
    function func() {
        console.log("Hello")
    }

    func();
*/

// b = 11;
// console.log(b);

// let b;
// const b;

// console.log(a)
var a = 10;