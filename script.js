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
            break
        }

    }

    return result
}

// REPRODUZ O MÉTODO FINDINDEX
function newFindIndex(array, callback) {
    const {length} = array

    for (let i = 0; i < length; i++) {
        const value = array[i]

        if (callback(value, i, array)) {
            return i
        }

    }

    return -1
}

// REPRODUZ O MÉTODO REDUCE
function newReduce(array, callback, initValue) {
    const {length} = array

    let acumulator = initValue
    let initIndex = 0

    if (initValue === undefined) {
        acumulator = array[0]
        initIndex = 1
    }

    for (let i = initIndex; i < length; i++) {
        const value = array[i]
        acumulator = callback(acumulator, value, i, array);
    }

    return acumulator

}

// REPRODUZ O MÉTODO SOME
function newSome(array, callback) {
    const {length} = array

    for (let i = 0; i < length; i++) {
        const value = array[i]

        if (callback(value, i, array)) {
            return true
        }
    }

    return false
}

// REPRODUZ O MÉTODO EVERY
function newEvery(array, callback) {
    const {length} = array

    for (let i = 0; i < length; i++) {
        const value = array[i]

        if (! callback(value, i, array)) {
            return false
        }

    }

    return true
}

// REPRODUZ O MÉTODO FILL
function newFill(array, value, startIndex, endIndex) {
    startIndex = 0
    endIndex = array.length

    for (let i = startIndex; i <= endIndex; i++) {
        array[i] = value

    }

    return array

}

// REPRODUZ O MÉTODO INCLUDES
function newIncludes(array, returnedValue) {
    return some(array, value => value === returnedValue);
}

// REPRODUZ O MÉTODO INDEXOF
function newIndexOf(array, returnedValue) {
    return findIndex(array, value => value === returnedValue);
}

// REPRODUZ O MÉTODO CONCAT
function newConcat(array, ...values) {
    const result = [... array]
    const {length} = values

    for (let i = 0; i < length; i += 1) {
        const value = values[i]

        if (Array.isArray(value)) {
            push(result, ... value)

        } else {
            push(result, value)

        }

    }

    return result
}

// REPRODUZ O MÉTODO JOIN
function newJoin(array, joinAny) {
    return reduce(array, (result, current, i) => {
        if (i === 0) {
            return current
        }

        return `${result}${joinAny}${current}`

    }, '',)

}
