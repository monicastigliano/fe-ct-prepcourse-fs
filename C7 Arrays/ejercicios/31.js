function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  
  let array = texto.split("");
  let arrayReverse =  array.reverse();
  let textoReverse = arrayReverse.join('');
  return textoReverse;

}

module.exports = invertirTexto;
