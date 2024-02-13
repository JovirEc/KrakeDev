//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;


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
        console.log(palabraSecreta);
    }
}

mostrarLetra = function(letra,posicion){
    let divPosicion = "div"+posicion;
    mostrarTexto(divPosicion,letra);
}

