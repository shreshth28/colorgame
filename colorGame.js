// alert("CONNECTED");
var colors=generateRandomColors(6);
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor =colors[pickColor()];
var squares=document.querySelectorAll(".square");
var messageDisplay=document.querySelector("#message");
var resetButton =document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var numsSquares=6;
var audio = new Audio('audio.mp3');
easyBtn.addEventListener("click",function(){
	audio.play();
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numsSquares=3;
	colors=generateRandomColors(numsSquares);
	pickedColor=colors[pickColor()];
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	audio.play();
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numsSquares=6;
	colors=generateRandomColors(numsSquares);
	pickedColor=colors[pickColor()];
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.display="block";
		squares[i].style.background=colors[i];
		}
	}
);



resetButton.addEventListener("click",function(){
//generate all new colors
audio.play();
colors=generateRandomColors(6);
//pick a new color from the array
pickedColor=colors[pickColor()];
//change colors of sqares
colorDisplay.textContent=pickedColor;
messageDisplay.textContent="";
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background =colors[i];
}
h1.style.backgroundColor="steelblue";
});

colorDisplay.textContent= pickedColor;
for(var i=0; i <squares.length; i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click", function(){
//grab the color of the clicked square
audio.play();
var clickedColor=this.style.backgroundColor;
//and then compare it to the pickedColor
if(clickedColor==pickedColor){
	messageDisplay.textContent="Correct!";
	resetButton.textContent="Play Again";
	changeColors(pickedColor);
	document.getElementsByTagName[0].style.color=pickedColor;
	}
else
{
	this.style.backgroundColor="#232323";
	messageDisplay.textContent="Try Again";

}
});
}

function changeColors(color){
	//loop through all squares 
	for(var i =0;i<squares.length;i++)
	{
		//change each color to match the given color
		squares[i].style.backgroundColor=color;
	}
};
function pickColor(){
var random=Math.floor(Math.random()*colors.length);
return (random);
}

function generateRandomColors(num){
	//make an array
	var arr=[]
	//add num random colors to arr
	for(var i=0;i<num;i++)
	{
		//get random colors and push to the array
		arr.push(randomColor());
	}
	//return that array
	return(arr);
}
function randomColor(){
	//pick a red from 0 to 255
	var r=Math.floor(Math.random()*256);
	//green from 0 to 255
	var g=Math.floor(Math.random()*256);
	//blue from 0 to 255
	var b=Math.floor(Math.random()*256);
	return("rgb(" + r + ", " + g + ", " + b + ")");

}
