// ADD THIS LINE TO THE HEAD SECTION IN HTML
// <script src="https://www.gstatic.com/firebasejs/4.3.0/firebase.js"></script>

// ADD MOMENT.JS LINK TO HEAD SECTION IN HTML
// <script src="https://cdn.jsdelivr.net/momentjs/2.12.0/moment.min.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDFCgJxZgWtPsTQq4oztmVPGQ8y-2wZDhU",
    authDomain: "project-1-a5306.firebaseapp.com",
    databaseURL: "https://project-1-a5306.firebaseio.com",
    projectId: "project-1-a5306",
    storageBucket: "project-1-a5306.appspot.com",
    messagingSenderId: "528935957936"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


// THIS FUNCTION MAY ALREADY BE CODED IN REPOSITORY FILES
$("#submit-game-btn").on("click", function() {

  event.preventDefault();
  // MAKE SURE THE VARIABLE/ID NAMES MATCH WHAT WE DECIDED FOR HTML
  var gameName = $("#game-name-input").val().trim();
  // var timestamp = moment();

  var recentSearch = {
    name: gameName,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  };

    // console.log(timestamp);

  database.ref().push(recentSearch);
  console.log(recentSearch);

  // MAKE SURE THE VARIABLE/ID NAMES MATCH WHAT WE DECIDED FOR HTML
  $("#game-name-input").val("");
});

database.ref().on("child_added", function (childSnapshot, prevChildKey){
  var gameName = childSnapshot.val().name;
  // var timestamp = childSnapshot.val().timestamp;

  // console.log(gameName);
  // console.log(timestamp);

  $("#test-display").append(gameName);
});


// var gameName = "mass+effect";
// var queryURL = "https://www.igdb.com/api/v1/games/search?token=4545397a3c48054eee81d41ef7a814b9&q=zelda";
//
// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).done(function(response) {
//
//   console.log(response);
// })
