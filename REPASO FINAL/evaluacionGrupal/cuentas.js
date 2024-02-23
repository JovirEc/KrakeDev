let cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    mostrarCuentas()
    
}

mostrarCuentas=function(){
    let cmpTabla
    let cuentaSeleccionada
    cmpTabla = "<table><tr>"+
        "<th>CEDULA</th>"+
        "<th>#CUENTA</th>"+
        "<th>MOMBRE</th>"+
        "<th>SALDO</th>"+
        "</tr>"
    for(let i = 0; i < cuentas.length; i++){
        cuentaSeleccionada = cuentas[i]
        cmpTabla += "<tr>"+
            "<td>"+cuentaSeleccionada.cedula+"</td>"+
            "<td>"+cuentaSeleccionada.numeroCuenta+"</td>"+
            "<td>"+cuentaSeleccionada.nombre+" "+cuentaSeleccionada.apellido+"</td>"+
            "<td>"+0+"</td>"+
            "</tr>"
        }

    cmpTabla += "</table>"
    mostrarTabla("lblTabla",cmpTabla)
    /*
        Muestra en pantalla una tabla con la información de todas las cuentas del arreglo.
        Columnas: NUMERO CUENTA, NOMBRE, SALDO
        En la columna NOMBRE concatenar el nombre y el apellido
    */
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
    let cuentaSeleccionada;
    for(let i = 0 ; i < cuentas.length ; i++){
        cuentaSeleccionada = cuentas[i]
        if(numeroCuenta == cuentaSeleccionada.numeroCuenta){
            return cuentaSeleccionada
        }
    }
    return null
}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/


//nueva cuenta = null
//cuenta encontrada = cuenta
agregarCuenta=function(cuenta){
    let numCuenta = cuenta.numeroCuenta
    let retorno = buscarCuenta(numCuenta)

    if(retorno != null){
        alert("CUENTA EXISTENTE")
    }else{
        cuentas.push(cuenta)
        alert("CUENTA AGREGADA")
    }
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
}

agregar=function(){
    let cmpNumCuenta = recuperarTexto("lblNumCuenta")
    let cmpCedula = recuperarTexto("lblCedula")
    let cmpNombre = recuperarTexto("lblNombre")
    let cmpApellido = recuperarTexto("lblApellido")
    let cuenta = {}

    cuenta.numeroCuenta = cmpNumCuenta
    cuenta.cedula = cmpCedula
    cuenta.nombre = cmpNombre
    cuenta.apellido = cmpApellido

    agregarCuenta(cuenta)
    mostrarCuentas()
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas
}
