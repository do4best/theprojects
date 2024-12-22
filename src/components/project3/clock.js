const hourEle = document.getElementById('hour');
const minuteEle = document.getElementById('minute');
const secondEle = document.getElementById('second');
const ampmEle = document.getElementById('ampm');
function updateTime(){
    let h= new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if(h > 12){
        h = h - 12;
        ampm = "PM"
    }
    h = h < 10 ?"0" + h : h;
    hourEle.innerHTML = h;
    minuteEle.innerHTML = m;
    secondEle.innerHTML = s;
    ampmEle.innerText = ampm;
    setTimeout(()=>{
        updateTime()
    },1000)
}

updateTime()