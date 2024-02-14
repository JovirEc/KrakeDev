let notas = [];

agregarElementos = function(){
    notas.push(5)
    notas.push(10)
    console.log(notas.length)
}

recorrerArreglo = function(){
    let notaR;
    for(let i = 0; i < notas.length; i++){
        notaR = notas[i]

    }
}

generarTabla = function(){
    let contenidoTabla = ""
    let cmpTabla = document.getElementById("divTabla")
    contenidoTabla += "<table><tr><td>1</td></tr>"+"<tr><td>1</td></tr></table>"
    cmpTabla.innerHTML = contenidoTabla
}

mostrarNotas = function(){
    let cmpTabla = document.getElementById("divTabla")
    let contenidoTabla = "<table><tr><th>NOTA</th></tr>"
    let miNota
    for(let i = 0; i < notas.length; i++){
        miNota = notas[i]
        contenidoTabla += "<tr><td>"
        contenidoTabla += miNota
        contenidoTabla += "</tr></td>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla
}

probarAgregar = function(){
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada)
}

agregarNota = function(nota){
    notas.push(nota);
    mostrarTextoEnCaja("txtNota","")
    document.getElementById("txtNota").focus()
    mostrarNotas()
}

calcularPromedio = function(){
    let sumaNotas = 0
    let promedio

    for(let i = 0; i < notas.length; i++){
        sumaNotas += notas[i]
    }
    promedio = sumaNotas / notas.length
    return promedio
}

ejecutarPromedio = function(){
    let resultado
    resultado = calcularPromedio()
    mostrarTexto("lblResultado",resultado)
}