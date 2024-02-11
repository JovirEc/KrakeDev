validarPlaca = function(){
    let placa = recuperarTexto("lblPlaca");
    let hayError = validarEstructura(placa);
    let cmpProvincia;
    let cmpTipoVehiculo;
    let cmpPicoYPlaca;

    if(hayError == null){
        mostrarImagen("lblImgPlaca","./img/placaValida.png");
        mostrarTexto("lblErrores","");
        cmpProvincia = obtenerProvincia(placa);
        if(cmpProvincia != null){
            mostrarTexto("lblProvincia",cmpProvincia);
        }else{
            mostrarTexto("lblProvincia","*Provincia incorrecta*")
        }
        cmpTipoVehiculo = obtenerTipoVehiculo(placa);
        if(cmpTipoVehiculo != null){
            mostrarTexto("lblTipoVehiculo",cmpTipoVehiculo);
        }else{
            mostrarTexto("lblTipoVehiculo","*Tipo de vehiculo incorrecto*")
        }
        cmpPicoYPlaca = obtenerDiaPicoYPlaca(placa);
        if(cmpPicoYPlaca != null){
            mostrarTexto("lblPicoYPlaca",cmpPicoYPlaca);
        }else{
            mostrarTexto("lblPicoYPlaca","*Numero incorrecto*")
        }
    }else{
        mostrarImagen("lblImgPlaca","./img/placaInvalida.png");
        mostrarTexto("lblErrores",hayError);
        cmpProvincia = obtenerProvincia(placa);
        if(cmpProvincia != null){
            mostrarTexto("lblProvincia",cmpProvincia);
        }else{
            mostrarTexto("lblProvincia","*Provincia incorrecta*")
        }
        cmpTipoVehiculo = obtenerTipoVehiculo(placa);
        if(cmpTipoVehiculo != null){
            mostrarTexto("lblTipoVehiculo",cmpTipoVehiculo);
        }else{
            mostrarTexto("lblTipoVehiculo","*Tipo de vehiculo incorrecto*")
        }
        cmpPicoYPlaca = obtenerDiaPicoYPlaca(placa);
        if(cmpPicoYPlaca != null){
            mostrarTexto("lblPicoYPlaca",cmpPicoYPlaca);
        }else{
            mostrarTexto("lblPicoYPlaca","*Numero incorrecto*")
        }    
    }
}
limpiar = function(){
    mostrarTextoEnCaja("lblPlaca","");
    mostrarImagen("lblImgPlaca","./img/placaUndefined.png");
    mostrarTexto("lblErrores","");
    mostrarTexto("lblProvincia","N/A");
    mostrarTexto("lblTipoVehiculo","N/A");
    mostrarTexto("lblPicoYPlaca","N/A");
}