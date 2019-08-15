function palindromo(palabra){
  var resultado = "La cadena \""+palabra+"\" \n";

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

  var iguales = true;
  for(i in letras) {
    if(letras[i] == letrasReves[i]) {
      // Todo bien
    }
    else {
      // Alguna letra es distinta, por lo que ya no es un palindromo
      iguales = false;
    }
  }
 
  if(iguales) {
    resultado += " es un palíndromo";
  }
  else {
    resultado += " no es un palíndromo";
  }
 
  return resultado;
}