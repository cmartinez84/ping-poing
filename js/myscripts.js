var results;
var resultsArray= [];
var numberInput;
///////back end/////////
var isValid = function(input){
  if (isNaN(input)){
    result = "your entry was not a number. please enter a number";
  }
  else(
    numberInput = parseInt(input)
  )
}
var pingPong = function(input){
  for(var i = 0; i <input; i++){
    resultsArray.push(i);
  };
};





////////front end/////////
$(function(){
  $("#getNumber").submit(function(event){
    event.preventDefault();
    numberInput = $("#numberInput").val();
    isValid(numberInput);
    pingPong(numberInput);
    result = resultsArray.join("");
    $("#pingPongResults").text(results);
  });
});
