const arrayMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
function callback(elemento, index, array){
  return elemento +10  
}
function map(array, callback){
  let novoArrayMap = []
  for (let i = 0; i <array.length; i++){
    novoArrayMap.push(callback (array[i], i, array))
  }
  return novoArrayMap
}
map(arrayMap, callback)
function FiltrarImpar(arrayMap){
  let arrayImpar = []
  for (let i = 0; i < arrayMap.length; i++) {
    if (arrayMap[i] % 2 == 1) {
      arrayImpar.push(arrayMap[i])
    } 
  } 
    return arrayImpar
}
FiltrarImpar(arrayMap)
function callbackReduce(numero, valorAtual) {
  return numero + valorAtual
}
function reduce(array, callback, initialValue = 0) {
  let novoArrayReduce = []
  for( let i = 0; i < array.length; i++){
  novoArrayReduce.push(callbackReduce(array[i], i, array))
  }
  return novoArrayReduce
}
reduce(arrayMap,callbackReduce)





