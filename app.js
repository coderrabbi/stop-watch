window.onload = () => {
  const minitue = document.getElementById("minitue");
  const seconds = document.getElementById("seconds");
  const milliseconds = document.getElementById("milliseconds");
  const startBtn = document.getElementById("startBtn");
  const stopBtn = document.getElementById("stopBtn");
  const resetBtn = document.getElementById("resetBtn");

  let min = 00;
  let sec = 00;
  let milSec = 00;
  let ses;

  function startTime() {
    milSec++;
    if (milSec < 10) {
      milliseconds.innerHTML = "0" + milSec;
    }
    if (milSec > 10) {
      milliseconds.innerHTML = milSec;
    }
    if (milSec > 99) {
      sec++;
      seconds.innerHTML = "0" + sec;
      milSec = 0;
      milliseconds.innerHTML = "0" + 0;
    }
    if (sec >= 10) {
      seconds.innerHTML = sec;
    }
    if (sec > 59) {
      min++;
      minitue.innerHTML = "0" + min;
      sec = 0;
      seconds.innerHTML = "0" + sec;
    }
  }
  startBtn.addEventListener("click", function () {
    ses = setInterval(startTime, 10);
  });

  stopBtn.addEventListener("click", function () {
    clearInterval(ses);
  });

  resetBtn.addEventListener("click", function () {
    clearInterval(ses);
    min = "00";
    sec = "00";
    milSec = "00";
    minitue.innerHTML = min;
    seconds.innerHTML = sec;
    milliseconds.innerHTML = milSec;
  });
};
