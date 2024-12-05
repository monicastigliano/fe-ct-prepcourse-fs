function verificarPropiedad(objeto, propiedad) {
   // Verifica si el objeto posee la propiedad recibida.
   // Retorna true si la tiene, sino retorna false.
   // PISTA: puedes usar el método hasOwnProperty().
   // Tu código:
   const existe = Object.hasOwnProperty(propiedad);
   return existe;
}

module.exports = verificarPropiedad;
