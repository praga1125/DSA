var partitionLabels = function(s) {
    let last=-1, temp = [];
    const res=[];
    let left=0;
    for(let i=0;i<s.length;i++){
        last=Math.max(s.lastIndexOf(s[i]),last)
        if(i===last){
            if(res.length == 0){
                res.push(s.slice(0, i-left+1));
                temp = s.slice(i-left+1);
            } else {
                res.push(temp.slice(0, i-left+1));
                temp = temp.slice(i-left+1);
            }
            left=i+1
        }
    }
    return res;
}

const val = "ababcbacadefegdehijhklij";
const res = partitionLabels(val);
console.log(res);