console.log("Inicio de programa");
/*alert("Hola JavaScript");*/
/*var nombre= prompt("Cual es tu nombre");
document.write ("<h1> su nombre es:"  +nombre+"</h1>");
/*document.write("<h1>Hola JavaScript!</h1>");
alert("gracias por visitar");

var equipo= prompt("cual es tu equipo favorito?");
console.log("el equipo es:" +equipo);

var clave = prompt("Hola Usuario, Ingrese su clave en minusculas!");
console.log("La longitud de la clave es: " + clave.length);
console.log("TA-DA!!! Su clave es: " + clave.toUpperCase());
console.log("El valor original de la clave es: " +  clave);
var nombre= prompt("Cual es tu nombre");
document.write ("<h1> su nombre es:"  +nombre+"</h1>");*/

/****************CALCULADORA DEL TIEMPO************************/

/*var edad= prompt("Cuantos años tienes");
var segundosPorMinuto = 60;
var minutosPorHora = 60;
var horasPorDia = 24;
var segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;
var segundosVividos= edad * segundosPorDia;

document.write("<h1>Calculadora del Tiempo</h1><p>Hay " +segundosPorDia	+ " en un dia</p>");
document.write (" <h2>su edad en segundos es:" +segundosVividos+"</h2>");

/************************PELICULAS Y SERIES ***************************************/


/*var peliculasVistas = prompt("Cuantas peliculas haz visto este mes?");
var seriesVistas = prompt("Cuantas series has visto este mes?");
var tiempoPantalla = parseInt(peliculasVistas) + parseInt(seriesVistas);
alert('Wow! Has visto ' + tiempoPantalla + " veces minimo la pantalla.");*/


/***************** DADOS DENTRO DE FUNCION*************
var dado = Math.floor(Math.random() * 6) +1;
alert("Dado dice:" + dado);
var numero= prompt("Ingrese un numero:");
var numero = Math.floor(Math.random() * numero) +1;
alert ("numero dice:" + numero);

/*ADIVINANDO NUMERO
var limiteSuperior = 5;
var ganador= false;
var numero= prompt("Ingrese un numero del 1 al " + limiteSuperior +": ");
var valorAdivinar= Math.floor(Math.random() *  limiteSuperior) +1;
document.write("<h1>Adivina el Numero!</h1>");
if (parseInt(numero) === valorAdivinar)
{
	ganador = true;
	}
else if (parseInt(numero) > valorAdivinar){
		alert("el numero que ingresaste es mayor que el numero a adivinar" );
		var numero= prompt("Ingrese un numero del 1 al " + limiteSuperior +": ");
		if (parseInt(numero) === valorAdivinar)
		{
		ganador =true;
		}
	}
else if (parseInt(numero) < valorAdivinar)
		{
		alert("el numero que ingresaste es menor que el numero a adivinar" );
		var numero= prompt("Ingrese un numero del 1 al " + limiteSuperior +": ");
		if (parseInt(numero) === valorAdivinar)
		{
		ganador = true;
		}
	}


if (ganador)  {
	alert("has ganado");
}
else{
	alert("has perdido");
}

console.log("fin de programa");*/


