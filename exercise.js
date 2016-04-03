//
var productos = ["cuaderno", "lapiz" , "esferos" , "carpetas" , "sacapuntas" , "borrador" , "hojas"];
while (true)
{
	var nomProductos= (prompt("Ingrese S para salir o indique el producto que buscas?:"));
	if(nomProductos=="S")
	{
		break;
	}
	else if (nomProductos=="L")
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
