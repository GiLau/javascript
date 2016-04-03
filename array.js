
/***** arreglos*****
//esta funcion 
function printList(list)
{
	var listHTML = '<ol>';
	for (var i = 0; i < list.length; i += 1)
	{
		listHTML += '<li>'+ list[i][0] + '</li>';
	}
	listHTML += '</ol>';
	print(listHTML);
}
//Esta funcion imprime el html que le demos
function print(html)
{
	document.write(html);
}
var playlist = [];
playlist.push(["Regalame una noche" , "vallenato"]);
playlist.push(["Te pienso sin querer" , "Franco DeVita ft Gloria Trevi"]);
playlist.push(["Kilometros" , "sin bandera"]);
playlist.push(["Dime que no" , "ricardo arjona"]);
playlist.push(["Incondicional" , "prince roice"]);
playlist.push(["Propuesta indecente" , "romeo santos"]);
playlist.push(["Tu poeta" , "alex campos"]);

printList(playlist);*/


/***** arreglo dentro de otro arreglo**////

var preguntas = [];
preguntas.push(["Quien se comio a la abuelita de caperucita?" , "el lobo"]);
preguntas.push(["cuantas llantas tiene un auto?" , "4"]);
preguntas.push(["cuantos enanos acompañaban a blancanieves?" , "7"]);
preguntas.push(["cuantas horas tiene un dia?" , "24"]);
preguntas.push(["cual es la capital de ecuador?" , "quito"]);
preguntas.push(["cuantos dias tiene la semana?" , "7"]);




function imprimirRespuestas(tipoRespuestas)
{
	var arregloRespuestas;
	var stringRespuestas= '';
	if (tipoRespuestas.toLowerCase()=="correctas" || tipoRespuestas.toLowerCase()=="incorrectas")
	{
		if(tipoRespuestas=="correctas")
		{
			arregloRespuestas= correctas;
		}
		else
		{
			arregloRespuestas= incorrectas;	
		}
		if (arregloRespuestas.length<1)
		{
			stringRespuestas="no hubo respuestas" + tipoRespuestas;

		}
		for(var i=0; i<arregloRespuestas.length; i++)
		{
			stringRespuestas +="<p><b>" + arregloRespuestas[i][0]+ "</b><br>" + arregloRespuestas[i][1] + "</p>";

			//si la respuesta es incorrecta, arreglar las respuestas verdaderas
			if(tipoRespuestas=="incorrectas")
			{
				stringRespuestas+= "<i> la respuesta correcta era:" + arregloRespuestas[i][2] + "</i>";
			}
		}
	}
	else
	{
		alert("error, vea consola");
		throw new Error("tipo de respuesta no aceptada");

	}
	return stringRespuestas;

}
// imprimir todo el cuestionario y las respuestas correctas e incorrectas

function imprimirCuestionario()
{
	html +="<h3> Respuestas Correctas </h3>";
	html +=imprimirRespuestas("correctas") ;
	html +='<h3 style="color:green;"> respuestas incorrectas</h3>';
	html += imprimirRespuestas("incorrectas");
	return html;
}

function printHTML(mensaje)
{
	//document.write(html);
	//reemplazado por Get elementByID para tomar el nodo (node object) en el 
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = mensaje;

}
var respuestas= [];


var correctas= [];

var incorrectas= [];

//preguntamos y procesamos las respuestas
for(var i=0; i<preguntas.length; i++)
{
	var respuestaSimple;
	do
	{
		respuestaSimple = prompt("responda:" + preguntas[i][0]);
	}
	while(respuestaSimple=='');

		if(isNaN(respuestaSimple))
		{
			respuestas.push(respuestaSimple.toLowerCase());
		}
		else
		{
			respuestas.push(parseInt(respuestaSimple));
		}
		if (respuestas[i]==preguntas[i][1])
		{
			correctas.push(preguntas[i]);
		}
		else
		{
			incorrectas.push([preguntas[i][0], respuestas[i], preguntas[i][1]]);
		}
}

var html= "<h1> Pregunta Pregunton </h1>";
html += "<h2> Aqui el resultado de sus respuestas </h2>";
html += imprimirCuestionario();
printHTML(html);
