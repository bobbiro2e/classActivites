var request = require("request");
var moment = require('moment');

var TV = function () {
  this.findShow = function (show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    request(URL, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var info = JSON.parse(body);
        var name = info.name;
        var rating = info.rating.average;
        var genre = info.genres.join(" ");
        var network = info.network.name;
        var summary = info.summary;
        console.log("\nShow Name: " + name + "\n" + "\nShow Rating: " + rating + "\n" + "\nShow Genre: " + genre + "\n" + "\nShow Network: " + network + "\n" + "\nShow Summary: " + summary + "\n");
      } else {
        console.log(error);
      }
    })
  }
  this.findActor = function (actor) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;

    request(URL, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        info = JSON.parse(body)[0];
        var name = info.person.name;
        var birthday = info.person.birthday;
        var gender = info.person.gender;
        var country = info.person.country;
        country = JSON.stringify(country.name)
        birthday = moment(birthday).format("dddd, MMMM Do YYYY")
        console.log("\nActor Name: " + name + "\n" + "\nActor Birthday: " + birthday + "\n" + "\nActor Gender: " + gender + "\n" + "\nActor Country: " + country + "\n");
      } else {
        console.log(error);
      }
    })
  };
};

module.exports = TV;

