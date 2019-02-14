function checkday(day, Time) {  //function to check what the day and time is 
    if (day === "Saturday" || day === "Sunday") {
return weekendtime(Time)
    } else { 
    return weekdaytime(Time)
}
}

function weekendtime(Time) {  //function to check if the shop is open or closed at weekend, passed in the time parameter.
    if (Time > 8 && Time < 18) {
return "shop is open"
} else {
    return "shop is closed"
}
}

function weekdaytime(Time) { //function to check if the shop is open or closed at weekday
    if (Time > 6 && Time < 20) {
return "shop is open"
} else {
    return "shop is closed"
}
}

console.log(checkday("Monday", 14)); //current time is monday at 14:00, run the function to check the day 
