//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = "";
let intentos = 0;
let coincidencias = 0;
let errores = 0;


esMayuscula = function(caracter){
    let var1 = caracter.charCodeAt(0);
    if(var1 >= 65 && var1 <= 90){
        return true;
    }else{
        return false;
    }
}

guardarPalabra = function (){

    let hayError = false;
    let palabra = recuperarTexto("txtSecreta");
    let palabralength = palabra.length;
    //Validar condiciones
    if (palabralength != 5){
        hayError = true;
    }
    for (let i = 0; i <= 4; i++){
        if(palabra.charCodeAt(i) < 65 || palabra.charCodeAt(i) > 90){
            hayError = true;
        }
    }
    //Validación si hay error
    if (hayError == true){
        alert("*DEBE INGRESAR UNA PLABRA DE 5 LETRAS MAYÚSCULAS*");
    }else{
        palabraSecreta = palabra;
    }
}

mostrarLetra = function(letra,posicion){
    let divPosicion = "div"+posicion;
    mostrarTexto(divPosicion,letra);
}

validar = function(letra){
    let letrasEncontradas = false;
    for(let i = 0; i <= 4; i++){
        if(letra.charCodeAt(0) == palabraSecreta.charCodeAt(i)){
            mostrarLetra(letra,i);
            letrasEncontradas = true;
            coincidencias++;
        }
    }
    if(letrasEncontradas == false ){
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostrarImagen("ahorcadoImagen","./Ahorcado_0"+errores+".png");
        //mostrarAhorcado();
    }

}

ingresarLetra = function(){
    letra = recuperarTexto("txtLetra")
    if (letra.charCodeAt(0) >= 65 && letra.charCodeAt(0) <= 90){
        intentos++;
        validar(letra);
    }else{
        alert("SOLO SE ACEPTAN MAYÚSCULAS");
    }
    mostrarAhorcado();
    mostrarTextoEnCaja("txtLetra","")
    document.getElementById("txtLetra").focus();

}

mostrarAhorcado = function(){
    if(intentos < 15 && coincidencias >= 5){
        mostrarImagen("ahorcadoImagen","./ganador.gif");
    }else if(intentos < 15 && errores >= 9){
        mostrarImagen("ahorcadoImagen","./gameOver.gif");
    }
}