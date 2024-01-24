saludar = function(){
    //recuperar el valor de la caja de texto
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
}
recuperarTexto = function(idComponente){
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}