const converter = (temp) => {
    const [time, modifiers] = temp.split(' ');
    let [hours, minutes, seconds] = time.split(':');
    if(hours == '12'){
        hours = '00';
    }
    if(modifiers.toLowerCase() == 'pm'){
        hours = parseInt(hours, 10)+ 12;
    }
    return `${hours}:${minutes}:${seconds}`;
}
const time = "07:05:45 PM"
const result = converter(time);
console.log(result);