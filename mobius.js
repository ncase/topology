Math.TAU = 2*Math.PI;

var canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 300;

var ctx = canvas.getContext('2d');
var img = new Image();
img.src = "kitten.jpg";
img.onload = function(){

	var offset = 0;
	setInterval(function(){
		offset += 10;
		drawCylinder(offset);
	},30);

};

function drawCylinder(offset){

	for(var i=0;i<img.width;i++){
	
		// Find angle & coords
		var angle = (i/img.width)*Math.TAU;
		var x = Math.cos(angle)*190;
		var y = -Math.sin(angle)*30;

		// Draw subsection of image
		ctx.drawImage(
			img,
			(i+offset)%img.width, 0, 1, img.height, // source
			400+x, 50+y, 1, img.height // destination
		);

	}

}