function permutation(numbers){
    let arr = [];
    numbers = numbers.sort();
    function permute(current, remaining){
        if(!remaining.length){
            arr.push(current);
            return;
        }
        for(let i = 0;i < remaining.length;i++){
            if(i > 0 && remaining[i] == remaining[i-1]){
                continue;
            }
            else{
                current.push(remaining[i]);
                permute([...current], [...remaining.slice(0, i),...remaining.slice(i+1)]);
                current.pop();
            }
        }
    }
    permute([], numbers);
    return arr;
}

let numbers = [1, 2, 3];
console.log(`The given array is : ${numbers}`);
let result = permutation(numbers);
console.log(`The permutations of given array`);
console.log(result);