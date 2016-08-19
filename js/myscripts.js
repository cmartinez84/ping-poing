var results;
var resultsArray= [];
var numberInput;
///////back end/////////
// var isValid = function(input){
//   if (isNaN(input)){
//     results = "your entry was not a number. please enter a number";
//   }
//   else{
//     numberInput = parseInt(input);
//     return numb
//   }
// }
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
    if(isNaN(numberInput)){
      $("form").addClass("has-error");
      $("#warning").show();
    }
    else{
    $(".well").hide();
    pingPong(numberInput);
    }
    for(var i=0; i <resultsArray.length; i ++){
      if(resultsArray[i]==="ping pong"){
        $("#pingPongResults").append("<p class='balls pingPongBall'>" + resultsArray[i] + "</p>");
        var random1 = Math.floor(Math.random() * 99);
        var random2 = Math.floor(Math.random() * 99);
        $("p:nth-child("+ (i+1) +")").css({"position":"fixed", "top": random1+"%","left":random2 +  "%"});

      }
      else if(resultsArray[i].length ===4){
        $("#pingPongResults").append("<p class='balls pongBall'>" + resultsArray[i] + "</p>");
        var random1 = Math.floor(Math.random() * 99);
        var random2 = Math.floor(Math.random() * 99);
        $("p:nth-child("+ (i+1) +")").css({"position":"fixed", "top": random1+"%","left":random2 +  "%"});

      }
      else {
        $("#pingPongResults").append("<p class='balls numberBall'>" + resultsArray[i] + "</p>");
        var random1 = Math.floor(Math.random() * 99);
        var random2 = Math.floor(Math.random() * 99);
        $("p:nth-child("+ (i+1) +")").css({"position":"fixed", "top": random1+"%","left":random2 +  "%"});

      }
    }
  });
  // $("#getNumber").submit(function(event){
  //   event.preventDefault();
  //   alert("adada");
    // var random1 = Math.floor(Math.random() * 100);
    // var random2 = Math.floor(Math.random() * 100);
    // $("*").css({"position": "fixed", "top": random1+"%", "left": random2+"%"});
  //   });
   });
