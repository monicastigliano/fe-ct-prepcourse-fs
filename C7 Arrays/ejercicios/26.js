function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  let multiploDeN;
  for (let index = 0; index < secuencia.length; index++) {
    if (secuencia[index] % n === 0){ 
      multiploDeN = secuencia[index]
      break
    }
  }
  return multiploDeN
}

module.exports = encontrarPrimerMultiploDeN;