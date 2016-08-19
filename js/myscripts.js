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
  for(var i = 1; i <= input; i++){
    if((i % 3 ===0) && (i % 5 ===0)){
      resultsArray.push("ping-pong");
    }
    else if(i % 5 === 0){
      resultsArray.push("pong");
    }
    else if (i % 3 ===0){
      resultsArray.push("ping");
    }
    else{
    resultsArray.push(i)
    }
  };
};

////////front end/////////
$(function(){
  $("#getNumber").submit(function(event){
    event.preventDefault();
    $(".well").hide();
    numberInput = $("#numberInput").val();
    isValid(numberInput);
    pingPong(numberInput);
    // results = resultsArray.join(" ");
    // $("#pingPongResults").text(results);
    for(var i=0; i <resultsArray.length; i ++){
      $("#pingPongResults").append("<p class='numberBall'>" + resultsArray[i] + "</p>")
    }
  });
});
