var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];

$(".btn").click(function(){
    var userChoosenColor=$(this).attr("id");
    userClickedPattern.push(userChoosenColor);
    playSound(userChoosenColor);
    animationPress(userChoosenColor);
});




function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

  }

function playSound(name)
{
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();


}
function animationPress(currentColor)
{
   $("#"+currentColor).addClass("pressed");
  setTimeout(function()
{
    $("#"+currentColor).removeClass("pressed");
},100);
}