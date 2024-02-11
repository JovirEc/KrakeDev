validarEstructura = function(placa){
    let cmpPlaca = placa.length;
    let hayError = false;
    let msgError = "";
    //Cantidad de Numeros
    if(cmpPlaca < 7 || cmpPlaca > 8){
        msgError = msgError + " que la placa tenga entre 7 u 8 caracteres,";
        hayError = true;
    }
    //LETRAS
    if(placa.charCodeAt(0) < 65 || placa.charCodeAt(0) > 90 || isNaN(placa.charCodeAt(0))){
        msgError = msgError + " que el primer caracter sea letra mayuscula,";
        hayError = true;
    }
    if(placa.charCodeAt(1) < 65 || placa.charCodeAt(1) > 90 || isNaN(placa.charCodeAt(1))){
        msgError = msgError + " que el segundo caracter sea letra mayuscula,";
        hayError = true;
    }
    if(placa.charCodeAt(2) < 65 || placa.charCodeAt(2) > 90 || isNaN(placa.charCodeAt(2))){
        msgError = msgError + " que el tercer caracter sea letra mayuscula,";
        hayError = true;
    }
    //GUIÓN
    if(placa.charCodeAt(3) != 45 || isNaN(placa.charCodeAt(3))){
        msgError = msgError + " que el cuarto caracter sea un guion,";
        hayError = true;
    }
    //NÚMEROS
    if(placa.charCodeAt(4) < 48 || placa.charCodeAt(4) > 57 || isNaN(placa.charCodeAt(4))){
        msgError = msgError + " que el quinto caracter sea un numero,";
        hayError = true;
    }
    if(placa.charCodeAt(5) < 48 || placa.charCodeAt(5) > 57 || isNaN(placa.charCodeAt(5))){
        msgError = msgError + " que el sexto caracter sea un numero,";
        hayError = true;
    }
    if(placa.charCodeAt(6) < 48 || placa.charCodeAt(6) > 57 || isNaN(placa.charCodeAt(6))){
        msgError = msgError + " que el septimo caracter sea un numero,";
        hayError = true;
    }
    if(cmpPlaca == 8){
        if(placa.charCodeAt(7) < 48 || placa.charCodeAt(7) > 57 || isNaN(placa.charCodeAt(7))){
            msgError = msgError + " que el octavo caracter sea un numero,";
            hayError = true;
        }
    }
    if(hayError == true){
        return "Corrija"+msgError;
    }else{
        return null;
    }
}
obtenerProvincia = function(placa){
    let cmpPlaca = placa.charAt(0);
    if (cmpPlaca == "A"){
        return "Azuay";
    }else if(cmpPlaca == "B"){
        return "Bolivar";
    }else if(cmpPlaca == "C"){
        return "Carchi";
    }else if(cmpPlaca == "E"){
        return "Esmeralda";
    }else if(cmpPlaca == "G"){
        return "Guayas";
    }else if(cmpPlaca == "H"){
        return "Chimborazo";
    }else if(cmpPlaca == "I"){
        return "Imbabura";
    }else if(cmpPlaca == "K"){
        return "Sucumbios";
    }else if(cmpPlaca == "L"){
        return "Loja";
    }else if(cmpPlaca == "M"){
        return "Manabi";
    }else if(cmpPlaca == "N"){
        return "Napo";
    }else if(cmpPlaca == "O"){
        return "El Oro";
    }else if(cmpPlaca == "P"){
        return "Pichincha";
    }else if(cmpPlaca == "Q"){
        return "Orellana";
    }else if(cmpPlaca == "R"){
        return "Los Rios";
    }else if(cmpPlaca == "S"){
        return "Pastaza";
    }else if(cmpPlaca == "T"){
        return "Tunguragua";
    }else if(cmpPlaca == "U"){
        return "Cañar";
    }else if(cmpPlaca == "V"){
        return "Morona Santiago";
    }else if(cmpPlaca == "W"){
        return "Galapagos";
    }else if(cmpPlaca == "X"){
        return "Cotopaxi";
    }else if(cmpPlaca == "Y"){
        return "Santa Elena";
    }else if(cmpPlaca == "Z"){
        return "Zamora Chinchipe";
    }else{
        return null;
    }
}