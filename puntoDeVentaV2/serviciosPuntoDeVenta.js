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
    let resumen = "Usted compró "+cantidad+" unidades de "+producto+" con un descuento de $"+descuento+" por un total de: $"+total;
    return resumen;
}

calcularDescuentoPorVolumen = function(subTotal,cantidad){
    let descuento
    let porcentaje = 0;
    if(cantidad >= 3 && cantidad <= 5){
        porcentaje = 3;
    }else if(cantidad >= 6 && cantidad <= 11){
        porcentaje = 4;
    }else if(cantidad >= 12){
        porcentaje = 5;
    }
    descuento = (subTotal * porcentaje)/100;
    return descuento;
}