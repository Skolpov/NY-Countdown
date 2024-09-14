// Функция для обновления отсчета времени
function updateCountdown() {
    // Устанавливаем дату 1 мая
const targetDate = new Date('May 1, 2025 00:00:00').getTime();

// Обновляем таймер каждую секунду
const countdown = setInterval(function () {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    // Вычисляем дни, часы, минуты и секунды
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Отображаем результат на странице
    document.getElementById("days2").innerHTML = days;
    document.getElementById("hours2").innerHTML = hours;
    document.getElementById("minutes2").innerHTML = minutes;
    document.getElementById("seconds2").innerHTML = seconds;

    // Если таймер достиг нуля
    if (timeDifference < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "The time has come!";
    }
}, 1000);

}

// Показываем спиннер до начала отсчета
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
    countdown2.style.display = 'flex';
}, 1000);

// Обновляем отсчет каждую секунду
setInterval(updateCountdown, 1000);

// Выполняем начальное обновление отсчета
updateCountdown();
