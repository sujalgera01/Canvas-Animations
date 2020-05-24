var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext('2d');

var x=0;
var y=0;
var dx=1
setInterval(function(){

	x = x+dx;
	y++;
	ctx.fillStyle = "black";
	ctx.fillRect(0,0,canvas.width, canvas.height);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(x,220,75,0,Math.PI*2);
	ctx.fillStyle = "white";
	ctx.fill();
	

	ctx.beginPath();
	ctx.arc(130,y,50,0,Math.PI*2);
	ctx.fillStyle = "blue";
	ctx.fill();


	ctx.beginPath();
	ctx.arc(x,y,100,0,Math.PI*2);
	ctx.fillStyle = "red";
	ctx.fill();


});