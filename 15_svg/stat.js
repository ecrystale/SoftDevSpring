//link:http://www.statpoint.net/default.aspx

var stat =[
    {
	"Task": 27
    },
    {
	"Task": 31
    },
    {
	"Task": 26
    },
    {
	"Task": 32
    },
    {
	"Task": 39
    },
    {
	"Task": 38
    },
    {
	"Task": 30
    },
    {
	"Task": 28
    },
    {
	"Task": 27
    },
    {
	"Task": 27
    },
    {
	"Task": 34
    }
]

var w=500;
var h=200;
var svg=d3.select("body").append("svg").attr("width",w).attr("height",h)

var circ= svg.append("circle").attr("cx":function(d){return d.Task;}).attr("cy",function(d){return d.Task;}).attr("r",5;)
