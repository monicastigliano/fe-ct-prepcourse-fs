function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

   let esAnagrama = true;
   let arrayStr1 = [];
   let arrayStr2 = [];
   if (str1.length !==  str2.length) return false;
   arrayStr1 = str1.split('').map(caracter => caracter.toLowerCase())
   arrayStr2 = str2.split('').map(caracter => caracter.toLowerCase())
   arrayStr1.forEach(element => { 
           if(!arrayStr2.includes(element)) {esAnagrama = false};
   })
   return esAnagrama;
}

module.exports = esAnagrama;
