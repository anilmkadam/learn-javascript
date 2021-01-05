console.log("Hello JS!!");
// console.log(b);
// console.log(f1);
//console.log(arrow);
function f1(){
    // console.log(f2);
    function f2(){
        console.log(b);
    }
    return f2;
}

var arrow = () => {
    console.log("Arrow Function...");
}

let b = 10;

arrow();

f1()();