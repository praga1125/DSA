function count(arr) {
    let count1 = 1;
    let tallest = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] > tallest) {
        tallest = arr[i];
      } else if (arr[i] === tallest) {
        count1 += 1;
      }
    }
    return count1;
  }
  const arr = [5, 4, 5, 2];
  const result = count(arr);
  console.log(result);
