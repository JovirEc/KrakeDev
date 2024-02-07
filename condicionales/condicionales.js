calcularTasaInteres = function(ingresoAnual){
    let cmpIngresoAnual = parseFloat(ingresoAnual);
    let tasaInteres;
    if(cmpIngresoAnual < 300000){
        tasaInteres = 16;
        return tasaInteres;
    }else if(cmpIngresoAnual >= 300000 && cmpIngresoAnual < 500000){
        tasaInteres = 15;
        return tasaInteres;
    }else if(cmpIngresoAnual >= 500000 && cmpIngresoAnual < 1000000){
        tasaInteres = 14;
        return tasaInteres;
    }else if(cmpIngresoAnual >= 1000000 && cmpIngresoAnual <2000000){
        tasaInteres = 13;
        return tasaInteres;
    }else{
        tasaInteres = 12;
        return tasaInteres;
    }
}

calcularCapacidadPago = function(edad,ingresos,egresos){
    let cmpEdad = parseInt(edad);
    let cmpIngresos = parseFloat(ingresos);
    let cmpEgresos = parseFloat(egresos);
    let subTotal = cmpIngresos - cmpEgresos;
    let valorCuota;

    if(cmpEdad > 0 && cmpEdad <=50){
        valorCuota = (subTotal*40)/100;
        return valorCuota;
    }else if(cmpEdad >50){
        valorCuota = (subTotal*30)/100;
        return valorCuota;
    }
}

calcularDescuento = function(precio,cantidad){
    let cmpPrecio = parseFloat(precio);
    let cmpCantidad = parseInt(cantidad);
    let subTotal = cmpPrecio * cmpCantidad;
    let descuento;
    let total;

    if(cmpCantidad > 0 && cmpCantidad < 3){
        total = subTotal;
        return total;
    }else if(cmpCantidad >= 3 && cmpCantidad <= 5){
        descuento = (subTotal*2)/100;
        total = subTotal - descuento;
        return total;
    }else if(cmpCantidad >= 6 && cmpCantidad <= 11){
        descuento = (subTotal*3)/100;
        total = subTotal - descuento;
        return total;
    }else if(cmpCantidad >= 12){
        descuento = (subTotal*4)/100;
        total = subTotal - descuento;
        return total;
    }
}

determinarColesterolLDL = function(nivelColesterol){
    let cmpNivelColesterol = parseFloat(nivelColesterol);
    let mensaje;
    if(cmpNivelColesterol < 100){
        mensaje = "Tiene un nivel de LDL Óptimo";
        return mensaje;
    }else if(cmpNivelColesterol >= 100 && cmpNivelColesterol <= 129){
        mensaje = "Tiene un nivel de LDL Casi óptimo";
        return mensaje;
    }else if(cmpNivelColesterol >= 130 && cmpNivelColesterol <= 159){
        mensaje = "Tiene un nivel de LDL Límite superior al rango normal";
        return mensaje;
    }else if(cmpNivelColesterol >= 160 && cmpNivelColesterol <= 189){
        mensaje = "Tiene un nivel de LDL Alto";
        return mensaje;
    }else{
        mensaje = "Tiene un nivel de LDL Muy alto"
        return mensaje;
    }
}

validarClave = function(clave){
    let cmpClave = clave.length;
    if(cmpClave >= 8 && cmpClave <=16){
        return true;
    }else{
        return false;
    }
}

esMayuscula = function(caracter){
    let cmpCaracter = caracter.charCodeAt(0);
    if(cmpCaracter >= 65 && cmpCaracter <= 90){
        return true;
    }else{
        return false;
    }
}

esMinuscula = function(caracter){
    let cmpCaracter = caracter.charCodeAt(0);
    if(cmpCaracter >= 97 && cmpCaracter <= 122){
        return true;
    }else if(cmpCaracter >= 160 && cmpCaracter <= 163){
        return true;
    }else if(cmpCaracter == 130){
        return true;
    }else{
        return false;
    }
}

esDigito = function(caracter){
    let cmpCaracter = caracter.charCodeAt(0);
    if(cmpCaracter >= 48 && cmpCaracter <= 57){
        return true;
    }else{
        return false;
    }
}

darPermiso = function(notaMatematica,notaFisica,notaGeometria){
    let cmpMate = parseFloat(notaMatematica);
    let cmpFisi = parseFloat(notaFisica);
    let cmpGeome = parseFloat(notaGeometria);
    if(cmpMate > 90 || cmpFisi > 90 || cmpGeome > 90){
        return true;
    }else{
        return false;
    }
}

otorgarPermiso = function(notaMatematica,notaFisica,notaGeometria){
    let cmpMate = parseFloat(notaMatematica);
    let cmpFisi = parseFloat(notaFisica);
    let cmpGeome = parseFloat(notaGeometria);
    if((cmpMate>90 || cmpFisi >90) && (cmpGeome > 80)){
        return true;
    }else{
        return false;
    }
}

dejarSalir = function(notaMatematica,notaFisica,notaGeometria){
    let cmpMate = parseFloat(notaMatematica);
    let cmpFisi = parseFloat(notaFisica);
    let cmpGeome = parseFloat(notaGeometria);
    if(cmpMate > 90 || cmpFisi > 90 || cmpGeome > 90){
        if(cmpFisi > cmpMate){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}