calcularValorTotal = function(){
    let nombreProducto;
    let precioProducto = 0;
    let cantidad = 0;
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    let resumen;

    nombreProducto = recuperarTexto("txtProducto");
    if(nombreProducto.length == 0){
        mostrarTexto("lblErrorNombre","*Campo obligatorio");
    }
    cantidad = recuperarInt("txtCantidad");
    if(cantidad == 0 ){
        mostrarTexto("lblErrorCantidad","*Campo obligatorio")
    }
    precioProducto = recuperarFloat("txtPrecio");
    if(precioProducto.length == 0){
        mostrarTexto("lblErrorCantidad","*Campo obligatorio");
    }
    

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

esProductoValido = function(){

}
esCantidadValida = function(){

}
esPrecioValido = function(){

}

limpiar=function(){
    mostrarTextoEnCaja("txtProducto","");
    mostrarTextoEnCaja("txtCantidad",0);
    mostrarTextoEnCaja("txtPrecio",0.0);
    mostrarTextoEnCaja("txtPorcentajeDescuento",0)
    mostrarTexto("lblSubtotal",0.0);
    mostrarTexto("lblDescuento",0.0);
    mostrarTexto("lblValorIVA",0.0);
    mostrarTexto("lblTotal",0.0);
    mostrarTexto("lblResumen","");
}