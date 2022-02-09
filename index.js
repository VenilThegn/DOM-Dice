var random1 =(Math.floor(Math.random()*6)+1);
var image1="images/dice"+random1+".png";
var random2 =(Math.floor(Math.random()*6)+1);
var image2="images/dice"+random2+".png";
document.querySelector(".dice .img1").setAttribute("src", image1);
document.querySelector(".dice .img2").setAttribute("src", image2);
if(random1>random2)
{
document.querySelector(".result").innerHTML="Player 1 Wins";
}
else if (random1<random2) {
document.querySelector(".result").innerHTML="Player 2 Wins";
}
else
{
document.querySelector(".result").innerHTML="DRAW";
}
