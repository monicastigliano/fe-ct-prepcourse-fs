function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  let producto = 1;
  let array;
  if (arguments.length === 0) return 0
  else 
  array = Array.from(arguments)
  producto = array.reduce((acc, vActual) => acc * vActual)
  return producto
}

module.exports = multiplicarArgumentos;
