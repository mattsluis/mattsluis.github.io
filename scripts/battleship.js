// global variables. defines board size
var rows = 10;
var cols = 10;
var counter = 0; //sets counter to 0. for each click, i++
var hitCounter = 0; // counts amount of hits. when hitCounter hits X game over.

var gameBoard = [
// 0  1  2  3  4  5  6  7  8  9//
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0], // hits at 3,4,5,6
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // none
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // none
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0], // hit at 6
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0], // hit at 6
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1], // hit at 6,7,8,9
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // hit at 0
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0], // hit at 0,3
  [1, 0, 0, 1, 0, 0 ,0, 0, 0, 0], // hit at 0,3
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]  // hit at 0
]
  

var grid = createClickGrid(rows, cols, function(el, row, col) {
  console.log("element:", el);
  console.log("row:", row);
  console.log("col:", col);
  console.log(gameBoard[row][col]);


  if(el.className === 'miss' || el.className === 'hit') { //if className is miss or hit, alert select diff sq
    $.playSound('fx/laugh');
    swal({
      title: "select another square",
      text: ("what do you even got going on over there"),
      imageUrl: 'img/thumbsDown.png'
    });;
   return;
  } 
  if(gameBoard[row][col] === 0) { //if it is true, that the selected coordinate is equal to 0, alert("miss")
  el.className = 'miss'
  counter++;
  $('#message').html('MISS!')
  message.style.color = "blue"
  $('#message1').html(counter)
  } else {
    el.className = 'hit' // else alert("hit")
    counter++;
    hitCounter++;
    checkWin();
    if (hitCounter<16) {
    $('#message').html('HIT!');
    message.style.color = "red"
    $('#message1').html(counter)
    }
  } 
});

$('#message1').html(counter); //shows # of moves


$("#gameboard").append(grid); //adds table to div id gameboard

function createClickGrid(rows, cols, callback){

  var grid = document.createElement('table');  //creates table and sets var equal to.
  grid.style.background = "url('img/escape.jpeg') no-repeat";  //adds BG
  
  for (var r = 0; r < rows; r++){ // adds the "tr" or row element to table
    var tr = grid.appendChild(document.createElement('tr')); //sets tr element as var
      
      for (var c = 0; c < cols; c++){ //adds columns to rows.. this actually adds the cells.
        var cell = tr.appendChild(document.createElement('td')); //assigns a var to element td
        cell.addEventListener('click',(function(el, r, c) { // makes each cell clickable
        cell.style.border = "5px solid #000"; //adds bordeer
        cell.className = 'open'; //adds class to each cell. I am calling it open which also identifes it as a cell that has not been guess yet
          
          return function(){
            callback(el, r, c);
          }
        })(cell,r,c),false);
      }
    }
  return grid;
}


//functions checks for winner by checking the number of hits. When hitCounter = 16, the game is won.
function checkWin() {
  if (hitCounter===16) {
  $.playSound('fx/tooTired');
  swal({
    title: "cool.",
    text: ("it took you " + counter + " moves to save the president"),
    imageUrl: 'img/thumbsDown.png'
    });
  }
}
