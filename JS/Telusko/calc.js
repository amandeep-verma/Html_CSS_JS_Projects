/*
Modules are encapsulated unit. 
In order to use a function or module outside the present file, it has to exported
*/ 

function add(a,b){
    return a +b;
}

module.exports.add = add
// or you can use  -> module.exports = add but in the importing file , you will have to use calc(a,b);


function sub(a,b){
    return a-b;
}

exports.sub = sub
//instead of module.exports you can use exports


// another way of exporting is -
exports.mul = function mul(a,b)
{
    return a*b;
}