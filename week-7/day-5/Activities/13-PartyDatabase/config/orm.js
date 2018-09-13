var connection = require("./connection.js");

var orm = {
  selectColumn: function (colToSearch, tableInput) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [colToSearch, tableInput], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectWhere: function (tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectBoth: function (...) {
    var queryString = "SELECT ...";
    connection.query(queryString, [...], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
