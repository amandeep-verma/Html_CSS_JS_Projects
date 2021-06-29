// JavaScript  Objects
var ourDog = {
    "name": "Camper",
    "how many legs": 4,
    "tails":1,
    "friends":["everything"]
};

// 2 ways to access the properties
var dogname = ourDog.name;
var doglegs = ourDog["how many legs"];

ourDog.name = "Happy Camper"; // We can change the property with dot operator

ourDog["barks"] = "wowo"; // adding a property to the object

delete  ourDog.barks; // deleting the property 
// delete ourDog[barks]; // this also works

console.log(ourDog.hasOwnProperty("eyesigh"));

// array of objects
var ourDog = [
    {
        "name": "Camper",
        "how many legs": 4,
        "tails":1,
        "friends":["everything"]
    },
    {
        "name": "taimu",
        "how many legs": 3,
        "tails":2,
        "friends":["sam","pam"]
    }
];


//nested objects
var myStorage = {
    "car":{
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    },
    "truck":{
        "inside": {
            "glove box": "drugs",
        },
        "outside": {
            "trunk": "missiles"
        }
    }
};

// accessing the sub properties of the object
console.log(myStorage.car.inside["glove box"]);


console.log(Math.floor(Math.random() * 10)); // prints a random number between 0 and 9


var a = 5;
var num = num > 0 ? "positive" : num < 0 ? "negative" : "zero"; // multiple terniary operator


var a = 2;
var a = 3; // using var you can again define the already defined variable
let d = 2; // but if you do so using let, it will throw an error
// for most part of your code you should use let or const instead of var

function catTalk(){
    "use strict";

    catName = "Oliver";
    quote = catName + "say meow";
}


const e = 3; // you can't change the value of variable associated to const
const newArr = [1,2,3]; // though you can't reassign the newArr variable to some other variable but you can update the array
// const can't prevent mutation of arrays and objects
newArr[2]=4;
newArr.push(9);
console.log(newArr);


// object.freeze prevent data mutation which const cannot 
Object.freeze(newArr);
