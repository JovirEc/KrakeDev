calcularValorDescuento = function(monto,porcentajeDescuento){
    let descuento = (monto*porcentajeDescuento)/100;
    return descuento;
}

calcularIVA = function(monto){
    let iva = (monto*12)/100;
    return iva.toFixed(3);
}

calcularSubtotal = function(precio,cantidad){
    let subTotal = precio*cantidad;
    return subTotal;
}

calcularTotal = function(subtotal,descuento,iva){
    let valorTotal = (subtotal - descuento) + iva;
    return valorTotal;
}