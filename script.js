const arrayMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const callback = ((element) => {
   return element + 4 
})
function methodMap(array, callback) {
    const newMap = []
    for (let i = 0; i < array.length; i++) {
        newMap.push(callback (array[i], i, array))
    }
    return newMap
}
methodMap(arrayMap, callback)
function methodFilter(arrayMap) {
    const filterNumber = []
    for (let i = 0; i < arrayMap.length; i++) {
        if (arrayMap[i] === 6 ) {
            filterNumber.push(arrayMap[i])
        }
    }
    return filterNumber
}
methodFilter(arrayMap)
const callbackReduce = ((elementInicial, elementValue) => {
    return elementInicial + elementValue
})
function methodReduce(array, callback, initialValue = 0) {
    for (let i = 0; i < arrayMap.length; i++) {
        initialValue = callback(initialValue, array[i])
    }
    return initialValue
}
methodReduce(arrayMap, callbackReduce)
function methodFind(arrayMap) {
    const findNumber = []
    for( let i = 0; i < arrayMap.length; i++) {
        if (arrayMap[i] > 8) {
            return arrayMap[i]
        }
    } 
    return findNumber
}
methodFind(arrayMap)
function methodIncludes(arrayMap) {
    for (let i = 0; i < arrayMap.length; i++) {
        if (arrayMap[i] === 10){
            return true
        }
        else {
            return false
        }
    }
}
methodIncludes(arrayMap)
function callbackIndex() {
    const callbackIndexOf = "Oi, sou um jovem aprendiz nesse mundo da programação!"
    return callbackIndexOf
}
callbackIndex()
function methodIndexOf(callbackIndexOf) {
    const resultIndexOf = ""
    for (let i = 0; i < callbackIndexOf; i++){
        if (callbackIndexOf[i] === "j") {
            return resultIndexOf.push(callbackIndex(callbackIndexOf[i]))
        }
    }
    return resultIndexOf
}
methodIndexOf()

