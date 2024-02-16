validarEstructura = function(placa){
    let errores = false
    let longitud;
    let letra;
   
    let segundaLetra = placa.charCodeAt(1)
    let terceraLetra = placa.charCodeAt(2)
    let cuartaLetra = placa.charCodeAt(3)
    let quintaLetra = placa.charCodeAt(4)
    let sextaLetra = placa.charCodeAt(5)
    let septimaLetra = placa.charCodeAt(6)
    let octavaLetra = placa.charCodeAt(7)
    
      longitud = placa.length
      let primeraLetra = placa.charCodeAt(0)
      
      if (longitud < 7 && longitud > 8){
          errores = true
          return"DEBE CONTENER 7 U 8 CARACTERES"
      }
  
      if(primeraLetra <65 || primeraLetra  >90 ){
          return"NO ES UNA LETRA MAYUSCULA"
          errores =true
      }
      if(segundaLetra <65 || segundaLetra >90){
          errores =true
          return "NO ES UNA LETRA MAYUSCULA"
          
      }
      if(terceraLetra <65 || terceraLetra >90){
          errores =true
          return"NO ES UNA LETRA MAYUSCULA"
          
      }
      if(cuartaLetra  < 44 || cuartaLetra > 45 ){
          errores =true
          return"NO ES UN GUION"
         
      }
      if(quintaLetra  < 48 || quintaLetra > 57 ){
          errores =true
          return"NO ES UN NUMERO"
          
      }
      if(sextaLetra  < 48 || sextaLetra > 57 ){
          errores =true
          return"NO ES UN NUMERO"
          
      }
      if(septimaLetra  < 48 || septimaLetra > 57 ){
          errores =true
          return"NO ES UN NUMERO"
          
      }
      if(octavaLetra  < 48 || octavaLetra > 57 ){
          errores =true
          return"NO ES UN NUMERO"
          
      }
      
  
      if(errores==false){
          alert("no hay errores")
      }
      else {
          return null
      }
  
      return !errores
  
  
  }