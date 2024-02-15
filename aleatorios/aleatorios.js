numeroAleatorio = function(){
    let num;
    let numAleatorio
    num = Math.random();
    numAleatorio = (num*100)+1;
    numEntero = parseInt(numAleatorio);
    return numEntero
}

generarAleatorios = function(){
    let aleatorios = []
    let cmpAleatorio;
    let num = recuperarInt("txtNum")
    if (num >= 5 && num <= 20){
        for(let i = 0; i < num; i++){
            cmpAleatorio = numeroAleatorio();
            aleatorios.push(cmpAleatorio);
        }
        mostrarResultados(aleatorios);
    }
}

mostrarResultados = function(arregloNumeros){
    let cmpTabla;
    let contenidoTabla = "";
    let cmpNumero
    cmpTabla = document.getElementById("lblNum")
    contenidoTabla = "<table><tr><th>NUMEROS</th></tr>"

    for(let i = 0; i < arregloNumeros.length; i++){
        contenidoTabla += "<tr><td>"+arregloNumeros[i]+"</td></tr>"
    }
    contenidoTabla += "</table>"
    cmpNumero = document.getElementById("lblNum")
    cmpNumero.innerHTML = contenidoTabla;
}