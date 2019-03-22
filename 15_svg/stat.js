//link:http://www.statpoint.net/default.aspx

var Task =[1,2,3,4,5,6]
var Num=[39,40,44,47,41,37]

var w=550;
var h=550;
var svg=d3.select(".chart").attr("width",w).attr("height",h)

i=0
c=Task.length
while (i<c){
    var circ= svg.append("circle")
	.attr("cx",function(d){return 50+50*Task[i]})
	.attr("cy",function(d){return 50+10*Num[i]})
	.attr("r",5)
    i+=1
}


var x_scale=d3.scaleLinear()
    .domain([d3.min(Task),d3.max(Task)])
    .range([0,w]);

var y_scale=d3.scaleLinear()
    .domain([d3.min(Num),d3.max(Num)])
    .range([0,h]);

var x_axis=d3.axisBottom()
    .scale(x_scale)

var y_axis=d3.axisLeft()
    .scale(y_scale)

var chart=d3.select(".chart")
chart.append('g')
    .attr("transform","translate (50,50)")
    .call(x_axis)

chart.append('g')
    .attr("transform","translate (50,50)")
    .call(y_axis)
