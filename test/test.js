
validarPassword = function(){
    let password = recuperarTexto("lblPassword");
    let passlength = password.length - 1 ;
    let cumpleCondicion = false;
    let msgError = "";


    for(let i = 0; i <= passlength ; i++){

        if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
            cumpleCondicion = true;
        }

        if(cumpleCondicion == true){
            mostrarTexto("lblResultado","Si hay numero")
        }else{
            mostrarTexto("lblResultado","No hay numero")
        }
    }
}





recuperarTexto = function(idComponente){
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente)
    valorIngresado = componente.value;
    return valorIngresado;

}
mostrarTexto = function(idComponente,mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}