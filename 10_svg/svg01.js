/*
Emily Lee
SoftDev pd7
K#09 -- Connect the Dots
2019-03-13
*/

var pic = document.getElementById("vimage");

var clear=document.getElementById("but_clear");


pic.addEventListener("click",
		     function(e){
			 var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			 if(c.getAttribute("fill")=="blue"){
			     x=math.randint(0,pic.getAttribute("width"));
			     y=math.randint(0,pic.getAttribute("height"));
			     c.setAttribute("cx",x);
			     c.setAtrributs("cy",y);
			     c.setAttribute("r", 10);
			     c.setAttribute("fill", "red");			
			 }
			 
			 else if (c.getAttribute("fill")=="red"){
			     c.setAttribute("cx", e.offsetX);
			     c.setAttribute("cy", e.offsetY);
			     c.setAttribute("r", 10);
			     c.setAttribute("fill", "blue");
			 }

			 else{
			     c.setAttribute("cx", e.offsetX);
			     c.setAttribute("cy", e.offsetY);
			     c.setAttribute("r", 10);
			     c.setAttribute("fill", "red");
			 }
			 pic.appendChild(c);
		     }
		     
		    );

clear.addEventListener("click",
		       function(e){
			   while (pic.lastChild) {
			       pic.removeChild(pic.lastChild);
			   }
			   origX=-1;
			   origY=-1;
		       }
		      );
