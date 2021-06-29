// Template Literals
const person = {
    name: "Zohra",
    age: 55
};
// ` - backticks
const greeting = `We welcome you ${person.name}, 
your age is ${person.age}?`;
console.log(greeting);


// Write Concise Object Literal Declarations Using Simple Fields
const createPerson = (name, age, gender)=> ({name, age, gender}); // returns object
console.log(createPerson("Zohra", 55, "male"));


// Write Concise Declarative Functions with ES6
const bicycle = {
    gear:2,
    setGear(newGear){
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);


// Use class Syntax to Define a Constructor Function
class SpaceShuttle {
    constructor(targetPlanet)
    {
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);


// Use getters and setters to Control Access to an Object
class Book{
    constructor(author)
    {
        this._author = author; // _ specifies the variable is private
    }

    get writer(){
        return this._author;
    }

    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

let noone = new Book("anon");
console.log(noone.writer); // notice there are no parathesis
noone.writer = "ymous"; // this is how setter works
console.log(noone.writer);


//Differences Between import and require 
// throws error for now
/*
import { capitalizeString } from "./string_function.js"

const cap = capitalizeString("hello!");
console.log(cap);
*/
/*
3:22:33​ export
3:23:40​ * to Import
3:24:50​ export default
3:25:26​ Import a Default Export
*/