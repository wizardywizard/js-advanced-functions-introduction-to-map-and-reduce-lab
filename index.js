let numbers = [1, 2, 3, -9]

const mapToNegativize = () =>{
    return numbers.map(number => (number * -1))
}

const mapToNoChange = (dune) =>{
    return dune.map(dun => (dun))
}

const mapToDouble = () =>{
    return numbers.map(number =>(number * 2))
}

const mapToSquare = () =>{
    return numbers.map(number => (number * number))
}

function reduceToTotal(sourceArray, startingPoint = 0 ){
    let num = startingPoint
   for(let i = 0; i < sourceArray.length; i++){
     num += sourceArray[i]}
     return num     
}

function reduceToAllTrue(sourceArray){
    for(let i = 0; i < sourceArray.length; i++){
        if (!sourceArray[i])
        return false
    }
    return true
}

function reduceToAnyTrue(sourceArray){
    for(let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i])
        return true
    }
    return false
}