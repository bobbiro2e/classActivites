var database = firebase.database();
console.log(database)
////////////////////////////////////////////////////////////////////////
database.ref("songs/").set({
    "favsong": "beyond"
})
database.ref("songs/favsong").on("value", function (snapshot) {
    var data = snapshot.val();
    console.log(data)
});
////////////////////////////////////////////////////////////////////////
database.ref().on("value", function (snapshot) {

    console.log(snapshot.val());

    var data = snapshot.val().bio;
    console.log(data)
    var nameDisplay = $("#name-display")
    var ageDisplay = $("#age-display")
    nameDisplay.text("Name: " + data.name)
    ageDisplay.text("Age: " + data.age)

});
$("#save").on("click", function () {
    var name = $("#name").val().trim();
    var age = $("#age").val().trim();
    database.ref("bio/").set({
        name,
        age
    });
})
/////////////////////////////////////////////////////////////////
database.ref("music/").set({
    "kanye": "blood on the leaves"
})


$("#add").on("click", function () {
    var artist = $("#artist-add").val().trim();
    var song = $("#song-add").val().trim();
    database.ref("music/").push({
        artist,
        song
    });
})

database.ref("music/").on("value", function (snapshot) {
    console.log(snapshot.val());
    var data = snapshot.val();

    for (key in data) {
        console.log(`This is the key => ${key} 🔑`);
        console.log(data[key].artist);
        console.log(data[key].song);
    }
});

database.ref("music/").on("child_added", function (snapshot) {
    var data = snapshot.val();
    console.log(data);
    var div = $("<div>");
    div.append(`<h2>Artist: ${data.artist}</h2>`);
    div.append(`<h2>Song: ${data.song}</h2>`);
    $("#music").append(div);
});


