// ------------------REPRODUÇÃO DOS MÉTODOS------------------------

// REPRODUZ O MÉTODO FOREACH
function newForEach(array, callback) { 
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array)

    }

}

// REPRODUZ O MÉTODO MAP
function newMap(array, callback) { 
    let arr = []

    for (let i = 0; i < array.length; i++) {
        const getCallback = callback(array[i], i, array)
        arr.push(getCallback)

    }
    return arr
    
}

// REPRODUZ O MÉTODO FILTER
function newFilter(array, callback) {
    let arr = []

    for (let i = 0; i < array.length; i++) {
        const filter = callback(array[i], i, array)

        if (filter) {
            arr.push(array[i])

        }
    }

    return arr
}

// REPRODUZ O MÉTODO FIND
function newFind(array, callback) {

    let result

    for (let i = 0; i < array.length; i++) {
        let isExist = callback(array[i], i, array)

        if (isExist) {
            result = array[i]
           
        }

    }
   
    return result
}
 
// REPRODUZ O MÉTODO FINDINDEX
function newFindIndex(array, callback) {
    let result = -1
    for (let i = 0; i < array.length; i++) {
        const value = array[i]

        if (callback(value, i, array)) {
         
            return i
        }

    }
  
    return result
}

// REPRODUZ O MÉTODO REDUCE
function newReduce(array, callback, initValue) {

    let acumulator = initValue
    let initIndex = 0

    if (initValue === undefined) {
        acumulator = array[0]
        initIndex = 1
    }

    for (let i = 0; i < array.length; i++) {
        const value = array[i]
        acumulator = callback(acumulator, value, i, array);
    }

    return acumulator
    
}

// REPRODUZ O MÉTODO SOME
function newSome(array, callback) {
  
    for (let i = 0; i < array.length; i++) {
        const value = array[i]

        if (callback(value, i, array)) {
          
            return true
        }
    }
  
    return false
}

// REPRODUZ O MÉTODO EVERY
function newEvery(array, callback) {
 
    for (let i = 0; i < array.length; i++) {
        const value = array[i]

        if (!callback(value, i, array)) {
         
            return false
        }

    }
  
    return true
}

// REPRODUZ O MÉTODO FILL
function newFill(array, value, startIndex, endIndex) {
    if(startIndex === undefined){
        startIndex = 0
    }

    if(startIndex < 0){
        startIndex = array.length + startIndex
    }

    if(endIndex < 0){
        endIndex = array.length + endIndex
    }

    if(endIndex === undefined){
        endIndex = array.length
    }

    for (let i = startIndex; i < endIndex; i++) {
      
           array[i] = value
   
    }

    return array
}

// REPRODUZ O MÉTODO INCLUDES
function newIncludes(array, returnedValue, index) {
   

    for (let i = 0; i < array.length; i++) {
        const value = array[i]
        if(index === undefined){
            if(value === returnedValue){
                return  true
            }else{
                return false
            }
        }else if(index === i){
            if(value === returnedValue){
                return  true
            }else{
                return false
            }
        }

    } 
}

// REPRODUZ O MÉTODO INDEXOF
function newIndexOf(array, returnedValue) {
    return newFindIndex(array, value => value === returnedValue);
  }

// REPRODUZ O MÉTODO CONCAT
function newConcat(array, ...values) {
    
    const arrResult = [...array]
    for (let i = 0; i < values.length; i += 1) {
        arrResult.push(...values[i])
  
    }

    return arrResult
  }

  // REPRODUZ O MÉTODO JOIN
function newJoin(array, joinValue) {
  return newReduce(array, (result, current, i) => {
      if (i === 0) {
          return current
      }

      return `${result}${joinValue}${current}`

  })

}


