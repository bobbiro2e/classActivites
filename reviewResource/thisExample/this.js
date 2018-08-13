function foo() {
    console.log(this);
}


var poodle = {
    bark: function () {
        console.log("bow wow wow yippy yo yippy yay");
    },
    walk: function () {
        console.log("I'm walking here!");
    },
    all: function () {
        this.walk();
        this.bark();
    },
    bounce: foo
}

poodle.bounce();