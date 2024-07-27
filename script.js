var hour = "00";
var minute = "00";
var seconds = "00";
var milliseconds = "00";

var appendHours = document.getElementById("hr");
var appendMinutes = document.getElementById("min");
var appendSeconds = document.getElementById("seconds");
var appendMilliSeconds = document.getElementById("milli");

var buttonStart = document.getElementById("start");
var buttonStop = document.getElementById("stop");
var buttonReset = document.getElementById("reset");
var Interval;

buttonStart.onclick = function () {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
};

buttonStop.onclick = function () {
  clearInterval(Interval);
};

buttonReset.onclick = function () {
  clearInterval(Interval);
  hour = "00";
  minute = "00";
  seconds = "00";
  milliseconds = "00";
  appendHours.innerHTML = hour;
  appendMinutes.innerHTML = minute;
  appendSeconds.innerHTML = seconds;
  appendMilliSeconds.innerHTML = milliseconds;
};

function startTimer() {
  milliseconds++;
  appendZero(milliseconds, appendMilliSeconds);
  if (milliseconds > 99) {
    seconds++;
    appendZero(seconds, appendSeconds);
    milliseconds = 0;
    appendZero(milliseconds, appendMilliSeconds);
  }
  appendZero(seconds, appendSeconds);

  if (seconds > 59) {
    minute++;
    appendZero(minute, appendMinutes);
    seconds = 0;
    appendZero(seconds, appendSeconds);
  }

  appendZero(minute, appendMinutes);

  if (minute > 59) {
    hour++;
    appendZero(hour, appendHours);
    minute = 0;
    appendZero(minute, appendMinutes);
  }
}

function appendZero(digit, appendString) {
  if (parseInt(digit) <= 9) {
    appendString.innerHTML = digit;
  }

  if (parseInt(digit) > 9) {
    appendString.innerHTML = digit;
  }
}