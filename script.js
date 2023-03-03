const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

const countdown2 = document.getElementById('countdown2');
const days2 = document.getElementById('days2');
const hours2 = document.getElementById('hours2');
const minutes2 = document.getElementById('minutes2');
const seconds2 = document.getElementById('seconds2');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

const beginningLife = new Date(`September 01 ${currentYear} 00:00:00`);


// Update countdown time





function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  const diff2 = beginningLife - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  const d2 = Math.floor(diff2 / 1000 / 60 / 60 / 24);
  const h2 = Math.floor(diff2 / 1000 / 60 / 60) % 24;
  const m2 = Math.floor(diff2 / 1000 / 60) % 60;
  const s2 = Math.floor(diff2 / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;

  days2.innerHTML = d2;
  hours2.innerHTML = h2 < 10 ? '0' + h2 : h2;
  minutes2.innerHTML = m2 < 10 ? '0' + m2 : m2;
  seconds2.innerHTML = s2 < 10 ? '0' + s2 : s2;
}



// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
  countdown2.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);
