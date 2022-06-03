function shortestPalindrome(s)
{
    let n = s.length;
    let ans = s[0].charCodeAt();

    for(let i = 1; i < n; i++)
    {
        ans = Math.min(ans, s[i].charCodeAt());
    }
    return String.fromCharCode(ans);
}

const str = "gagngprorp";
const res = shortestPalindrome(str);
console.log(res);