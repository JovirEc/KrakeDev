calcularValorTotal = function(){
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    let resumen;

    nombreProducto = recuperarTexto ("txtProducto");
    cantidad       = recuperarInt   ("txtCantidad");
    precioProducto = recuperarFloat ("txtPrecio");

    if(esProductoValido (nombreProducto,"lblErrorProducto") & esCantidadValida (cantidad,      "lblErrorCantidad") & esPrecioValido   (precioProducto,"lblErrorPrecio")){
            valorSubtotal = calcularSubtotal(precioProducto,cantidad);
            mostrarTexto("lblSubtotal",valorSubtotal);

            valorDescuento = calcularDescuentoPorVolumen(valorSubtotal,cantidad);
            mostrarTexto("lblDescuento",valorDescuento);

            valorIVA = calcularIVA(valorSubtotal - valorDescuento);
            mostrarTexto("lblValorIVA",valorIVA);

            valorTotal = calcularTotal(valorSubtotal,valorDescuento,valorIVA)
            mostrarTexto("lblTotal",valorTotal);

            resumen = mostrarResumen(nombreProducto,cantidad,valorDescuento,valorTotal);
            mostrarTexto("lblResumen",resumen);
    }
}

esProductoValido = function(producto,idComponenteError){
    let hayError = false;
    if(producto.length == 0){
        mostrarTexto(idComponenteError,"*Campo Obligatorio")
        hayError = true;
    }
    if(producto.length < 0 || producto.length > 10){
        mostrarTexto(idComponenteError,"*Cantidad debe ser entre 1 y 10");
        hayError = true;
    }
    if(hayError == false){
        mostrarTexto(idComponenteError,"");
    }
    return !hayError
}

esCantidadValida = function(cantidad,idComponenteError){
    let hayError = false;

    if(isNaN(cantidad)){
        mostrarTexto(idComponenteError,"*Campo Obligatorio")
        hayError = true;
    }
    if(cantidad < 0 || cantidad > 100){
        mostrarTexto(idComponenteError,"Cantidad debe ser entre 1 y 100")
        hayError = true;
    }
    if(hayError == false){
        mostrarTexto(idComponenteError,"");
    }
    return !hayError
}

esPrecioValido = function(precio,idComponenteError){
    let hayError = false;
    if(isNaN(precio)){
        mostrarTexto(idComponenteError,"*Campo Obligatorio");
        hayError = true;
    }
    if(precio < 0 || precio > 50){
        mostrarTexto(idComponenteError,"Precio debe ser entre 0.01 y 50");
        hayError = true;
    }
    if(hayError == false){
        mostrarTexto(idComponenteError,"");
    }
    return !hayError;
}


limpiar=function(){
    mostrarTextoEnCaja("txtProducto","");
    mostrarTextoEnCaja("txtCantidad",0);
    mostrarTextoEnCaja("txtPrecio",0.0);
    mostrarTexto("lblSubtotal",0.0);
    mostrarTexto("lblDescuento",0.0);
    mostrarTexto("lblValorIVA",0.0);
    mostrarTexto("lblTotal",0.0);
    mostrarTexto("lblResumen","");
}