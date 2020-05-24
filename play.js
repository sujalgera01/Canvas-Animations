var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext('2d');

var x=0;
setInterval(function(){

	x++;
	ctx.fillStyle = "black";
	ctx.fillRect(0,0,canvas.width, canvas.height);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(x,220,75,0,Math.PI*2);
	ctx.fillStyle = "white";
	ctx.fill();

},10);