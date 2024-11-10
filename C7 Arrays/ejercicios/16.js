function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let nuevoArray = []
  nuevoArray = array.map((e, i) =>  e * i) 
  return nuevoArray
}

module.exports = multiplicarElementosPorIndice;
