const taskScheduler = (tasks, n) => {
  const temp = Array(28).fill(0);
  for(const task of tasks) {
    temp[task.charCodeAt(0) - 65] += 1;
  }
  temp.sort((a, b) => b - a);
  const maxVal = temp[0] - 1;
  let idleSlots = maxVal * n;
  for(let i = 1; i < 26; i++) {
    if(temp[i] === 0) {
      break;
    }
    idleSlots -= Math.min(temp[i], maxVal)
    }
    return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
}

let tasks = ["A", "A", "A", "B", "B", "B"];
console.log(`The given task are : ${tasks}`);
let n = 2;
let result = taskScheduler(tasks, n);
console.log(`The ${result} number of units of times that cpu finish the all given task`);