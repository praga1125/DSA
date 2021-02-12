function jumps(d1, v1, d2, v2){
    if(v1 > v2){
        if ((d1-v1)%(d2-v2) == 0){
            return true;
        }
    }
    return false;
}
const result = jumps(0, 3, 4, 2)
console.log(result);