function factorial(n){
   let temp = 1
    if(n != 0){
    for(i=1; i <= n;i++){
        temp *= i;
    }
    }
     return temp;
}
console.log(factorial(5));