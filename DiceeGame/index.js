function rollFunction(){
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var str1 = "./assets/images/dice" + dice1.toString() + ".png";
    var dice2 = Math.floor((Math.random() * 6) + 1);
    var str2 = "./assets/images/dice" + dice2.toString() + ".png";
    
    document.querySelector(".img1").setAttribute("src", str1);
    document.querySelector(".img2").setAttribute("src", str2);
    
    if(dice1 > dice2) {
        document.querySelector("h1").textContent = "Player 1 wins!";
    }
    if(dice1 < dice2) {
        document.querySelector("h1").textContent = "Player 2 wins!";
    }
    if(dice1 === dice2) {
        document.querySelector("h1").textContent = "Draw!";
    }
}