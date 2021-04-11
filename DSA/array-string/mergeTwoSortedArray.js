let arr1 = [1, 5, 7, 9, 12];
let arr2 = [2, 3, 4, 6, 14, 15];
console.log(`before merging array :`);
console.log(arr1);
console.log(arr2);

function merge(arr1, arr2){
    let len1 = arr1.length; 
    let len2 = arr2.length;
    for(let i=len2-1;i>=0;i--){
        let j, last = arr1[len1-1];
        for(j=len1-2;j>=0 && arr1[j] > arr2[i]; j--){
            arr1[j+1] = arr1[j];
        }
        if(j != len1-2 || last > arr2[i]){
            arr1[j+1] = arr2[i];
            arr2[i] = last;
        }
    }
    console.log(`After merging array :`);
    console.log(arr1);
    console.log(arr2);
}
merge(arr1, arr2);
