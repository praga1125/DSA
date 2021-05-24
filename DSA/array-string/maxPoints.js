const maxPoints = (points) => {
  if(points.length < 3) {
    return points.length;
  }
  let maxLine = 0;
  for(let i = 0; i < points.length; ++i) {
    const slopes = {};
    for(let j = i+1; j < points.length; j++) {
      const currentSlope = slope(points[i], points[j]);
      slopes[currentSlope] = slopes[currentSlope] + 1 || 2;
      maxLine = Math.max(maxLine, slopes[currentSlope]);
    }
  }
  return maxLine;
}

const gcd = (a, b) => {
  return b == 0 ? a : gcd(b, a % b);
}

const slope = (p1, p2) => {
  let xDiff = p1[0] - p2[0];
  let yDiff = p1[1] - p2[1];
  if(xDiff == 0) 
    return 'vertical';
  if(yDiff == 0) 
  return 'horizontal';
  const div = gcd(xDiff, yDiff);
  xDiff /= div;
  yDiff /= div;
  return xDiff + '/' + yDiff;
}

const points = [[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]];
console.log(`The given x and y points are :`);
console.log(points);
const result = maxPoints(points);
console.log(`The maximum number of points : ${result} that lie on the same straight line`);

