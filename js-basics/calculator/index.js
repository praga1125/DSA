let num1 = '', num2 = '', operator = '';
let result = 0;
let clicked = false;
function operands(values){
    if(!clicked){
        num1 += values;
        calculator.setAttribute('value' , num1);
    }
    else{
        num2 += values;
        calculator.setAttribute('value', `${num1}${operator}${num2}`);
    }
}
function operators(value){
    operator += value; 
    calculator.setAttribute('value', num1+value)
    clicked = true;
}
function calculation(value){
    switch(operator){
        case '+':
           result = parseInt(num1) + parseInt(num2);
           calculator.setAttribute('value', result);
           console.log(`result = ${result}`);
           break;
        case '-':
            result = parseInt(num1) - parseInt(num2);
            calculator.setAttribute('value', result);
            console.log(`result = ${result}`);
            break;
        case '*':
            result = parseInt(num1) * parseInt(num2);
            calculator.setAttribute('value', result);
            console.log(`result = ${result}`);
            break;
        case '/':
            result = parseInt(num1) / parseInt(num2);
            calculator.setAttribute('value', result); 
            console.log(`result = ${result}`);
            break;
        case '%':
            result = parseInt(num1) % parseInt(num2);
            calculator.setAttribute('value', result);
            console.log(`result = ${result}`);
            break;
    }
}

function clearText() {
    num1 = '', num2 = '', operator = '';
    result = 0;
    clicked = false;
    calculator.setAttribute('value', '');
}