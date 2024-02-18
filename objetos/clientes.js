let clientes = [
    {cedula: "123213",nombre:"Juan",edad:20},
    {cedula: "222222",nombre:"Mario",edad:50},
    {cedula: "333333",nombre:"Pepe",edad:22}
]

guardarCambios = function(){
    let valorCedula = recuperarTexto("txtCedula")
    let valorNombre = recuperarTexto("txtNombre")
    let valorEdad = recuperarFloat("txtEdad")

    let datosCliente = {}
    datosCliente.cedula = valorCedula
    datosCliente.nombre = valorNombre
    datosCliente.edad = valorEdad

    modificarCliente(datosCliente);
    mostrarClientes()
}

modificarCliente = function(cliente){
    let clienteEncontrado = buscarCliente(cliente.cedula)
    if(clienteEncontrado != null){
        clienteEncontrado.nombre = cliente.nombre
        clienteEncontrado.edad = cliente.edad
    }
}

ejecutarBusqueda = function(){
    let valorCedula = recuperarTexto("txtCedulaBusqueda")
    let cliente = buscarCliente(valorCedula)
    if(cliente == null){
        alert("Cliente no encontrado")
    }else{
        mostrarTextoEnCaja("txtCedula",cliente.cedula)
        mostrarTextoEnCaja("txtNombre",cliente.nombre)
        mostrarTextoEnCaja("txtEdad",cliente.edad)
    }
}

crearCliente = function(){
    let valorCedula = recuperarTexto("txtCedula")
    let valorNombre = recuperarTexto("txtNombre")
    let valorEdad = recuperarFloat("txtEdad")

    let nuevoCLiente = {}
    nuevoCLiente.cedula = valorCedula
    nuevoCLiente.nombre = valorNombre
    nuevoCLiente.edad = valorEdad

    agregarCliente(nuevoCLiente);
}

agregarCliente = function(cliente){
    let resultado;
    resultado = buscarCliente(cliente.cedula);
    if(resultado == null){
        clientes.push(cliente)
        alert("Cliente Agregado")
        mostrarClientes();
    }else{
        alert("Ya existe el cliente con la cédula: "+cliente.cedula)
    }
}

buscarCliente = function(cedula){
    let elementoCliente;
    let clienteEncontrado = null;
    for(let i=0; i < clientes.length; i++){
        elementoCliente = clientes[i]
        if(elementoCliente.cedula == cedula){
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

mostrarClientes = function(){
    let cmpTabla = document.getElementById("tablaClientes")
    let contenidoTabla = "<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th></tr>";
    let elementoCliente;
    for(let i = 0; i < clientes.length; i++){
        elementoCliente = clientes[i];
        contenidoTabla+="<tr>"
        +"<td>"+elementoCliente.cedula+"</td>"
        +"<td>"+elementoCliente.nombre+"</td>"
        +"<td>"+elementoCliente.edad+"</td>"+
        "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla
}