let name = {
    firstName: "Anil",
    lastName: "Kadam"
};

let printName = function(homeTown, state) {
    console.log(this.firstName, " ", this.lastName, ", ", homeTown, "- ", state);
}

let printMyName = printName.bind(name, "shirdhon");
printMyName("Maharashtra");

Function.prototype.myBind = function(...args) {
    let obj = this;
    params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printMyName2 = printName.myBind(name, "shirdhon");
printMyName2("Maharashtra");
