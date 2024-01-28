jugar = function(){
    let aleatorio;
    aleatorio = lanzarDado();
    cambiarTexto("lblNumero", aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblMayorMenor","Es mayor a 3");
        cambiarTexto("lblGanastePerdiste","GANASTE");
    }else{
        cambiarTexto("lblMayorMenor","Es menor a 3");
        cambiarTexto("lblGanastePerdiste","PERDISTE");
    }
}
lanzarDado = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;

    aleatorio = Math.random(); // entre 0 y 1
    numeroMultiplicado = aleatorio*6;
    numeroEntero = parseInt(numeroMultiplicado);
    valorDado = numeroEntero + 1;
    return valorDado;
}