// assign a variable that contains an array of all boxes on grid
var board = [];
for (var i = 0; i < 49; i++){
  board[i] = $('#box'+i);
}
//assign event listener that fires shipGen function on "submit"

$('#startG').on("click", function() {
  shipGen();
  console.log("succes")
});

// Randomly generate CPU ship coordinates... start off with a ship length of 1 and 3 ships
var shipLen = 1;  // length of ships
var shipsNo = 3; //number of ships
//RanNumGen function for inclusive interval.
function getRandomIntInclusive(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
};
// create an array with coordinates
var hLoc = [];
var shipGen = function(){
  for (var i = 0; i < shipsNo.length; i++) {
    hLoc[] = getRandomIntInclusive(0, 48);
  } 
};



var RanNumGen = Math.floor(Math.random() * (49));

function shipGen() {
  for (var i = 0; i < shipsNo.length; i++) {
   return shipGen
  }
};



//I will then add a function that builds off of the orginal shipGen function and adds length!
//when adding length to a ship, think about :
//    1. select whether ship extends on x-axis or y-axis
      //  a. for x-axis, 
      //       i. left
      //       ii. right
      //  b. for y-axis
      //       i. up
      //       ii. down
//    2. collisions - ships cannot overlap.




//assign an event listener that listens for "clicks" on '.open' boxes

$('.open').on("click", function() {
  checkOpen();  
  checkHit();
  checkSunk();
  checkWin();
});


// has the box been guessed already?
var checkOpen = function(){
  if ($('td').hasClass("open")) {
    console.log("success")
  } else {
    view.displayMessage("Please select a coordinate you have NOT tried. idiot.");
  }
}
  
var checkHit = function() {

}

var checkSunk = function() {

}

var checkWin = function() {

}