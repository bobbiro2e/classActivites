// process.argv will print out any command line arguments.
// console.log(process.argv);

function add(a, b) {
    return Number(a) + Number(b);
};

console.log(add(process.argv[2], process.argv[3]));
console.log(add(11, 11));
