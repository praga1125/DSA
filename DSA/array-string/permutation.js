let permutation = function(values){
    let result = [];
    dfs(values, [], Array(values.length).fill(false),result)
    return result;
}
let dfs = function(values, path, used,result){
    if(path.length == values.length){
        result.push(Array.from(path));
        return;
    }
    for(let i=0;i< values.length;i++){
        if(used[i]){
            continue;
        }
        path.push(values[i]);
        used[i] = true;
        dfs(values, path, used, result);
        path.pop();
        used[i] = false;
    }
}

let arr = ['a', 'b', 'c'];
let result = permutation(arr);
console.log(`The permutation of values : ${arr}`);
console.log(result);