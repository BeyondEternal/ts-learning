let multiples:number, sum:number=0

for (let index = 1; index < 1000; index++) {
    if(index%3==0){
        sum+=index
    }
    else if(index%5==0){
        sum+=index
    }
}

console.log(sum)