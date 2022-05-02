function isVowel(ch) {
  return (
    ch == "a" ||
    ch == "A" ||
    ch == "e" ||
    ch == "E" ||
    ch == "i" ||
    ch == "I" ||
    ch == "o" ||
    ch == "O" ||
    ch == "u" ||
    ch == "U"
  );
}

function reverseVowel(str) {
  let i = 0;
  let j = str.length - 1;
  let str1 = str.split("");
  while (i < j) {
    if (!isVowel(str1[i])) {
      i++;
      continue;
    }
    if (!isVowel(str1[j])) {
      j--;
      continue;
    }

    let temp = str1[i];
    str1[i] = str1[j];
    str1[j] = temp;

    i++;
    j--;
  }
  let str2 = str1.join("");
  return str2;
}

let str = "pragadeesh";
console.log(reverseVowel(str));

