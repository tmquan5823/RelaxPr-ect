var buttonColours = ["green", "red", "yellow", "blue"]
var gamePattern = []
var userClickedPattern = []
var gameStarted = false
var level = 0
var userLevel = 0
var gameOver = false

function nextSequence(){
    userClickedPattern = []
    userLevel = 0
    level++
    $("#level-title").text("Level " + level)
    var randomNumber = Math.floor(Math.random() * 4)
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
}   

function checkAnswer(currentLevel){
    if(gameStarted){
        if(userClickedPattern[level - 1] == gamePattern[level - 1]){
            setTimeout(() => {
                nextSequence()
            }, 1000);
            return true
        }
        if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
            return true
        }
        else return false
    }
    else return true
}

function playSound(colorSound){
    var audio = new Audio("./assets/sounds/" + colorSound + ".mp3");
    audio.play(); 
}

$(".btn").click(function(){
    var userChosenColour = [$(this).attr("id")]
    userClickedPattern.push(userChosenColour)
    console.log(userClickedPattern)
    playSound(userChosenColour)
    animatePress(userChosenColour)
    if(!checkAnswer(userLevel++)){
        playSound("wrong")
        $("#level-title").text("Game Over, Press Any Key to Restart")
        $("body").addClass("game-over")
        startOver()
        setTimeout(function(){
            $("body").removeClass("game-over")
        }, 200)
    }
})  

function startOver(){
    level = 0
    gamePattern = []
    userClickedPattern = []
    gameStarted = false
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed")
    setTimeout(() => {
    $("#" + currentColour).removeClass("pressed")
    }, 100);
}

$(document).keypress(function(){
   if(!gameStarted){
        gameStarted = true
        nextSequence();
   }
})