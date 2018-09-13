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
  selectJoin: function (tableColName1, tableColName2, leftTableName, rightTableName, conditionTableColName1, conditionTableColName2) {
    var queryString = "SELECT ??, ?? FROM ?? INNER JOIN ?? ON ?? = ??";
    connection.query(queryString, [tableColName1, tableColName2, leftTableName, rightTableName, conditionTableColName1, conditionTableColName2], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
