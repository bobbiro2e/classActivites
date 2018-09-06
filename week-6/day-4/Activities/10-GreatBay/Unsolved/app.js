var inquirer = require("inquirer");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "greatbay_db",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
});

function afterConnection() {
    connection.query("SELECT * FROM inventory", function (err, res) {
        if (err) throw err;
        console.log(res);
    });
}
function start() {
    inquirer.prompt([
        {
            type: "list",
            choices: ["POST", "BID"],
            message: "Would you like to POST an item, or BID?",
            name: "action"
        }
    ])
        .then(function (answer) {
            if (answer.action === "BID") {
                inquirer.prompt([
                    {
                        type: "list",
                        message: "What item would you like to BID on?",
                        choices: ["item1", "item2"],
                        name: "unsold-inventory"
                    },
                    {
                        type: "input",
                        message: "How much would you like to BID?",
                        name: "bid"
                    }
                ]).then(function (answer) {
                    if (answer.bid >= 50) {
                        console.log("you win!")
                    } else {
                        console.log("bid higher")
                    };
                })
            } else if (answer.action === "POST") {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What are you posting?",
                        name: "post-item"
                    },
                    {
                        type: "input",
                        message: "How much?",
                        name: "price"
                    }, {
                        type: "list",
                        message: "which category is your item?",
                        choices: ["1", "2", "3"],
                        name: "category"
                    }
                ]).then(function (answer) {
                    function createInventory(item) {
                        connection.query(
                            "insert into inventory set ?",
                            {
                                item: answer.post - item,
                                price: answer.price,
                                category: answer.category
                            },
                            function (err, res) {
                                if (err) throw err;
                                console.log(res);
                            }
                        );
                    };
                    createInventory(answer);
                })
            }
        })
};