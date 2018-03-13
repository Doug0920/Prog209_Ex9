    function DivLoad() {
	var canvas1 = document.querySelector("#thisCanvas");
	var ctx1 = canvas1.getContext("2d");
        DrawPic1();
	DrawPic2();
    }
    function DrawPic1() {
	var canvas1 = document.querySelector("#thisCanvas");
	var ctx1 = canvas1.getContext("2d");
        ctx1.save();
//  Blue oneway sign
	ctx1.lineWidth = 24;	  
	ctx1.lineJoin = "round";	   // rounded corners
	ctx1.strokeStyle = "#3D82F7";
	ctx1.fillStyle = "#3D82F7"; //   RGB  61, 130, 247
	// Draw sign outline & fill; start at 50, 50 and allow for linewidth
	ctx1.beginPath();
	ctx1.moveTo(50, 50);
	ctx1.lineTo(310, 50);
	ctx1.lineTo(310, 430);
	ctx1.lineTo(50, 430);
	ctx1.closePath();

	ctx1.fill();
	ctx1.stroke();

	// Draw inner line border with stroke
	ctx1.strokeStyle = "white";
	ctx1.lineWidth = 4;
	ctx1.stroke();

	// draw the arrow, sharp corners
	ctx1.lineWidth = 5;	  
	ctx1.lineJoin = "miter";
	ctx1.strokeStyle = "white";
	ctx1.fillStyle = "white"; 
	// Draw arrow outline & fill; start at 180, 90 and allow for linewidth
	ctx1.beginPath();
	ctx1.moveTo(180, 90);
	ctx1.lineTo(270, 180);
	ctx1.lineTo(215, 180);
	ctx1.lineTo(215, 400);
	ctx1.lineTo(145, 400);
	ctx1.lineTo(145, 180);
	ctx1.lineTo(90,  180);
	ctx1.lineTo(180, 90);
	ctx1.closePath();
	ctx1.fill();

// add text
	ctx1.fillStyle  = "#3D82F7";
	ctx1.font = "bold 52px Arial";
	ctx1.fillText( "ONE WAY" ,50 , 495);
	ctx1.restore();		// restore previous display state
    }
    function DrawPic2() {
	var canvas1 = document.querySelector("#thisCanvas");
	var ctx1 = canvas1.getContext("2d");
        ctx1.save();
//  Red Do Not Enter sign
	ctx1.lineWidth = 24;	  
	ctx1.lineJoin = "round";	   // rounded corners
	ctx1.fillStyle = "red";
	// Draw round outline & fill; center at 800, 400

	ctx1.beginPath();
	ctx1.translate(600, 300);  
	ctx1.arc(0, 0, 200, 0, 2*Math.PI, false); 
	ctx1.closePath();
	ctx1.fill();

	// Draw inner horizontal rectangle
	ctx1.strokeStyle = "white";
	ctx1.fillStyle = "white";
	ctx1.fillRect(-140,-30,300,80);
	ctx1.stroke();


// add text
	ctx1.fillStyle  = "white";
	ctx1.font = "bold 52px Arial";
	ctx1.fillText( "DO NOT" ,-100 ,-60);
	ctx1.fillText( "ENTER" ,-90 ,110);
	ctx1.restore();		// restore previous display state
    }