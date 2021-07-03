
function magic(num,val =1)
{
    return num+val;
}


let increment = function(){
    return function increment(number, value = 1) {
        return number + value;
    }
}();

console.log(increment(5,2)); // produces 7
console.log(increment(5)); // produces 6


// console.log(magic(3))
