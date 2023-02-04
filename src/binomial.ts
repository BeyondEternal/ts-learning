function binomial(x:number, y: number, a:number, k:number ):number {
    let sumatoria = combinatoria(a,k)*Math.pow(y,k)*Math.pow(x,a-k)
    return sumatoria   
}

function combinatoria(a:number, k:number):number {
    let combinatoria=factorial(a)/(factorial(k)*factorial(a-k))
    return combinatoria
}

function factorial(a:number): number{
    let factorial=1
    for(let index = 1; index < a; index++){
        factorial*=index
    }
    return factorial
}


/**
 * @param a equals to exponent function
 * @param k equals to position of equation
 *  */ 

