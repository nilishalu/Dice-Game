var p1Score = Math.floor(Math.random() * 6) + 1;
var p2Score = Math.floor(Math.random() * 6) + 1;

var result = document.querySelector('#res');
var p1ScoreImage = document.querySelector(".dice #img1");
var p2ScoreImage = document.querySelector(".dice #img2");

p1ScoreImage.src = "images/dice" + p1Score + ".png";
p2ScoreImage.src = "images/dice" + p2Score + ".png";

if (p1Score > p2Score) {
    result.innerHTML = "<em>Player 1 wins</em>";
}
else if (p1Score < p2Score) {
    result.innerHTML = "<em>Player 2 wins</em>";
}
else {
    result.innerHTML = "<em>It's a draw</em>";
}
