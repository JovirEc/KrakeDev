validarPlaca = function(){
    let placa = recuperarTexto("lblPlaca");
    let hayError = validarEstructura(placa);
    let cmpProvincia;
    if(hayError == null){
        mostrarImagen("lblImgPlaca","./img/placaValida.png");
        mostrarTexto("lblErrores","");
        cmpProvincia = obtenerProvincia(placa);
        if(cmpProvincia != null){
            mostrarTexto("lblProvincia",cmpProvincia);
        }else{
            mostrarTexto("lblProvincia","*PROVINCIA INCORRECTA*")
        }
    }else{
        mostrarImagen("lblImgPlaca","./img/placaInvalida.png");
        mostrarTexto("lblErrores",hayError);
    }
}