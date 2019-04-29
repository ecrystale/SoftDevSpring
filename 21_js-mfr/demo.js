//var data=JSON.parse(demo.json);
//console.log(data)

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myArr[0];
  }
};
xmlhttp.open("GET","demo.json",true);
xmlhttp.send();

x=[1,2,3,4]
var newX=x.filter(function(n){
    return (n%2==0)}
		 );
console.log(newX)
