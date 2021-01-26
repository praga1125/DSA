strSplit = 'saveChangesInTheEditor'.split('');
res = [], subStr = ''
for(let i=0; i< strSplit.length; i++) {
if(strSplit[i] == strSplit[i].toUpperCase()) {
res.push(subStr)
subStr = strSplit[i]
} else {
subStr += strSplit[i];
}
}
res.push(subStr)
console.log(res.length)