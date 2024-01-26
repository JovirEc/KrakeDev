calcularValorDescuento = function(monto,porcentajeDescuento){
    let descuento = (monto*porcentajeDescuento)/100;
    return descuento;
}

calcularIVA = function(monto){
    let iva = (monto*12)/100;
    return iva;
}

calcularSubtotal = function(precio,cantidad){
    let subTotal = precio*cantidad;
    return subTotal;
}

calcularTotal = function(subtotal,descuento,iva){
    let valorTotal = (subtotal - descuento) + iva;
    return valorTotal;
}

mostrarResumen = function(producto,cantidad,descuento,total){
    let resumen = "Usted compró "+cantidad+" unidades de "+producto+" con un descuento del "+descuento+"% por un total de: $"+total;
    return resumen;
}