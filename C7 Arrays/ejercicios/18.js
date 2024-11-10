function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let promedio;
  promedio = resultadosTest.reduce((acc, vActual) => acc + vActual) / (resultadosTest.length)
  return promedio;
}

module.exports = promedioResultadosTest;
