const BRACKETS = {
    '{':'}',
    '[':']',
    '(':')',
}

var isValid = function(s) {
    const stack = [];
    let isValid = true;
    for (bracket of s){
        if (BRACKETS[bracket]){
            stack.push(bracket);
        } else {
            const popped = stack.pop();
            if (bracket !== BRACKETS[popped]){
                return false;
            }
        }
    }
    return isValid && stack.length == 0;
};

let parentheses = "()[]{}";
console.log(`The given parentheses : ${parentheses}`);
let result = isValid(parentheses);
if(result){
    console.log(`The parentheses is valid`);
}
else{
    console.log(`The parentheses is not valid`);
}