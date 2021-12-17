//ESSE TESTADOR É UM EXTRA SÓ PRA EU PODER FIXAR MELHOR O FUNCIONAMENTO DOS MÉTODOS.
function myCallback(value) {
    //console.log(`${index}:[${value}]`)
    return `${value} é muito bom!`
}

function soma(currentValue,index,array){
    
    console.log(`${index}:[${currentValue}]`)
}

function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}

function isBigEnough(value) {

    return value >= 10;
}

function  testMethod() {
    let myArr = ["maçã", "uva", "pera"]
    let myArrNumbers = [12, 5, 8, 130, 44]

    let retornoMethodForEach = myArrNumbers.forEach(logArrayElements)
    let retornoNewMethodForEach = newForEach(myArrNumbers, logArrayElements)

    let retornoMethodMap = myArr.map(myCallback)
    let retornoNewMethodMap = newMap(myArr, myCallback)
    
    let retornoMethodFilter = myArrNumbers.filter(isBigEnough)
    let retornoNewMethodFilter = newFilter(myArrNumbers, isBigEnough)

    if(retornoMethodForEach === retornoNewMethodForEach){
        console.log(retornoMethodForEach)
        console.log(retornoNewMethodForEach)
        console.log("O Método newforEach retorna o esperado")
    
    }
    if(retornoMethodMap.sort().join(",") === retornoNewMethodMap.sort().join(",")){
        console.log(retornoMethodMap)
        console.log(retornoNewMethodMap)
        console.log("O Método newMap retorna o esperado")
    }
    if(retornoMethodFilter.sort().join(",") === retornoNewMethodFilter.sort().join(",")){
        console.log(retornoMethodFilter)
        console.log(retornoNewMethodFilter)
        console.log("O Método newFilter retorna o esperado")
    }


    
}