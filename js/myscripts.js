var result;
var numberInput;
///////back end/////////
var isValid = function(numberInput){
  if (isNaN(numberInput)){
    result = "your entry was not a number. please enter a number";
  }
  else(
    numberInput = parseInt(numberInput)
  )
}




////////front end/////////
$(function(){
  $("#getNumber").submit(function(event){
    event.preventDefault();
    numberInput = $("#numberInput").val();
    isValid(numberInput);
    $("#pingPongResults").text(result);
  });
});
