$(document).ready(function(){
  var blueClick = 0;
  var yellowClick = 0;
  var redClick= 0;
  var greenClick = 0;

  $('.color-button').on('click', function() {
    var newDiv = $('<div></div>');
    var color = $(this).data('color');
    newDiv.addClass('color-cube');
    newDiv.addClass(color);
    $(".container").append(newDiv);

    if(color == "blue") {
    blueClick++;
    $('#blue').text("Total blue: " + blueClick);
  }
  if(color == "green") {
    greenClick++;
    $('#green').text("Total green: " + greenClick);
  }
  if(color == "red") {
    redClick++;
    $('#red').text("Total red: " + redClick);
  }
  if(color == "yellow") {
    yellowClick++;
    $('#yellow').text("Total yellow: " + yellowClick);
    console.log(yellow);
  }
  });
});

// $(document).ready(function(){
//   $(".color-button").on('click', function(){ //Just selected this
//     var color = ($(this).data('color'));   //Whatever thing with this selector was used last (clicked here) "knows" color clicked on
//     var newDiv = $("<div></div>");
//     newDiv.append(color);                  //Added color
//     newDiv.addClass('color-cube');
//     newDiv.addClass(color)                  //Added class (is a function of jQuery)
//      $('.container').append(newDiv);       //Append = add to end of code. Add color cube class and add it with the (this data color)
//   });
// });
