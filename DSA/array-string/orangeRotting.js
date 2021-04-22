function orangeRotting(arr){
    let queue = [];
    let minute = 0;
    let fresh = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[0].length; j++){
            if(arr[i][j] == 1){
                fresh++;
            }
            if(arr[i][j] == 2){
                queue.push([i, j]);
            }
        }
    }
    while(queue.length != 0 && fresh){
        let directionRow = [0, -1, 0, 1];
        let directionCol = [-1, 0, 1, 0];
        let next = [];
    while(queue.length != 0){
        let current = queue.shift();
        for(let i=0; i<directionRow.length; i++){
            let nR = current[0]+directionRow[i];
          let nC = current[1]+directionCol[i];
            if(nR >= 0 && nC >= 0 && nR < arr.length && nC < arr[0].length) {
                   if(arr[nR][nC] == 1){
                        arr[nR][nC] = 2;
                        fresh--;
                        next.push([nR, nC]);
                }
            }   
        }
    }
    minute++;
    queue = next;
}
 return fresh == 0 ? minute : -1;    
}

let arr =[[2,1,1],[1,1,0],[0,1,1]];
console.log(`The given input is :`);
console.log(arr);
let result = orangeRotting(arr);
if(result == -1){
    console.log(`not all oranges are found`);
}
else {
    console.log(`The total mintue taken is : ${result}`);
}