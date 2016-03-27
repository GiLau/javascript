
/******** TIRA DADOS*******
function tiraDados(){
	var dado = Math.floor(Math.random() * 6) + 1;
	return dado;
} 
alert("tiramos 3 dados: ");
alert("el dado dice: " + tiraDados());
var multiplo = 2 * tiraDados();
alert("el multiplo de bonus es: " + multiplo);*/

/******* NUMEROS AL AZAR CON LIMITE ***********
function numeroAlAzarHastaLimite(limite) 
{
	var num = Math.floor(Math.random() * limite) + 1;
	return num;
}
var numAzar = numeroAlAzarHastaLimite(100);

alert("El numero al Azar es: " + numAzar );*/

/*********** MOSTRAR NUMERO MAYOR ENTRE 2 NUMEROS ******
var num1= parseInt(prompt("ingrese primer numero"));
var num2 = parseInt(prompt("ingrese segundo numero"));

function max(num1, num2) 
{
	if (num1 > num2)
	{
	return num1;
	}
	else{
		return num2;
	}
}

alert(max(num1, num2));

/******** variables globales y locales *******
function saludo(){
	var mensaje = ("Hola a todos");
	alert(mensaje);
}
var mensaje = "Chao";
saludo();
alert(mensaje);
saludo();*/


/******* MENSAJE DE ERROR CUANDO NO ES NUMERICO *****
var num = 9;
if(isNaN(num))
{
	throw new Error("No es un numero valido");	
}
else{
	num = num * 0.5;
} **********/


			/************** DESAFIO  **************
*******************numero al azar entre 2 limites con errores**************/

function numAzar(lim1, lim2) 
{
	if (isNaN(lim1) || isNaN(lim2))
	{
	 	throw new Error("Valor ingresado no es numerico");
	}
	var num = Math.round(Math.random() * (lim1 - lim2)) + lim2;
	return num;

}
var lim1= parseInt(prompt("Ingrese limite superior : "));
var lim2 = parseInt(prompt("ingrese limite inferior : "));
/*alert("Su numero al azar es: " + numAzar(parseInt(lim2), parseInt(lim1)));*/
/***************** agregando ciclos ************/

var contador = 0;

while(contador<10)
{
var randomico= numAzar(parseInt(lim2), parseInt(lim1));
document.write(randomico + " , ");
contador++;
}


/***************************  CICLOS  ********************************

var lim1= parseInt(prompt("Ingrese limite superior : "));
var lim2 = parseInt(prompt("ingrese limite inferior : "));*/


