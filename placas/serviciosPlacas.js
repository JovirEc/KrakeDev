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
        return "AZUAY";
    }else if(cmpPlaca == "B"){
        return "BOLIVAR";
    }else if(cmpPlaca == "C"){
        return "CARCHI";
    }else if(cmpPlaca == "E"){
        return "ESMERALDA";
    }else if(cmpPlaca == "G"){
        return "GUAYAS";
    }else if(cmpPlaca == "H"){
        return "CHIMBORAZO";
    }else if(cmpPlaca == "I"){
        return "IMBABURA";
    }else if(cmpPlaca == "K"){
        return "SUCUMBIOS";
    }else if(cmpPlaca == "L"){
        return "LOJA";
    }else if(cmpPlaca == "M"){
        return "MANABI";
    }else if(cmpPlaca == "N"){
        return "NAPO";
    }else if(cmpPlaca == "O"){
        return "EL ORO";
    }else if(cmpPlaca == "P"){
        return "PICHINCHA";
    }else if(cmpPlaca == "Q"){
        return "ORELLANA";
    }else if(cmpPlaca == "R"){
        return "LOS RIOS";
    }else if(cmpPlaca == "S"){
        return "PASTAZA";
    }else if(cmpPlaca == "T"){
        return "TUNGURAHUA";
    }else if(cmpPlaca == "U"){
        return "CAÑAR";
    }else if(cmpPlaca == "V"){
        return "MORONA SANTIAGO";
    }else if(cmpPlaca == "W"){
        return "GALAPAGOS";
    }else if(cmpPlaca == "X"){
        return "COTOPAXI";
    }else if(cmpPlaca == "Y"){
        return "SANTA ELENA";
    }else if(cmpPlaca == "Z"){
        return "ZAMORA CHINCHIPE";
    }else{
        return null;
    }
}