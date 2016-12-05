//if this file is linked properly, then the console will print out "app.js ready to higgy jiggy"
console.log("app.js ready to higgy jiggy");

// Database
var databaseURL = "https://torrid-fire-4359.firebaseio.com/";

// database connection
var database = new Firebase(databaseURL);

var peopleList = []; //this is an empty array

// data list
database.on("child_added", function(firebaseObject) {

  var person = firebaseObject.val();

  //let's see if the person has the right data
  console.log(person);

  // add person to the list of people
  peopleList.push(person);

});

//end of data list & function

$('#details').hide();

$('#fix').click(function() { 
  // get user input
  var selectedOption = $('select').val(); // this is jQuery val()
  // filter people by user selection
  var resultsList = filterAndSortList(peopleList, selectedOption);
  console.log(resultsList);
  // and show the results
  showList(resultsList);
})


$('#back').click( backToHome );
$('#details').on('swiperight', backToHome );

function backToHome()
{
  $('#home').show();
  $('#details').hide();
}