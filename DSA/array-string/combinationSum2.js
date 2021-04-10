function combinationSum2(candidates, target) {
    candidates.sort();
    let result = [];
    let dfs = function(id, n, comb) {
        if (n == 0) {
            result.push(comb);
            return;
        }
    for (let i=id;i<candidates.length;i++) {
        if (candidates[i] <= n) {
            dfs(i+1, n - candidates[i], [...comb, candidates[i]]);
        }
        while(candidates[i+1]==candidates[i]){
            i++;
        }
    }
        return result;
    }
    dfs(0, target, []);
    return result;
}

let arr = [9, 16, 2, 18, 9, 8, 10];
let target = 18;
let result = combinationSum2(arr, target);
console.log(`The sum of combinations in a array :`);
console.log(result);