ejecutarValidacion = function(){
    componente = recuperarTexto("lblPassword");
    resultado = validarPassword(componente);
    if(resultado == ""){
        mostrarTexto("lblResultado","Password Correcto")
    }else{
        mostrarTexto("lblResultado",resultado);
    }
}
 
validarPassword = function(password){//"ABC1234"
    let msjError = "";
    let passlength = password.length;
    let hayError = false;
    let cumpleCondicion = false;

    //ENTRE 8 Y 16 CARACTERES
    if(passlength < 8 || passlength > 16){
        hayError = true;
        msjError += "*Debe tener entre 8 y 16 caracteres ";   
    }
    // LETRA MAYUSCULA
    for(let i = 0; i <= passlength-1; i++){
        if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90){
            cumpleCondicion = true;
        }
        }
    if(cumpleCondicion == false){
        msjError += "*Minimo una letra mayuscula "
        hayError = true;
    }else{
        cumpleCondicion = false;
    }

    // NUMEROS
    for(let i = 0; i <= passlength-1; i++){
        if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
            cumpleCondicion = true;
        }
        }
    if(cumpleCondicion == false){
        msjError += "*Minimo un numero "
        hayError = true;
    }else{
        cumpleCondicion = false;
    }
    /*for(let i = 0; i <= password.length-1; i++){
        let caracter = password.charAt(i);
        if(caracter >= 0 && caracter <= 9){
            cumpleCondicion = true;
        }
    }
    for(let i = 0; i <= password.length-1; i++){
        let caracter = password.charAt(i);
        if(caracter.charCodeAt(i) >= 48 && caracter.charCodeAt(i) <= 57){
            cumpleCondicion = true;
        }
    }
    if(cumpleCondicion == false){
        hayError = true;
        msjError += "*Minimo un numero "
    }else{
        cumpleCondicion = false;
    }*/

    // CARACTER ESPECIAL

    for(let i = 0; i <= passlength-1; i++){
        if(password.charCodeAt(i) == 42 || password.charCodeAt(i) == 45 || password.charCodeAt(i) == 95){
            cumpleCondicion = true;
        }
        }
    if(cumpleCondicion == false){
        msjError += "*Minimo un caracter especial "
        hayError = true;
    }else{
        cumpleCondicion = false;
    }
    {/*
    for(let i = 0; i <= password.length-1; i++){
        let caracter = password.charAt(i);
        if(caracter == "*" || caracter == "-" || caracter == "_"){
            cumpleCondicion = true;
        }
    }
    for(let i = 0; i <= password.length-1; i++){
        let caracter = password.charAt(i);
        if(caracter.charCodeAt(i) == 42 || caracter.charCodeAt(i) == 45 || caracter.charCodeAt(i) == 95){
            cumpleCondicion = true;
        }
    }
    if(cumpleCondicion == false){
        hayError = true;
        msjError += "*Minimo un caracter especial "
    }else{
        cumpleCondicion = false;
    }*/
    }
    // COMPROBAR ERRORES
    if(hayError == true){
        return msjError;
    }else{
        return "";
    }
}