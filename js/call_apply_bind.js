let name1 = {
    firstName: "Anil",
    lastName: "Kadam"
}


let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar"
}

var printFullName = function(hometown) {
    console.log(this.firstName, " ", this.lastName, " ", hometown);
}

//call method
printFullName.call(name1, "Sangli");
printFullName.call(name2, "Mumbai");

//apply method
printFullName.apply(name1, ["sangli"]);
printFullName.apply(name2, ["Mumbai"]);

//bind method
let printMyName = printFullName.bind(name1, "sangli");
printMyName();

