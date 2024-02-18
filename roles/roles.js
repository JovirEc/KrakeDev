let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0931657005",nombre:"Javier",apellido:"Peterburgos",sueldo:750.0}
]

mostrarOpcionEmpleado = function(){
    mostrarComponente("divEmpleado")
    ocultarComponente("divRol")
    ocultarComponente("divResumen")
    mostrarEmpleados()
}

mostrarOpcionRol = function(){
    mostrarComponente("divRol")
    ocultarComponente("divEmpleado")
    ocultarComponente("divResumen")
}

mostrarOpcionResumen = function(){
    mostrarComponente("divResumen")
    ocultarComponente("divEmpleado")
    ocultarComponente("divRol")
}

mostrarEmpleados = function(){
    let cmpTabla = document.getElementById("tablaEmpleados")
    let var1 = empleados.length
    let contenidoTabla = "<table>"+
    "<tr><th class='tblTitulos'>CEDULA</th>"+
    "<th class='tblTitulos'>NOMBRE</th>"+
    "<th class='tblTitulos'>APELLIDO</th>"+
    "<th class='tblTitulos'>SUELDO</th></tr>"
    for(let i = 0; i < var1; i++){
        let datos = empleados[i]
        contenidoTabla += "<tr>"+
        "<td>"+datos.cedula+"</td>"+
        "<td>"+datos.nombre+"</td>"+
        "<td>"+datos.apellido+"</td>"+
        "<td>"+datos.sueldo+"</td>"
        +"</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla
}