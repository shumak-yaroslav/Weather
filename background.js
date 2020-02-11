let canvas = document.querySelector('#my_canvas');
let ctx = canvas.getContext('2d');
let imageObj = new Image();

ctx.canvas.width = window.innerWidth-20;
ctx.canvas.height = window.innerHeight-120;

imageObj.onload = function() {
	ctx.drawImage(imageObj, 0, 0,window.innerWidth,window.innerHeight);
	ctx.beginPath();
	ctx.fillStyle = 'black';
	ctx.arc(255, 430, 3, 0, Math.PI*2);
	ctx.fill();
	ctx.font = "italic 10pt Arial";
	ctx.fillText("Trujillo", 260, 440);
	ctx.arc(645, 238, 3, 0, Math.PI*2);
	ctx.fill();
	ctx.font = "italic 10pt Arial";
	ctx.fillText("Laguat", 653, 246);
	ctx.beginPath();
	ctx.moveTo(255, 430);
	ctx.lineTo(645, 238);
	ctx.stroke();
};
imageObj.src = 'assets/img/map.jpg';
imageObj.style.position = 'relative';