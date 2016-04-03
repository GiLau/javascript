
/***** arreglos*****/
//esta funcion 
function printList(list)
{
	var listHTML = '<ol>';
	for (var i = 0; i < list.length; i += 1)
	{
		listHTML += '<li>' + list[i] + '</li>';
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
playlist.push("Regalame una noche");
playlist.push("Te pienso sin querer");
playlist.push("Kilometros");
playlist.push("Dime que no");
playlist.push("Incondicional");
playlist.push("Propuesta indecente");
playlist.push("Tu poeta");

printList(playlist);

