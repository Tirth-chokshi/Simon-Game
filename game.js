
var buttonColors = ["red","blue","green","yellow"];
var randomChosenColor = buttonColors[radnomSequence()];
var gamePattern = randomChosenColor;
var userClickedPattern =[];
$("#"+randomChosenColor).fadeOut(100).fadeIn(100);

var audio = new Audio("sounds/" + randomChosenColor +".mp3");
audio.play();



$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor)
    var chosenAudio = new Audio("sounds/"+userClickedPattern+".mp3");
    chosenAudio.play(); 
});
function radnomSequence() {
    var randomNumber =  Math.floor(Math.random()* 4);
    return randomNumber;
}
$(".btn").click(function animatePress() {
    var userTapedColor =$(this).attr("id");
    $("#"+userTapedColor).addClass("pressed");
    setTimeout(() => {
        $("#"+userClickedPattern).removeClass("pressed");
    }, 100);
});  