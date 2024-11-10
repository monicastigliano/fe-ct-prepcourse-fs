function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let arrayMultiplicadoPorDos = array.map((e) => e * 2)
  return arrayMultiplicadoPorDos;
}

module.exports = duplicarElementos;
