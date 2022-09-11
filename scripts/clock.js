function getTime(){
   let rawTime = new Date();

    let hours = String(rawTime.getHours()).padStart(2, '0');
    let minutes = String(rawTime.getMinutes()).padStart(2, '0');
    let seconds = String(rawTime.getSeconds()).padStart(2, '0');

    currentTime = `${hours} : ${minutes} : ${seconds}`;
    setTimeout(getTime, 1000);
   
   return currentTime;
}

function getDate(){
    let rawDate = new Date();

    let year = rawDate.getFullYear();
    let month = rawDate.getMonth() + 1;
    let day = rawDate.getDate();

    currentDate = `Current Date: ${month}/${day}/${year}`;

    return currentDate;
}

var updateClock = document.getElementById("clock");
var updateDate = document.getElementById("date");

updateClock.innerHTML = getTime();
updateDate.innerHTML = getDate();