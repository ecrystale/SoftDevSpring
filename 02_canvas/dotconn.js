/*
  Orange -- Ahnaf Kazi, Emily Lee
  SoftDev2 pd7
  K#02 -- Connecting the Dots
  2019-02-04
*/


c=document.getElementById("playground");
ctx=c.getContext("2d");
clear=document.getElementById("clear");

//clears canvas
clear.addEventListener("click",
		       function(e){
			   ctx.clearRect(0, 0, c.width, c.height);
		       }
		      );

//draws shape on click on canvas

var origX=-1;
var origY=-1;

c.addEventListener("click",
		   function(e){		       
		       //ctx.beginPath() creates a new path and empties the list of sub-paths, which leads to seperating of shapes from being in the same group.
		       ctx.beginPath();
		       ctx.ellipse(e.offsetX, e.offsetY, 15, 15, 0, 0, 2*Math.PI);
		       ctx.fill();
		       if (origX>=0){
			   ctx.beginPath();
			   ctx.moveTo(origX,origY);
			   ctx.lineTo(e.offsetX,e.offsetY);
			   ctx.stroke();
		       }
		       origX=e.offsetX;
		       origY=e.offsetY;
		   }
		  );
