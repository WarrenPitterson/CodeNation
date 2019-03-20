for(let i=0; i<100; i++){
    let devisableCount = 2;
        for(let x=0; x<=i/2; x++){
            if(i !== 1 && i !== 0 && i !== x){
                if(i%x === 0){
                   devisableCount++;
                 }
            }
        }
    if(devisableCount === 3){
        console.log(i);
    }
}