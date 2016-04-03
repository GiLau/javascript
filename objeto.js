
var persona = {
	nombre: "laura",
	pais: "ecuador",
	edad: 26,
	laborando: true,
	hobbies: ["leer", "escuchar musica","bailar","cantar"] 
};

function printHTML(mensaje)
{
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = mensaje;
}

var saludo = "<p> Hola " + persona.nombre + " bienvenida</p>";
saludo += "<p> Como estan las cosas en " + persona.pais + "?</p>";
persona.nombre = "Tratando de entender JS";
saludo += "<p> tu nombre de usuario es: " + persona.nombre + "</p>";
saludo += "<p> tu edad pronto sera: " + (persona.edad + 1) + "</p>";
saludo += "<p> tienes al momento: " + persona.hobbies.length + " hobbies </p>";
saludo += "<p> tus hobbies son: " + persona.hobbies.join(" , ") + "</p>";
printHTML(saludo);