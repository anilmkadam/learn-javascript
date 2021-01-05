// Hoisting in Javascript
console.log("Hoisting");
printLog();
console.log(x);


var x = 7;
function printLog() {
    console.log("this is Hoisting in JS!!!");
}
