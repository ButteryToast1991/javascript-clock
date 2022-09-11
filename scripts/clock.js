setInterval(getTime, 1000);

function getTime() {
    const currentTime = new Date();

    document.getElementById("clock").innerHTML = currentTime.toLocaleTimeString();

    document.getElementById("date").innerHTML = currentTime.toLocaleDateString();
}
