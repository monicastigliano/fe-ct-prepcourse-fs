/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let array = [];
  for (const key in objeto) {
       let arrayPropiedad = []
       arrayPropiedad.push(key)
       arrayPropiedad.push(objeto[key])  
       array.push(arrayPropiedad)
  }
  
  return array
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let arrayString = string.split('').sort()
  let objString = {}
  objString[arrayString[0]] = 0
  arrayString.forEach(element => {
    if(objString.hasOwnProperty(element)){
      objString[element] ++
    } else {
      objString[element] = 1
    }
  });
  
  return objString;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let arrayString = string.split('')
  let arrayMayusculas = []
  let arrayMinusculas = []
  arrayString.forEach(element => {
    if (element === element.toUpperCase() ) {
      arrayMayusculas.push(element)
    } else{
      arrayMinusculas.push(element)
    }
  });
  
  return  (arrayMayusculas.concat(arrayMinusculas).join(''))

}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let arrayString = frase.split(' ')
  let arrayReverso = []
  let stringAux;
  arrayString.forEach(element => {
    stringAux = element.split('').reverse().join('')
    arrayReverso.push(element.split('').reverse().join(''))
  });
  return (arrayReverso.join(' '))
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let arrayString = numero.toString().split('')
  let arrayStringOrig = [...arrayString]
  arrayStrReverso = arrayStringOrig.reverse()
  let resultado = "Es capicua";
  for (let i = 0; i < arrayString.length; i++) {
    if (arrayString[i] !== arrayStrReverso[i]) {
      resultado = "No es capicua";
      break
    } 
  }
  return resultado
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let stringArray = string.split('')
  let nuevoArray = []
  stringArray.forEach(element => {
    if(element !== 'a' && element !== 'b' && element !== 'c')
      nuevoArray.push(element)   
  });
  return nuevoArray.join('')
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  let nuevoArray = arrayOfStrings.sort(function compare(a, b) {
    if (a.length < b.length) {
      return -1;
    }
    if (a.length > b.length) {
      return 1;
    }
    return 0;
  })
  return nuevoArray
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let nuevoArray = []
  if(array1.length > array2.length)
    for (let i = 0; i < array1.length; i++) {

      if(array2.includes(array1[i])){
        nuevoArray.push(array1[i])
      }
    }
    else{
      for (let i = 0; i < array2.length; i++) {

          if(array1.includes(array2[i])){
            nuevoArray.push(array2[i])
          }
        }
    }
    return nuevoArray;
}
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
