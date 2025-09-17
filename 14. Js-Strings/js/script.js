/////////////////////////////////////
//  Strings & String Methods

//              -5-4-3-2-1
let str1 = "Hello Everyone";
//0123456789.................. 
console.log(str1.length);

console.log(str1.charAt(4));

// Concatination
let str2 = "JavaScript" + " " + "Strings";
console.log(str2);

let str3 = "JavaScript".concat(" ", "Strings ", "Concat Method");
console.log(str3);

// Slicing the Strings
/*
    slice(start, end)     
    substring(start, end)
    substr(start, length)
*/

let str4 = "Akshay is a Software Engineer";

console.log(str4.slice(0, 6))
console.log(str4.slice(0))
console.log(str4.substring(12, 20))

console.log(str4.substr(12, 17))

console.log(str4.slice(-8, -1));
console.log(str4.slice(-8));


// Converting the Characters

let str5 = "harsha";
console.log(str5.toUpperCase());

let str6 = "UZWAL";
console.log(str6.toLowerCase());

// Trimming
let str7 = "    Coolie is releasing on August 14th     "
console.log(str7);

console.log(str7.trim());
console.log(str7.trimStart());
console.log(str7.trimEnd());


// Replacing
let str8 = "15th is a Holiday";

console.log(str8);

let new_str8 = str8.replace("15th", "14th");

console.log(new_str8);

let str9 = "Dogs are very cute animals. I love Dogs very much";

console.log(str9);

let new_str9 = str9.replaceAll("Dogs", "Cats");

console.log(new_str9)

// Searching in a String 
let str10 = "My Portfolio is ready";

console.log(str10.includes("Portfolio"));

console.log(str10.indexOf("Portfolio"));

console.log(str10.search("Portfolio"));

console.log(str10.match("ready"));


// Converting String to Array
let str11 = "JavaScript is a popular language. It is widely used"

console.log(str11, typeof (str11));
// ["JavaScript", "is", "a", "popular", "language"]

arr1 = str11.split("is")
console.log(arr1);

console.log(typeof (arr1));
