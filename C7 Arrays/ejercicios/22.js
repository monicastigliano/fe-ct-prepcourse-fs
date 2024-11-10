function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let tablaDelSeis = [];
  for (let index = 0; index <= 10; index++) {
    tablaDelSeis[index] = index * 6
    
  }
  return tablaDelSeis;
}

module.exports = tablaDelSeis;
