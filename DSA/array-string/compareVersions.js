function compareVersions(version1, version2){
  let v1 = version1.split(".");
  let v2 = version2.split(".");
  while(v1.length || v2.length){
    let a = +v1.shift() || 0;
    let b = +v2.shift() || 0;
    if(a > b){
      return 1;
    }
    else if(b > a){
      return -1;
    }
  }
  return 0;
}

let version1 = "2.5.3", version2 = "2.5.1";
console.log(`The given versions are  v1 : ${version1} and v2 : ${version2}`);
let result  = compareVersions(version1, version2);
console.log(`The compared version number is : ${result}`);