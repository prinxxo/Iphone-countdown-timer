const targetDate = new Date(`28 Mar 2024`);

// Update Countdown time
function updateCountdowntime() {
    const currentTime = new Date();
    const diff  = targetDate - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h < 10 ? '0' + h : h;
    document.getElementById("minutes").innerHTML = m < 10 ? '0' + m : m;
    document.getElementById("seconds").innerHTML = s < 10 ? '0' + s : s;
    
}

setInterval(updateCountdowntime, 1000);