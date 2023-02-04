function largest(input:number):number{
    let i:number=2
    while(i<=input){
        if(input%i==0){
            input/=i
        }
        else{
            i++
        }
    }
    return i
}
console.log(largest(600851475143));
