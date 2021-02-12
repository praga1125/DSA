function compareTriplets(a, b) {
  const result = [0, 0];
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] > b[i]) {
      result[0] += 1;
    } else if (a[i] < b[i]) {
      result[1] += 1;
    }
  }
  return result;
}
const a = [9, 2, 3];
const b = [4, 2, 5];
console.log(compareTriplets(a, b));
