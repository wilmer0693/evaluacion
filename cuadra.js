function Resultado(){
var a =document.getElementById('num1').value;
var b =document.getElementById('num2').value;
var c =document.getElementById('num3').value;
var x1=0;
var x2=0;
var d=(a,b,c);
a=parseFloat(a);
b=parseFloat(b);
c=parseFloat(c);
if (d < 0 ){
	alert("La ecuación no tiene soluciones reales");
}
else{
	x1=(-b+(Math.sqrt((b*b)-(4*a*c))))/(2*a);
    x2=(-b-(Math.sqrt((b*b)-(4*a*c))))/(2*a);
    	
    //alert ("La ecuación tiene dos soluciones, que son números reales distintos: x1"+x1+"y en x2 es "+x2);
    alert ("La ecuación tiene dos soluciones, que son números reales distintos: x1"+x1);
    alert ("La ecuación tiene dos soluciones, que son números reales distintos: x2"+x2);
}
}