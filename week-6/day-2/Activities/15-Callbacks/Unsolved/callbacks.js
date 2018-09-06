var fs = require("fs");

//example 1
function fn(str, cb) {
    console.log(str);
    cb();
};

//example 2
function fn2(boo, cb) {
    if (boo) {
        cb();
    } else {
        console.log("boo hoo!")
    };
};

//example 3
function fn3(v, f) {
    return function () {
        return f(v);
    }
};

//example 4
fs.writeFile("text.txt", "successful!", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("message logged.")
    }
});

//yes fs uses a callback.
//fs write file takes at least 3 arguments (text file, message, and callback function) 
//the callback function is use to catch any errors. 