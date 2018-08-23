var x = process.argv[2];
var y = process.argv[3];

console.log(x, y)

console.log(add(x, y));

console.log(subtract(x, y));

equal(x, y);

function equal(a, b) {
    if (a === b) {
        console.log(true)
    } else {
        console.log(false)
    };
};

function add(a, b) {
    return Number(a) + Number(b)
};

function subtract(a, b) {
    return Number(a) - Number(b)
};
