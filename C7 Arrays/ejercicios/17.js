function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let suma = 0;
  suma  = arrayOfNums.reduce((acc, vActual) => acc + vActual)
  return suma
}

module.exports = agregarNumeros;
