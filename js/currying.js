// Currying Using Bind Method
var multiply = function(a,b){
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(3));

// Currying Using Closure

var sum = function(a,b) {
    return a+b;
}

var curry = function(f){
    return function(a){
        if(a === undefined)
            a = 0;
        return function(b){
            if(b === undefined)
                b = 0;
            return f(a,b);
        }
    }
}

var curriedSum = curry(sum);

console.log(curriedSum(10)(20));
//console.log(curriedSum(10, 20));

// Currying Using Closure Part 2

var subtract = function(x){
    return function(y) {
        return y - x;
    }
}

var subtractByTen = subtract(10);
console.log(subtractByTen(100));