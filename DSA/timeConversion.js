const converter = (temp) => {
    let [hours, minutes, secondWithModifier] = time.split(':');
    let seconds = secondWithModifier.slice(0,2);
    let modifiers = secondWithModifier.slice(2,4);
    if(hours == '12'){
        hours = '00';
    }
    if(modifiers.toLowerCase() == 'pm'){
        hours = parseInt(hours, 10)+ 12;
    }
    return `${hours}:${minutes}:${seconds}`;
}
const time = "09:00:00PM"
const result = converter(time);
console.log(result);