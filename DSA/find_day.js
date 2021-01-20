day = datestring =>{
    const day = new Date(datestring);
    console.log(day);
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekdays[day.getUTCDay()];
}

const datestring = "2021-01-17";
console.log("It is "+day(datestring)+"..");