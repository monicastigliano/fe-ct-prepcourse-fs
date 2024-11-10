function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  let array = string.split("");
  let arrayReverse  = [...array];
  arrayReverse.reverse()
  for (let i = 0; i < array.length; i++) {
    if(array[i] != arrayReverse[i]) {return false}
  }
  return true;
}

module.exports = esPalindromo;