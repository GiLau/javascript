/**
var productos = ["cuaderno", "lapiz" , "esferos" , "carpetas" , "sacapuntas" , "borrador" , "hojas"];
while (true)
{
	var nomProductos= (prompt("Ingrese s para salir o indique el producto que buscas?:"));
	if(nomProductos=="s")
	{
		break;
	}
	else if (nomProductos=="l")
	{
		document.write(productos.join(" - "));
	}
	else
	{
		var pEncontrado= productos.indexOf(nomProductos);
		if ( pEncontrado>=0)
		{
			alert("Si hay producto");
		}
		else if (pEncontrado<0)
		{
			alert("No tenemos este producto");
		}
	}
}
*/