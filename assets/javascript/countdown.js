// Get all element
const elementIdDay = document.getElementById("day");
const elementIdHour = document.getElementById("hour");
const elementIdMinute = document.getElementById("minute");
const elementIdSecond = document.getElementById("second");

// Constant conversion any time format from milisecond
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

// Make a target date
const targetDate = new Date(`30 May 2021 22:00:00`);

// Function that count time difference
function differenceDate() {
  const now = new Date();

  gap = targetDate - now;

  const dSecond = Math.floor((gap % MINUTE) / SECOND).toLocaleString("en-US", { minimumIntegerDigits: 2 });
  const dMinute = Math.floor((gap % HOUR) / MINUTE).toLocaleString("en-US", { minimumIntegerDigits: 2 });
  const dHour = Math.floor((gap % DAY) / HOUR).toLocaleString("en-US", { minimumIntegerDigits: 2 });
  const dDay = Math.floor(gap / DAY).toLocaleString("en-US", { minimumIntegerDigits: 2 });

  //   console.log(dSecond);

  elementIdDay.innerHTML = dDay;
  elementIdHour.innerHTML = dHour;
  elementIdMinute.innerHTML = dMinute;
  elementIdSecond.innerHTML = dSecond;
}

differenceDate();

// Running function differenceDate for every 1 second to update the date
setInterval(differenceDate, 999);
