function valid(str){
    const  temp = [];
    for(let i=0;i<str.length;i++){
        let c = str.charAt(i);
        switch(c){
            case '(':
                temp.push(')');
                break;
            case '[':
                temp.push(']');
                break;
            case '{':
                temp.push('}');
                break;
            default:
                if(c !== temp.pop()){
                    return false;
               }
        }
    }
    return temp.length == 0;
}

let parentheses = "()[]{}";
console.log(`The given parentheses : ${parentheses}`);
let result = valid(parentheses);
if(result){
    console.log(`The parentheses is valid`);
}
else{
    console.log(`The parentheses is not valid`);
}