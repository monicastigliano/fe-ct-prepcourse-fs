function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let nuevoArray = []
   arrayOfStrings.forEach(element => {
      if(element[0] === 'a'){
         nuevoArray.push(element)
      }
   });
   return nuevoArray;
}

module.exports = filter;
