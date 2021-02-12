function balancing(arr){
   const brackets = [];
   const temp = {
       '(' : ')',
       '[' : ']',
       '{' : '}'
   };
   for(let i = 0; i < arr.length; i++){
       if(arr[i] in temp){
        brackets.push(arr[i]);
       }
        else{
            if(temp[brackets[brackets.length - 1]] === arr[i]){
                brackets.pop();
            }
            else{
                return "NO";
            }
        }
   }

}
const arr = "{[()]}"
let result = balancing(brackets);
console.log(result);