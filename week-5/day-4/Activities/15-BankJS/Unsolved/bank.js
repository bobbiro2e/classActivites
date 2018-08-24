var fs = require("fs");

var transaction = process.argv[2];
var amount = process.argv[3];

fs.readFile("bank.txt", "utf8", function (error, data) {
    if (error) {
        console.log(error)
    };

    var bankArray = data.split(",");
    var numberArray = [];

    for (var i = 0; i < bankArray.length; i++) {
        var numbers = parseFloat(bankArray[i])
        numberArray.push(numbers)
    };
    if (transaction === "total") {
        function sum(total, num) {
            return total + num;
        };
        var total = Math.round(10 * (numberArray.reduce(sum))) / 10;
        console.log(total);
    } else if (transaction === "deposit") {

        fs.appendFile("bank.txt", ", " + amount, function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("Deposited " + amount + ".");
        });
    } else if (transaction === "withdraw") {
        fs.appendFile("bank.txt", ", " + -Math.abs(amount), function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("Withdrew " + amount + ".");
        });
    } else if (transaction === "lotto") {
        var lottoCost = 5;
        var lottoWin = 1001;
        fs.appendFile("bank.txt", ", " + -Math.abs(lottoCost), function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("Purchased lotto for $" + lottoCost + ".");
            var lottoNumber = Math.floor(Math.random() * 100);
            if (lottoNumber === 99) {
                fs.appendFile("bank.txt", ", " + lottoWin, function (error) {
                    if (error) {
                        console.log(error)
                    }
                    console.log("You won the lotto! $" + lottoWin + " deposited to your account!")
                });

            }
        });
    };
});
