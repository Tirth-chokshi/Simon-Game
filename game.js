
var buttonColors = ["red","blue","green","yellow"];
var gamePattern =[];
var userClickedPattern =[];
var level = [0];
var started = false;

$("h1").click(function() {
    if(!started){
        $("#level-title").text("Level "+ level);
        nextSequence();
        started = true;
    }
})
$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor)

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(curreentLevel) {
    
    if (gamePattern[curreentLevel] === userClickedPattern[curreentLevel]) {
        console.log("Success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }
    else{
        console.log("Dissapointment");
        $("h1").text("Game over!");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();
    }
}function nextSequence() {
   userClickedPattern=[];
    level++;
   $("#level-title").text("Level " + level);
   var randomNumber =  Math.floor(Math.random()* 4);
   var randomChosenColor = buttonColors[randomNumber];
   gamePattern.push(randomChosenColor);
   $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
   playSound(randomChosenColor);
}




// function animatePress
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  } 
// function playSound
function playSound(name) {
    var audio = new Audio("sounds/" + name +".mp3");
    audio.play();
}