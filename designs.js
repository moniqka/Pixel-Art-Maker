// Execute a function when the document is fully loaded
$(document).ready(function() {

// Select color input
let selectColor = $("#colorPicker");

// Select size input
let takeHeight = $("#input_height");
let takeWidth = $("#input_width");
const submitSize = $("#submit_button");

// Select table element to create Grid
const canvas = $("#pixel_canvas");

// When size is submitted by the user, call makeGrid()
submitSize.click(function(event) {
  event.preventDefault();
  makeGrid();
});

// Your code goes here!
// Start: Function - make grid
function makeGrid() {
  let row = takeHeight.val();
  let column = takeWidth.val();

// Delete a previously created Grid
  canvas.children().remove();

// Max size
  if (row > 50){
  row = 50;
  }
  if(column > 50) {
  column = 50;
  }

// Loop
  for(let n = 0; n < row; n++){
    canvas.append("<tr></tr>");
  };
  for(let m = 0; m < column; m++){
    canvas.children().append("<td></td>");
  };
} // End: Function - make grid

// Add color to single cell
canvas.on("click", "td", function() {
  	let color = selectColor.val();
  	$(this).css("background-color", color);
});

 // Color cells when mouse move
$('body').on("mousedown", function(){
  mouseDown = true;
});

canvas.on("mousedown", function (evt) {
  evt.preventDefault();
});

 canvas.on("mousemove", "td", function(){
    let color = selectColor.val();
// If mouse down - color
   if (mouseDown){
  	$(this).css("background-color", color);
   }
});
// End color if mouse up
$('body').on("mouseup", function(){
  mouseDown = false;
});

// Clear single cell od double click
canvas.on("dblclick", "td", function() {
  	$(this).css("background-color", "");
});

// Clear canvas
$("#clear").click(function() {
		$("td").css("background-color", "");
	});

  // Reset canvas
$("#reset").click(function() {
    canvas.empty();
  });
});
