console.log(this);

function foo() {
    console.log(this);
};

foo()

var poodle = {
    bark: function () {
        console.log(this);

    },
    walk: 2,
    eat: "all day"
}

poodle.bark();