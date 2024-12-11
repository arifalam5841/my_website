//now we are makign a funtion this func do something  it can be a module
function average(arr) {  // you can insert a array in the parameter
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}


function multiply(a, b, c) { // this is the another function it can also make a another module
    return a + b + c;
}

exports.add = function (x, y) { // you can also make direct module like this using syntax = "export.module-name = function(para){}"
    return x + y;
};
// making the func a module
// we use "module.exports" to make a func module
module.exports = {  // we make a object in the "module.exports"
    avg: average, // like this "avg" is the name of the module and "average" is the name of the func 
    multiply: multiply, // this also we are making a module and you can make multiple module like this 
    name: "arif" // you can do this also
    
};


