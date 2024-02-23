let personas = [
    {nombre: "Marcos", edad: 18},
    {nombre: "Roberto", edad: 15},
    {nombre: "Kate", edad: 25},
    {nombre: "Diana", edad: 12},
    {nombre: "Benja", edad: 5},
]

agregarPersona = function(){
    let cmpNombre = recuperarTexto("cajaNombre")
    let cmpEdad = recuperarInt("cajaEdad")
    let hayError = false
    let msgError = ""
//NOMBRE
    if(cmpNombre.length < 3){
        hayError = true
        msgError = "Ingrese al menos 3 caracteres"
        mostrarTexto("lblErrorNombre",msgError)
    }else{
        mostrarTexto("lblErrorNombre","")
    }
//EDAD
    if(cmpEdad.toString().length < 0 || isNaN(cmpEdad)){
        hayError = true
        msgError = "Ingrese una cantidad"
        mostrarTexto("lblErrorEdad",msgError)
    }else{
        if(cmpEdad < 0 || cmpEdad > 100){
            hayError = true
            msgError = "Cantidad debe ser entre 0 y 100"
            mostrarTexto("lblErrorEdad",msgError)
        }else{
            mostrarTexto("lblErrorEdad","")
        }
    }
    if(hayError == false){
        let nuevaPersona = {}
        nuevaPersona.nombre = cmpNombre
        nuevaPersona.edad = cmpEdad
        personas.push(nuevaPersona)
        alert("PERSONA AGREGADA CORRECTAMENTE")
        mostrarTablaFn()
    }
}

mostrarTablaFn = function(){
    let tabla = ""
    let persona
    tabla = "<table><tr>"+
    "<th>EDAD</th>"+
    "<th>NOMBRE</th>"+
    "</tr>"
    for(let i = 0; i < personas.length; i++){
        persona = personas[i]
        tabla += "<tr>"+
            "<td>"+persona.nombre+"</td>"+
            "<td>"+persona.edad+"</td>"+
            "</tr>"
        }
    tabla += "</table>"
    let tablita = document.getElementById("lblTabla")
    tablita.innerHTML = tabla
}

encontrarMayor = function(){
    let personaMayor = personas[0];
    let personaComparada
    for(let i = 1; i < personas.length; i++){
        personaComparada = personas[i]
        if(personaMayor.edad < personaComparada.edad){
            personaMayor = personaComparada
        }
    }
    return personaMayor
}

determinarMayor = function(){
    let mayor = encontrarMayor()
    let nombre = mayor.nombre
    let edad = mayor.edad
    let texto = nombre+" es la persona mayor con "+edad+" años."
    mostrarTexto("lblMayor",texto)
}

encontrarMenor = function(){
    let personaMenor = personas[0];
    let personaComparada
    for(let i = 1; i < personas.length; i++){
        personaComparada = personas[i]
        if(personaMenor.edad > personaComparada.edad){
            personaMenor = personaComparada
        }
    }
    return personaMenor
}

determinarMenor = function(){
    let menor = encontrarMenor()
    let nombre = menor.nombre
    let edad = menor.edad
    let texto = nombre+" es la persona mayor con "+edad+" años."
    mostrarTexto("lblMenor",texto)
}