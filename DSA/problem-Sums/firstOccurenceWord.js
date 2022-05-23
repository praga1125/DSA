function findOccurence(sentence) {
  let arr = sentence.split(" ");
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == 1) {
      return arr[i];
    } else {
      obj[arr[i]] = 1;
    }
  }
}

const sentence = "praga is named as rocky so praga is called by rocky";
const res = findOccurence(sentence);
console.log(res);
