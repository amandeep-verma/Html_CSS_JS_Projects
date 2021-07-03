// anonymous function
var a = function() {
    return new Date();
}
console.log(a);

// anonymous function can be written as
var a = () => {
    return 5;
}
console.log(a()); // to call the function

// if its one line funtion, anonymous function can be written without return 
var a = () => 5; 

// similarly you can write anonymous function with Parameters
let mix = (c,d) =>  c.concat(d)
console.log(mix([1,2],[4,5,6]));


// higher order arrow function ( one function take another as argument)
// as you can see in filter function, if there is one parametre to be passes you can write it without the paranthesis
let squareList = (arr)=> {
    let squaredIntegers = arr.filter(num => Number.isInteger(num) && num >0 ).map(num => num*num);
    return squaredIntegers;
};

console.log(squareList([1, 3.6, 2, 1.5, 7]));


// you can have a default value for variable if it is not specified
const increment = (function(){
    return function increment(number, value = 1) {
        return number + value;
    }
})();

console.log(increment(5,2)); // produces 7
console.log(increment(5)); // produces 6

//another easy example 
function check(name = "Amandeep") // If you wont pass anything, it will set default parametre
{
    return name;
}

console.log(check());
console.log(check("Verma"));



// Rest parametres inside anonymous class using arrow function
const sum = (() =>
{
    return (...args) => {  // ...args is Rest operator
        return args.reduce((a,b) => a+b, 0);
    };
})();
console.log("The sum is -->"+sum(1,2,3,4))


// Spread opertor
const arr1 = ['Jan', 'Feb', 'March', "April"];
const arr2 = [...arr1]; // spread all element of an array 
arr2[0] = 'potato';
console.log(arr1);
console.log(arr2);


// Destructing - 
var vowel = {x:12, y:34, z:45};
// here we storing the value of x,y,z from vowel object into d,e,f variables
const {x:d, y:e, z:f} =vowel;
console.log(d);


// Nested Destructing 
const LOCAL_FORECAST ={
    today : {min : 72, max :83},
    tomorrow : {min :76 , max : 89}
};

const {tomorrow : {max: maxTempTom}} = LOCAL_FORECAST;
console.log("max temp tomorrow "+maxTempTom);


// this is how we can destructure from an array
const[z,x, ,y]= [12,3,4,5,6]; // Notice there is a blank in between 
console.log(z,x,y);


let g = 8, h= 6;
console.log(g );
// IIFE 0 Immediate invoke function expression - function which runs as soon as it is defined
(() => {
    "use strict"
    [g, h] = [h, g];
    console.log("I am called without being called");
})();
console.log(g );


// Named IIFE(Immediately Invoked Function Expressoion) - becuase it has a name
(multi =function multi(number, val =1){  // val means if default value of val is not specified then it will be one.
    return number * val;
})();


console.log("multi is called "+ multi(5,2));
console.log(multi(5));


// This is isn't Named IIFE, It can't be called
(function abc(){
    console.log("i am i ");
})();


//Destructuring Assignment with Rest Operator to Reassign Array
const source = [1,2,3,4,5,6,7,8];
function removeFirstTwo(list)
{
    const [a, b, ...arr] = list; // you can also leave blank in space of a and b
    return arr;
}
console.log(removeFirstTwo(source));
console.log(source);


