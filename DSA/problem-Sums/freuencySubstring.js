function computeLPSArray(pattern, M, lps) {
  let len = 0;
  let i = 1;
  lps[0] = 0;

  while (i < M) {
    if (pattern[i] == pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len != 0) {
        len = lps[len - 1];
      } else {
        lps[i] = len;
        i++;
      }
    }
  }
}

function KMPSearch(pattern, txt) {
  let M = pattern.length;
  let N = txt.length;
  let lps = new Array(M);
  lps.fill(0);
  let j = 0;

  computeLPSArray(pattern, M, lps);

  let i = 0;
  let res = 0;
  let next_i = 0;

  while (i < N) {
    if (pattern[j] == txt[i]) {
      j++;
      i++;
    }
    if (j == M) {
      j = lps[j - 1];
      res++;
      if (lps[j] != 0) i = ++next_i;
      j = 0;
    } else if (i < N && pattern[j] != txt[i]) {
      if (j != 0) j = lps[j - 1];
      else i = i + 1;
    }
  }
  return res;
}

let txt = "the txt is repeated txt";
let target = "txt";
let ans = KMPSearch(target, txt);

console.log(ans);
