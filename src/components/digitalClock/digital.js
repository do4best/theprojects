const hourElement = document.getElementById("hour")
const minuteElement = document.getElementById("minute")
const secondElement = document.getElementById("second")
function updateTime(){
let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second
hourElement.textContent = hour;
    minuteElement.textContent = minute;
    secondElement.textContent = second;
}

setInterval(updateTime,1000)