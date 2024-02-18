let esNuevo = false
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
    deshabilitarComponente("txtCedula")
    deshabilitarComponente("txtNombre")
    deshabilitarComponente("txtApellido")
    deshabilitarComponente("txtSueldo")
    deshabilitarComponente("btnGuardar")
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
    let numEmpleados = empleados.length
    let contenidoTabla = "<table>"+
    "<tr><th class='tblTitulos'>CEDULA</th>"+
    "<th class='tblTitulos'>NOMBRE</th>"+
    "<th class='tblTitulos'>APELLIDO</th>"+
    "<th class='tblTitulos'>SUELDO</th></tr>"
    for(let i = 0; i < numEmpleados; i++){
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

ejecutarNuevo = function(){
    esNuevo = true
    habilitarComponente("txtCedula")
    habilitarComponente("txtNombre")
    habilitarComponente("txtApellido")
    habilitarComponente("txtSueldo")
    habilitarComponente("btnGuardar")
}

buscarEmpleado = function(cedula){//1714616123
    let encontrado = false
    let personaSeleccionada = {}
    for(let i=0; i<empleados.length; i++){
        personaSeleccionada = empleados[i]
        if(cedula == personaSeleccionada.cedula){
            encontrado = true
            break
        }
    }
    if(encontrado == true){
        return personaSeleccionada
    }else{
        return null
    }
}

agregarEmpleado = function(empleado){
    let cedulaEmpleado = empleado.cedula
    let empleadoEncontrado = buscarEmpleado(cedulaEmpleado)
    if (empleadoEncontrado == null){
        empleados.push(empleado)
        return true
    }else{
        return false
    }
}

guardar = function(){ // Para Crear y Modificar empleado
    let cmpCedula = recuperarTexto("txtCedula")
    /*let cmpNombre = recuperarTexto("txtNombre")
    let cmpApellido = recuperarTexto("txtApellido")
    let cmpSueldo = recuperarFloat("txtSueldo")*/
    let errorGeneral = false
    let errorInterno = false
    let msgError = ""
    //VALIDACIÓN CEDULA
    for(let i=0;i<cmpCedula.length;i++){
        msgError = ""
        if (cmpCedula.charCodeAt(i) < 48 || cmpCedula.charCodeAt(i) > 57){
            errorInterno = true
            msgError = "*Solo números "
        }
    }
    if(cmpCedula.length != 10){
        errorInterno = true
        msgError += "*10 caracteres"
    }
    if(errorInterno == true){
        mostrarTexto("lblErrorCedula",msgError)
        errorGeneral = true
        errorInterno = false
    }
    //VALIDACIÓN NOMBRE
}

/*habilitarComponente("txtCedula")  lblErrorCedula
habilitarComponente("txtNombre")    lblErrorNombre
habilitarComponente("txtApellido")  lblErrorApellido
habilitarComponente("txtSueldo")    lblErrorSueldo
habilitarComponente("btnGuardar")


*/