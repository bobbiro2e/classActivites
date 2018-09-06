var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "playlist_db",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

connection.connect(function (err) {
    if (err) throw (err);
    console.log("connected at id " + connection.threadId);
    afterConnection();
})

function afterConnection() {
    connection.query(`select * from fav_songs where artist = "kanye west"`, function (err, res) {
        if (err) throw (err);
        console.log(res);
        connection.end();
    });
};

// function afterConnection() {
//     connection.query("select * from fav_songs", function (err, res) {
//         if (err) throw (err);
//         res.forEach(function (element) {
//             console.log("\nSong: " + element.song + "\nArtist: " + element.artist + "\nAlbum: " + element.album + "\n");
//         });
//         connection.end();
//     });
// };