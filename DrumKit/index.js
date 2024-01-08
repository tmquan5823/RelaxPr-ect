var length = document.querySelectorAll(".drum").length;
for(var i = 0; i < length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var char = this.innerHTML;
        console.log(this);
        makeSound(char);
        buttonAnimation(char);
    })
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case "w": 
            var audio = new Audio("./assets/sounds/crash.mp3");
            audio.play();
            break;
        case 'a': 
            var audio = new Audio("./assets/sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's': 
            var audio = new Audio("./assets/sounds/snare.mp3");
            audio.play();
            break;
        case 'd': 
            var audio = new Audio("./assets/sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j': 
            var audio = new Audio("./assets/sounds/tom-2.mp3");
            audio.play();
            break;
        case 'k': 
            var audio = new Audio("./assets/sounds/tom-3.mp3");
            audio.play();
            break;
        case 'l': 
            var audio = new Audio("./assets/sounds/crash.mp3");
            audio.play();
            break;
        default: break;
    }
}

function buttonAnimation(key){
    var btn = document.querySelector("." + key);
    btn.classList.add("pressed");   
    setTimeout(function(){
    btn.classList.remove("pressed");
    }, 100)
}