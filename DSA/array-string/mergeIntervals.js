/*
INPUT: [[1,3], [2, 4], [2, 6], [8, 9], [8, 10], [9, 11], [15, 18], [16, 17]]
OUTPUT: [[1,6], [8,11], [15,18]]
*/
const mergeIntervals = (intervals) => {
    let result = [];
    let first = null, last =null;
    for(let i = 0; i < intervals.length; i++){
    if(!first){
        first = intervals[i][0];
        last = intervals[i][1];
    }
    if(intervals[i][0] <= last){
        if(intervals[i][1] > last){
            last = intervals[i][1];
        }
    } else {
        result.push([first, last]);
        first = intervals[i][0];
        last = intervals[i][1];
    }
  }
  result.push([first, last]);
  return result;
}

const intervals = [[1,3], [2, 4], [2, 6], [8, 9], [8, 10], [9, 11], [15, 18], [16, 17]];
const mergedIntervals = mergeIntervals(intervals);
console.log(mergedIntervals);