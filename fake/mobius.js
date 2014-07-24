Math.TAU = 2*Math.PI;

var canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 300;

var ctx = canvas.getContext('2d');
var img = new Image();
img.src = "fool.png";

img.onload = function(){

	var offset = 0;
	setInterval(function(){
		offset -= 5;
		if(offset<0){
			offset=800;
		}
		drawMobius(offset);
	},30);

	//drawMobius(1200);

};

function drawMobius(offset){

	var offset2;

	// Loop width & height
	var loopWidth = Math.floor(800/*img.width*//Math.TAU);
	var loopHeight = 50;

	for(var i=0;i<800;i++){

		offset2=0;
	
		// Find angle & coords
		var angle = (i/800)*Math.TAU;
		var x = Math.cos(angle)*loopWidth;
		var y = -Math.sin(angle)*loopHeight;

		// FLIP IT
		if(angleInDegrees>0 && angleInDegrees<180){
			offset2=800;
		}

		// If 240 < angle < 300, twist it.
		var angleInDegrees = angle*(360/Math.TAU);
		if( angleInDegrees>240 && angleInDegrees<300 ){

			var flipHeight = Math.abs(Math.sin(Math.TAU*0.25*(270-angleInDegrees)/30));
			var flipOffset = img.height*(1-flipHeight)*0.5;

			// Draw subsection of image
			ctx.drawImage(
				img,
				(i+offset+offset2)%1600, 0, 1, img.height, // source
				400+x, 75+y+flipOffset, 1, img.height*flipHeight // destination
			);

		}else if(angleInDegrees>180){
			// Draw subsection of image
			ctx.drawImage(
				img,
				(i+offset+offset2)%1600, 0, 1, img.height, // source
				400+x, 75+y, 1, img.height // destination
			);

		}else{

			// FLIPPED
			ctx.save();
			ctx.translate(400+x, 75+y);
			ctx.scale(1,-1);
			ctx.drawImage(
				img,
				(i+offset+offset2)%1600, 0, 1, img.height, // source
				0, -img.height, 1, img.height // destination
			);
			ctx.restore();

		}

	}

}

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