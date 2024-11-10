function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let sonIgualesTodos = true;
  if (array.length <= 1) return sonIgualesTodos
  else
    for (let index = 1; index < (array.length); index++) {
      sonIgualesTodos = array[index] === array[index -1]
      if (sonIgualesTodos) break
    }
  return sonIgualesTodos;
}

module.exports = todosIguales;
