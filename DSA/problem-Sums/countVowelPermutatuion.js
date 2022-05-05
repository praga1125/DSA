function countVowelPermutation(n) {
    const obj = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1} , mod = 10 ** 9 + 7;
    while(--n > 0) {
        const {a, e, i, o, u} = obj;
        obj['a'] = (e + i + u) % mod;
        obj['e'] = (a + i) % mod;
        obj['i'] = (e + o) % mod;
        obj['o'] = i;
        obj['u'] = (o + i) % mod;
    }
    let count = 0;
    for(const v in obj) {
        count += obj[v];
    }
    return count % mod;
}

const num = 2;
let res = countVowelPermutation(num);
console.log(res);