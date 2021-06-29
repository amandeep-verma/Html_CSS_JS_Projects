// FREECODECAMP

console.log("Welcome to java Script")
/*Data Types:
undefined, null, boolean, string, symbol, number, and object
*/

// to declare the variable

// 3way to declare the variable in JS
var myName = "Amandeep";
myName = 8; // scope through out the program
let ourName = "freeCodeCamp";  // scope limited to the block it exists in
const pi = 3.14 // a variable which can't be changed

var a;
var b = 2; // assigning 2 to b

b++;

var myNumber = 0.0324;

var num = 14/3;
console.log(num);

var st = "Hell of a \"thing"   // \ escapes the " character
console.log(st);

var st = 'Hell of a \"thing'   // other way of doing it

console.log("length of string is "+st.length)

console.log("first character of string "+st[0]);

var ourArray = ["John", 22]; // array
var ourArray1 = [["John", 22],["Aman", 21],["Deep", 26]]; // 2D array
console.log(ourArray1);
ourArray1[1] = ["Amandeep",11];
console.log(ourArray1);
ourArray1.push(["Kaboom",1]); // pushes the element in the array
console.log(ourArray1);
var removed = ourArray1.pop();  // pops the last element in the array
console.log(ourArray1);
var removed = ourArray1.shift(); // removes the first element of the array
console.log(ourArray1);
ourArray1.unshift(["Sheldon",12]); // adds the element to the front of the array
console.log(ourArray1);

