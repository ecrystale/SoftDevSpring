/*
  Orange -- Ahnaf Kazi, Emily Lee
  SoftDev2 pd7
  K#01 -- ...and I want to Paint It Better
  2019-01-31
*/


//saves other text for shape
var tango;

//switches shape and button on button click
shape.addEventListener("click",
		       function(e){
			   tango = shape.innerHTML;
			   if(tango == "draw-a-rectangle"){
			       shape.innerHTML = "draw-a-dot";
			   }
			   else{
			       shape.innerHTML = "draw-a-rectangle"
			   }
		      }
		     );

//clears canvas
clear.addEventListener("click",
		       function(e){
			   ctx.clearRect(0, 0, c.width, c.height);
		       }
		      );

//draws shape on click on canvas
c.addEventListener("click",
		   function(e){
		       if(tango == "draw-a-rectangle"){
			   //e.offsetX and e.offsetY take the mouse's x and y coordinates, respectively, from within the target node. 
			   ctx.fillRect(e.offsetX,e.offsetY,30,30);
		       }
		       else if(tango == "draw-a-dot"){
			   //ctx.beginPath() creates a new path and empties the list of sub-paths, which leads to seperating of shapes from being in the same group.
			   ctx.beginPath();
			   ctx.ellipse(e.offsetX, e.offsetY, 10, 10, 0, 0, 2*Math.PI);
			   ctx.fill();
		       }
		   }
		  );

//e.preventDefault() prevents an action that is the default from certain events(eg. toggle box toggling or text field typing) from occuring when it normally would(eg. on click or type)
