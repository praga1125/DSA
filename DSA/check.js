class check{
     check(arr){
         let idx = 0, max = arr[0], min = arr[0]
         while (max < arr[idx+1]) {
                max = arr[idx+1]
                idx++;
         }
         idx = 0
        while (min > arr[idx+1]){
            min = arr[idx+1]
            idx++;
        }
        this.maximum = max
        this.minimum = min
     }
     display(){
         return{
             minimum:this.minimum,
             maximum:this.maximum
            }
     }
}

arr = [10,2,322,4,5,99,444,0,12,11]
const obj = new check()
obj.check(arr)
ans = obj.display()
console.log(ans)