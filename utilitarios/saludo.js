saludar = function(){
    //recuperar el valor de la caja de texto
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    let mensajeBienvenida = "Bienvenido "+nombre+" "+apellido;
    mostrarTexto("lblResultado",mensajeBienvenida)
    mostrarImagen("imgSaludo","./imagenes/saludar.gif")
    mostrarTextoEnCaja("txtNombre","")
}