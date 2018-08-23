var op = process.argv[2];
var x = process.argv[3];
var y = process.argv[4];

var operations = {
    "add": function (operand1, operand2) {
        return Number(operand1) + Number(operand2);
    },
    "subtract": function (operand1, operand2) {
        return Number(operand1) - Number(operand2);
    },
    "multiply": function (operand1, operand2) {
        return Number(operand1) * Number(operand2);
    },
    "divide": function (operand1, operand2) {
        return Number(operand1) % Number(operand2);
    }
};

function math(operator, a, b) {

    console.log(operations[operator](a, b));
};

math(op, x, y)

