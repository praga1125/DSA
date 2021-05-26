const badVersion = (isBadVersion) => {
  return function(num) {
    let low = 1, high = num;
    while(low < high) {
      let mid = low + Math.floor((high - low) / 2);
      if(isBadVersion(mid)) {
        high = mid;
      } else {
        low = mid + 1
      }
    }
    return low;
  }
}
