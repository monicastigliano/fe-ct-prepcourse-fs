function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  let sumaLikes = 0;
  let array = [...objetoUsuario.posts]
  for (let i = 0; i < array.length; i++) {
        sumaLikes = sumaLikes + array[i].likes;
  }
  return sumaLikes;
}

module.exports = sumarLikesDeUsuario;
