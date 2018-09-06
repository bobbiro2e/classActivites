// var model = "Tesla";

// function Car() {
//     this.model = "Karlov";
// };

// var bmw = new Car();

// console.log(model);
// console.log(bmw);

//NEXT EXAMPLE

function greeting(name, callback) {
    return callback(name);
};

var output = greeting("bobbi", function (name) {
    return "hey " + name
});

console.log(output);