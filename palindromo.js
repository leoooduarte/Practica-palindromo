function palindromo(palabra){
  

  var palabraReal = palabra.toLowerCase();

  var palabraSeparada = palabraReal.split("");

  var palabraSinEspacios = "";
  
  for(i in palabraSeparada) {
    if(palabraSeparada[i] != " ") {
      palabraSinEspacios += palabraSeparada[i];
    }
  }
  var letras = palabraSinEspacios.split("");
  var letrasReves = palabraSinEspacios.split("").reverse();

  
  for(i in letras) {
    if(letras[i] != letrasReves[i]) {
      // Todo bien
      return false;
    }
  }return true;
 
  
 
 
}