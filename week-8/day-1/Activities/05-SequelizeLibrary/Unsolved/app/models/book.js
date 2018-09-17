// Dependencies
// =============================================================

// Require the sequelize library
var Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
var sequelize = require("../config/connection.js");

// Create a "Book" model with the following configuration
var Book = sequelize.define("books", {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    genre: Sequelize.STRING,
    pages: Sequelize.INTEGER
});

// Sync model with DB
Book.sync();
// Export the book model for other files to use
module.exports = Book;