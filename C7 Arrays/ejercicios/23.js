function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar
  // el string: "Se interrumpió la ejecución".
  // Tu código:
  let nuevoArray =[];
  let suma = num;
  for (let index = 0; index < 10; index++) {
    suma = suma +2
    if( suma === index) return "Se interrumpió la ejecución"
    
    nuevoArray[index] = suma;
  }
  return nuevoArray;

}

module.exports = breakStatement;
