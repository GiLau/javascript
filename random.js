/*function tiraDados(){
	var dado = Math.floor(Math.random() * 6) + 1;
	return dado;
} 
alert("tiramos 3 dados: ");
alert("el dado dice: " + tiraDados());
var multiplo = 2 * tiraDados();
alert("el multiplo de bonus es: " + multiplo);*/

/*function numeroAlAzarHastaLimite(limite) 
{
	var num = Math.floor(Math.random() * limite) + 1;
	return num;
}
var numAzar = numeroAlAzarHastaLimite(100);

alert("El numero al Azar es: " + numAzar );
var num1= ("ingrese primer numero");
var num2 = ("ingrese segundo numero");

function max(num1, num2) 
{
	var num = Math.floor(Math.random() * max) + 1;
	if (num1 > num2)
	{
	return num1;
	}
	else{
		return num2;
	}
	

}
*/
/******** variables globales y locales *******
function saludo(){
	var mensaje = ("Hola a todos");
	alert(mensaje);
}
var mensaje = "Chao";
saludo();
alert(mensaje);
saludo();*/

var num = 9;
if(isNaN(num))
{
	throw new Error("No es un numero valido");	
}
else{
	num = num * 0.5;
}