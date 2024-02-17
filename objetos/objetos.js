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