var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext('2d');

var x=0;
var y=0;
var dx=1
var dy=1; 


setInterval(function(){

	x = x+dx;
	y = y+dy;
	ctx.fillStyle = "black";
	ctx.fillRect(0,0,canvas.width, canvas.height);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(x,200,75,0,Math.PI*2);
	ctx.fillStyle = "white";
	ctx.fill();
	if(x>=canvas.width || x<0){
		dx= -dx;
	}

	if(y>=canvas.height || y<0){
		dy = -dy;
	}


	ctx.beginPath();
	ctx.arc(120,y,50,0,Math.PI*2);
	ctx.fillStyle = "blue";
	ctx.fill();
	if(x>=canvas.width || x<0){
		dx= -dx;
	}


	ctx.beginPath();
	ctx.arc(x,y,100,0,Math.PI*2);
	ctx.fillStyle = "red";
	ctx.fill();
	if(x>=canvas.width || x<0){
		dx= -dx;
	}


});
