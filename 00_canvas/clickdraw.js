/*
Emily Lee
SoftDev2 pd7
K#00 -- I See a Red Door...
2019-01-30
*/

var c=document.getElementById("slate");
var ctx=c.getContext("2d");

var toggle=document.getElementById('toggle');
var rect=true;

toggle.addEventListener('click',function(e){
    if(rect==true){
	rect=false;
    }
    else{
	rect=true;
    };
    console.log(e);
});


c.addEventListener('click',function(e){
    if(rect==false){
	console.log(e);
	ctx.fillStyle = 'black';
	ctx.beginPath();
	ctx.ellipse(event.pageX-8,event.pageY-165.7812,2,2,0,0,360);
	ctx.fill();
	ctx.stroke()
    }
    if(rect==true){
	    console.log(e);
	    ctx.fillRect(event.pageX-8,event.pageY-165.78125,100,50);
    };
});

document.getElementById('clear').addEventListener('click',function(e){
    ctx.clearRect(0,0,c.width,c.height);
});
