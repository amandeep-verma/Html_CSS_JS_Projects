
var myGlobal = 10; // the scope of this function is throughout the program

function sub(){
    var myVar = 5 // scope limited to the function
    myVar2 = 12; // if we do not put the var keyword, this variable becomes auto global
    var myGlobal = 5; // local variable takes over the global variable
    console.log(myGlobal)
}
sub();
console.log("myVar2 from function can be accessed here -> "+myVar2)


// you can pass arguments in function
function nextInLine(arr, item){
    arr.push(item); // adds the item to the array
    return arr.shift(); // shift pushes out the first item out of array 
}

var testArr= [1,2,3,4,5];

console.log("Before: "+ JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: "+ JSON.stringify(testArr));


var arr = ["John", 23]; // array can store any type of data
var arr2 = [["John", 1], ["Rohit", 2]]; // 2d array or nested array
console.log(arr2[0][0]); // using array index, we can modify/ access the arrray


a = 2;
b="2";
if (a == b) // equality operator, internally converts if the data types are not same
    console.log(" a ==b");

if ( a===b ) // strict equality operator, checks the data type as well
    console.log("a===b true"); 

if (a != b)
    console.log("yes a =! 2");

if( a!== b) // strict unequality operator, checks the data type as well
    console.log("a!==b true"); 

var a = undefined
console.log(a)

