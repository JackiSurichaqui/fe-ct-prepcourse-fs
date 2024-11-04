/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  var arregloPadre = []
  for(var propiedad in objeto) {
      var arrayTemp= []
      arrayTemp.push(propiedad)
      arrayTemp.push(objeto[propiedad])

      arregloPadre.push(arrayTemp)
  }
  return arregloPadre
}
function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var stringOrd = string.split("").sort().join("")
  console.log(stringOrd)
  var objeto = {}
  var contador = 1
  for(var i=0; i<string.length; i++){
    if(stringOrd[i] === stringOrd[i+1]){
      objeto[stringOrd[i]] = contador + 1
      contador++
    }else{
      objeto[stringOrd[i]] = contador
      contador=1
    }  
  }
  return objeto
}    




function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var stringMinus = ""
  var stringMayus = ""
  for(var i = 0; i<string.length; i++){
       if(string[i].toUpperCase() === string[i]) {
             stringMayus = stringMayus + string[i]
       }else{
          stringMinus = stringMinus + string[i]
  }
}
return stringMayus + stringMinus
}
capToFront("soyHENRY")

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var fraseArray = frase.split(' ')
  console.log(fraseArray)

  var array  = fraseArray.map(function(elemento){
    return(elemento.split('').reverse().join(''))
  })
  return(array.join(' '))
}


function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  return(numero.toString().split('').reverse().join('') === numero.toString()) ? "Es capicua"
  : "No es capicua"
  
}
capicua(45354)
function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  console.log(string)
  var stringArray = string.split('')
  var arrayFiltrado = stringArray.filter(function(Letra){
         if(Letra !== "a" && Letra !== "b" && Letra !== "c"){
            return Letra
         }
  })
  return(arrayFiltrado.join(''))
}

deleteAbc("abcsssabcsssssabcsssabc")

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  var arrayOrdenado = arrayOfStrings.sort(function(elemento1, elemento2){
    return elemento1.length - elemento2.length
  })
  return arrayOrdenado
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
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
