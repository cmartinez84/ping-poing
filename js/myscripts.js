var results;
var resultsArray= [];
var numberInput;
///////back end/////////
var pingPong = function(input){
  for(var i = 1; i <= input; i++){
    if((i % 3 ===0) && (i % 5 ===0)){
      resultsArray.push("ping pong");
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
    numberInput = $("#numberInput").val();
    if(isNaN(numberInput) || (numberInput <=0)){
      $("form").addClass("has-error");
      $("#warning").show();
    }
    else{
    $(".well").hide();
    pingPong(numberInput);
    }
    for(var i=0; i <resultsArray.length; i ++){
      var blop = new Audio("sounds/blop.wav");
      blop.play();
      var random1 = Math.floor(Math.random() * 99);
      var random2 = Math.floor(Math.random() * 99);
      makeBalls(resultsArray[i], random1, random2, i);
      $("#playAgain").show();
    }
  });
var makeBalls = function(ballValue, random1, random2, i){
  if(ballValue==="ping pong"){
    $("#pingPongResults").append("<p class='balls pingPongBall'>" + resultsArray[i] + "</p>");
    $("p:nth-child("+ (i+1) +")").css({"position":"fixed", "top": random1+"%","left":random2 +  "%"});
  }
  else if(ballValue.length ===4){
    $("#pingPongResults").append("<p class='balls pongBall'>" + resultsArray[i] + "</p>");
    $("p:nth-child("+ (i+1) +")").css({"position":"fixed", "top": random1+"%","left":random2 +  "%"});

  }
  else {
    $("#pingPongResults").append("<p class='balls numberBall'>" + resultsArray[i] + "</p>");
    $("p:nth-child("+ (i+1) +")").css({"position":"fixed", "top": random1+"%","left":random2 +  "%"});
  }
}



  $("#playAgain").click(function(){
    numberInput = 0;
    resultsArray = [];
    $(".balls").empty();
    $(".well").show();
    $(this).hide();
  });

  $("p").click(function(){
    $(this).empty();
  });
});
