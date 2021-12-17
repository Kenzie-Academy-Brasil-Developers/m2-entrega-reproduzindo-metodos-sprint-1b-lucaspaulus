
//CHAMA O TESTADOR DE MÉTODOS 
testMethod()

// ------------------REPRODUÇÃO DOS MÉTODOS------------------------ 

//REPRODUZ O MÉTODO FOREACH
function newForEach(array, callback){
        // conteúdo da função
        for (let i = 0; i < array.length; i++){
         callback(array[i],i,array)

        }

}

//REPRODUZ O MÉTODO MAP
function newMap(array, callback) {
    // conteúdo da função
    let arr = []

    for (let i = 0; i < array.length; i++){
      const getCallback = callback(array[i],i,array)
      arr.push(getCallback)

    }
    
    return arr
}

function newFilter(array, callback){

    let arr = []
    
    for (let i = 0; i < array.length; i++){
        const filter = callback(array[i],i,array)

        if (filter){
        arr.push(array[i])

        } 

    }

    return arr
}



  


  
 
  



