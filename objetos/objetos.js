probarAtributos = function(){
    let persona = {
        nombre : "Joel",
        apellido: "Villamar",
        edad: 24,
        estaVivo: true
    }
    console.log(persona.nombre)
    console.log(persona.edad)
    if(persona.estaVivo==true){
        console.log("Esta vivo")
    }else{
        console.log("No está vivo")
    }
}
crearProducto = function(){
    let producto1 = {
        nombre: "Cebolla",
        precio: 2.5,
        stock: 10
    }
    let producto2 = {
        nombre: "Tomate",
        precio: 3.1,
        stock: 10
    }

    if(producto1.stock != producto2.stock){
        if(producto1.stock > producto2.stock){
            console.log("Producto 1 tiene mayor stock")
        }else{
            console.log("Producto 2 tiene mayor stock")
        }
    }else{
        console.log("Ambos productos tienen el mismo stock")
    }
}

modificarAtributos = function(){
    let cuenta = {
        numero: "5323423423",
        saldo : 0.0
    }
    cuenta.saldo =  100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}

crearCliente = function(){
    let cliente = {
        cedula: "171231",
        nombre: "Juan"
    }
    let cliente1 = {}
    cliente.nombre = "Romeo"
    cliente1.apellido = "Santos"
    cliente1.cedula = "123123"
}

probarIncrementoSaldo = function(){
    let cta = {
        numero: "23424",
        saldo: 34.0
    }
    incrementarSaldo(cta,100)
    console.log(cta.saldo)
}

probarDeterminarMayor = function(){
    let per1 = {
        nombre: "Joel",
        edad: 45
    }
    let per2 = {
        nombre: "Juan",
        edad: 48
    }
    let mayor;
    mayor = determinarMayor(per1,per2)

    if(mayor != null){
        console.log("El mayor es: "+mayor.nombre);
    }else{
        console.log("Ambos tienen la misma edad")
    }
}

incrementarSaldo = function(cuenta,monto){
    cuenta.saldo += monto;
}

determinarMayor = function(persona1,persona2){
    if(persona1.edad > persona2.edad){
        return persona1
    }else if(persona1.edad < persona2.edad){
        return persona2
    }else{
        return null
    }
}