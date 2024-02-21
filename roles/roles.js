let esNuevo = false
let empleados = [
    {cedula:"1714616123",nombre:"JOHN",apellido:"CENA",sueldo:500.0},
    {cedula:"0914632123",nombre:"LUISA",apellido:"GONZALEZ",sueldo:900.0},
    {cedula:"0931657005",nombre:"JAVIER",apellido:"PETERBURGOS",sueldo:750.0}
]

let roles = []

/*let roles = [{cedula: "1234567834",nombre: "Joel Villamar",valorAPagar: 10.0,aporteEmpleado: 20.0,aporteEmpleador: 30.0},
{cedula: "1234526834",nombre: "Joell Villamar",valorAPagar: 10.0,aporteEmpleado: 20.0,aporteEmpleador: 30.0},
{cedula: "1474526834",nombre: "Joelll Villamar",valorAPagar: 10.0,aporteEmpleado: 20.0,aporteEmpleador: 30.0}
]*/

mostrarOpcionEmpleado = function(){
    mostrarComponente("divEmpleado")
    ocultarComponente("divRol")
    ocultarComponente("divResumen")
    mostrarEmpleados()
    deshabilitarDatosEmpleados()
}

mostrarOpcionRol = function(){
    mostrarComponente("divRol")
    ocultarComponente("divEmpleado")
    ocultarComponente("divResumen")
    deshabilitarComponente("btnGuardarRol")
    mostrarRoles()
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
    let cmpNombre = recuperarTexto("txtNombre")
    let cmpApellido = recuperarTexto("txtApellido")
    let cmpSueldoFloat = recuperarFloat("txtSueldo")
    let cmpSueldo = recuperarTexto("txtSueldo")
    let hayError = false
    let msgError = ""

    //VALIDACIÓN CEDULA
    if(cmpCedula.length != 10){
        hayError = true
        msgError = "*Debe tener 10 caracteres"
        mostrarTexto("lblErrorCedula",msgError)
    }else{
        for(let i=0;i<cmpCedula.length;i++){
            if (cmpCedula.charCodeAt(i) < 48 || cmpCedula.charCodeAt(i) > 57){
                hayError = true
                msgError = "*Solo se aceptan numeros"
                mostrarTexto("lblErrorCedula",msgError)
                break
            }
            else{
                mostrarTexto("lblErrorCedula","")
            }
        }
    }
    //VALIDACIÓN NOMBRE
    if(cmpNombre.length < 3){
        hayError = true
        msgError = "*Debe tener minimo 3 caracteres"
        mostrarTexto("lblErrorNombre",msgError)
    }else{
        for(let i=0;i<cmpNombre.length;i++){
            if (cmpNombre.charCodeAt(i) < 65 || cmpNombre.charCodeAt(i) > 90){
                hayError = true
                msgError = "*Solo letras mayusculas"
                mostrarTexto("lblErrorNombre",msgError)
                break
            }
            else{
                mostrarTexto("lblErrorNombre","")
            }
        }
    }

    //VALIDACION APELLIDO
    if(cmpApellido.length < 3){
        hayError = true
        msgError = "*Debe tener minimo 3 caracteres"
        mostrarTexto("lblErrorApellido",msgError)
    }else{
        for(let i=0;i<cmpApellido.length;i++){
            if (cmpApellido.charCodeAt(i) < 65 || cmpApellido.charCodeAt(i) > 90){
                hayError = true
                msgError = "*Solo letras mayusculas"
                mostrarTexto("lblErrorApellido",msgError)
                break
            }
            else{
                mostrarTexto("lblErrorApellido","")
            }
        }
    }
    //VALIDACION SUELDO
    if(cmpSueldo.length <= 0){
        hayError = true
        msgError = "*Ingrese una cantidad"
        mostrarTexto("lblErrorSueldo",msgError)
    }else{
        for(let i=0;i<cmpSueldo.length;i++){
            if (cmpSueldo.charCodeAt(i) < 48 || cmpSueldo.charCodeAt(i) > 57){
                hayError = true
                msgError = "*Solo se aceptan numeros"
                mostrarTexto("lblErrorSueldo",msgError)
                break
            }
            else{
                if(cmpSueldoFloat < 400 || cmpSueldoFloat >5000){
                    hayError = true;
                    msgError = "*Monto debe ser entre $400 y $5000"
                    mostrarTexto("lblErrorSueldo",msgError)
                }else{
                    mostrarTexto("lblErrorSueldo","")
                }
            }
        }
    }

    //AQUI INGRESAR LA CONDICION DE HAY ERROR PARA QUE REALICE EL RESTO
    if(hayError == false){
        let empleadoSeleccionado
        if(esNuevo == true){
            let empleadoAgregado
            let empleado = {
                cedula: cmpCedula,
                nombre: cmpNombre,
                apellido: cmpApellido,
                sueldo: cmpSueldoFloat
            }
            empleadoAgregado = agregarEmpleado(empleado)
            if(empleadoAgregado == true){
                mostrarEmpleados()
                alert("EMPLEADO GUARDADO CORRECTAMENTE")
                deshabilitarDatosEmpleados()
                esNuevo = false
            }
        }else{
            empleadoSeleccionado = buscarEmpleado(cmpCedula)
            empleadoSeleccionado.nombre = cmpNombre
            empleadoSeleccionado.apellido = cmpApellido
            empleadoSeleccionado.sueldo = cmpSueldoFloat
            alert("EMPLEADO MODIFICADO EXITOSAMENTE")
            mostrarEmpleados()
            deshabilitarDatosEmpleados()
        }

    }
}

deshabilitarDatosEmpleados = function(){
    mostrarTextoEnCaja("txtCedula","")
    mostrarTextoEnCaja("txtNombre","")
    mostrarTextoEnCaja("txtApellido","")
    mostrarTextoEnCaja("txtSueldo","")
    deshabilitarComponente("txtCedula")
    deshabilitarComponente("txtNombre")
    deshabilitarComponente("txtApellido")
    deshabilitarComponente("txtSueldo")
    deshabilitarComponente("btnGuardar")
}

ejecutarBusqueda = function(){
    let var1 = recuperarTexto("txtBusquedaCedula")
    let var2 = buscarEmpleado(var1)
    if (var2 != null){
        mostrarTextoEnCaja("txtCedula",var2.cedula)
        mostrarTextoEnCaja("txtNombre",var2.nombre)
        mostrarTextoEnCaja("txtApellido",var2.apellido)
        mostrarTextoEnCaja("txtSueldo",var2.sueldo)
        deshabilitarComponente("txtCedula")
        habilitarComponente("txtNombre")
        habilitarComponente("txtApellido")
        habilitarComponente("txtSueldo")
        habilitarComponente("btnGuardar")
    }else{
        alert("EMPLEADO NO EXISTE")
        deshabilitarDatosEmpleados()
    }
}

limpiar = function(){
    esNuevo = false
    deshabilitarDatosEmpleados()
    mostrarTextoEnCaja("txtBusquedaCedula","")
}

buscarPorRol = function(){
    let cedulaRol = recuperarTexto("txtBusquedaCedulaRol")
    let cedulaExiste = buscarEmpleado(cedulaRol)
    if(cedulaExiste != null){
        mostrarTexto("infoCedula",cedulaExiste.cedula)
        mostrarTexto("infoNombre",cedulaExiste.nombre+" "+cedulaExiste.apellido)
        mostrarTexto("infoSueldo",cedulaExiste.sueldo)
    }else{
        mostrarTexto("infoCedula","")
        mostrarTexto("infoNombre","")
        mostrarTexto("infoSueldo","")
        alert("EL EMPLEADO NO EXISTE")
    }   
}

calcularAporteEmpleado = function(sueldo){
    let aporte = (sueldo*9.45)/100
    return aporte;
}

calcularValorAPagar = function(sueldo,aporte,descuento){
    let valorPagar = sueldo - aporte - descuento
    return valorPagar
}

calcularRol = function(){
    let sueldo = recuperarFloatDiv("infoSueldo")
    let descuento = recuperarFloat("txtDescuentos")
    let aporteEmpleado
    let msgError = ""
    let totalPagar

    if(isNaN(descuento)){
        msgError = "*Ingrese cantidad en numeros"
        mostrarTexto("lblErrorDescuentos",msgError)
    }else{
        if(descuento < 1 || descuento > sueldo){
            msgError = "*Cantidad debe ser entre 0 y "+sueldo
            mostrarTexto("lblErrorDescuentos",msgError)
        }else{
            mostrarTexto("lblErrorDescuentos","")
            aporteEmpleado = calcularAporteEmpleado(sueldo)
            mostrarTexto("infoIESS",aporteEmpleado)
            totalPagar = calcularValorAPagar(sueldo,aporteEmpleado,descuento)
            mostrarTexto("infoPago",totalPagar)
            habilitarComponente("btnGuardarRol")
        }
    }
}

buscarRol = function(cedula){
    let rolSeleccionado
    let rol
    for(let i = 0; i < roles.length; i++){
        rolSeleccionado = roles[i]
        if(rolSeleccionado.cedula == cedula){
            return rolSeleccionado
        }
    }
    return null
}

agregarRol = function(rol){
    let cedulaRol = rol.cedula
    let retornoBuscarRol = buscarRol(cedulaRol)
    if(retornoBuscarRol == null){
        roles.push(rol)
        alert("ROL AGREGADO EXITOSAMENTE")
    }else{
        alert("EL ROL INGRESADO YA EXISTE EN NUESTRA BASE DE DATOS")
    }
}


calcularAporteEmpleador = function(sueldo){
    let aportacion = (sueldo*11.15)/100
    return aportacion
}

guardarRol = function(){
    let cmpCedula = recuperarTextoDiv("infoCedula")
    let cmpNombre = recuperarTextoDiv("infoNombre")
    let cmpSueldo = recuperarFloatDiv("infoSueldo")
    let cmpTotalAPagar = recuperarFloatDiv("infoPago")
    let cmpAporteEmpleado = recuperarFloatDiv("infoIESS")
    let cmpAporteEmpleador = calcularAporteEmpleador(cmpSueldo)
    let objetoRol = {}

    objetoRol.cedula = cmpCedula
    objetoRol.nombre = cmpNombre
    objetoRol.sueldo = cmpSueldo
    objetoRol.valorAPagar = cmpTotalAPagar
    objetoRol.aporteEmpleado = cmpAporteEmpleado
    objetoRol.aporteEmpleador = cmpAporteEmpleador

    agregarRol(objetoRol)
}

mostrarRoles = function(){
    let tabla
    let rol
    tabla = "<table><tr>"+
    "<th class='tblTitulos2'>CEDULA</th>"+
    "<th class='tblTitulos2'>NOMBRE</th>"+
    "<th class='tblTitulos2'>VALOR A PAGAR</th>"+
    "<th class='tblTitulos2'>APORTE EMPLEADO</th>"+
    "<th class='tblTitulos2'>APORTE EMPLEADOR</th>"+
    "</tr>"
    for(let i = 0; i < roles.length; i++){
        rol = roles[i]
        tabla +=  "<tr>"+
        "<td class='tblCeldas'>"+rol.cedula+"</td>"+
        "<td class='tblCeldas'>"+rol.nombre+"</td>"+
        "<td class='tblCeldas'>"+rol.valorAPagar+"</td>"+
        "<td class='tblCeldas'>"+rol.aporteEmpleado+"</td>"+
        "<td class='tblCeldas'>"+rol.aporteEmpleador+"</td>"+
        "</tr>"
    }
    tabla += "</table>"
    mostrarTabla("tablaResumen",tabla)
    mostrarTotales()
}


mostrarTotales = function(){
    let totalEmpleado = 0.0
    let totalEmpleador = 0.0
    let totalAPagar = 0.0
    let totalNomina = 0.0
    for(let i = 0; i < roles.length; i++){
        rol = roles[i]
        totalEmpleado += rol.aporteEmpleado
        totalEmpleador += rol.aporteEmpleador
        totalAPagar += rol.valorAPagar
    }
    mostrarTexto("infoTotalPago",totalAPagar)
    mostrarTexto("infoAporteEmpresa",totalEmpleador)
    mostrarTexto("infoAporteEmpleado",totalEmpleado)

    totalNomina = totalEmpleado+totalEmpleador+totalAPagar
    mostrarTexto("infoTotalNomina",totalNomina)
}
// agregarRol y agregarEmpleado - Son iguales
// buscarRol y BuscarEmpleado - Son iguales