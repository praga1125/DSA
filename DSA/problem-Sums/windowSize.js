let arr = [10, 20, 30, 50, 10, 70, 30];

function printMaxOfMin(n) {
  let s = [];
  let left = new Array(n + 1);
  left.fill(0);
  let right = new Array(n + 1);
  right.fill(0);

  for (let i = 0; i < n; i++) {
    left[i] = -1;
    right[i] = n;
  }

  for (let i = 0; i < n; i++) {
    while (s.length > 0 && arr[s[s.length - 1]] >= arr[i]) {
      s.pop();
    }
    if (s.length > 0) {
      left[i] = s[s.length - 1];
    }
    s.push(i);
  }

  while (s.length > 0) {
    s.pop();
  }

  for (let i = n - 1; i >= 0; i--) {
    while (s.length > 0 && arr[s[s.length - 1]] >= arr[i]) {
      s.pop();
    }

    if (s.length > 0) {
      right[i] = s[s.length - 1];
    }

    s.push(i);
  }
  let ans = new Array(n + 1);
  ans.fill(0);

  for (let i = 0; i <= n; i++) {
    ans[i] = 0;
  }

  for (let i = 0; i < n; i++) {
    let len = right[i] - left[i] - 1;
    ans[len] = Math.max(ans[len], arr[i]);
  }
  
  for (let i = n-1; i >= 1; i--) {
    ans[i] = Math.max(ans[i], ans[i + 1]);
  }
  console.log(`The maximum of minimum window size : ${ans}`);
}

printMaxOfMin(arr.length);
