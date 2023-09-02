import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const pickerInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

const daysCounter = document.querySelector('[data-days]');
const hoursCounter = document.querySelector('[data-hours]');
const minutesCounter = document.querySelector('[data-minutes]');
const secondsCounter = document.querySelector('[data-seconds]');


let selectedDate = null;
let intervalId = null;
startBtn.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDates[0] <= Date.now()) {
      Notify.failure("Please choose a date in the future");
    } else {startBtn.disabled = false;};
  },
};

flatpickr(pickerInput, options);


const timer = {
  isActive: false,
    start() { 
      if (this.isActive) {
        return
      };
      this.isActive = true;
  intervalId = setInterval(() => { 
      const currentTime = new Date().getTime();
      const timeRemaining = selectedDate - currentTime;
      const timeLeftData = convertMs(timeRemaining);
    formatTime(timeLeftData);
    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      formatTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      };
        }, 1000);
  },
};


startBtn.addEventListener("click", () => {
  timer.start();
  pickerInput._flatpickr.destroy();
 });


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function formatTime(timeData) {
  const formattedDays = addLeadingZero(timeData.days);
  const formattedHours = addLeadingZero(timeData.hours);
  const formattedMinutes = addLeadingZero(timeData.minutes);
  const formattedSeconds = addLeadingZero(timeData.seconds);

  daysCounter.textContent = formattedDays;
  hoursCounter.textContent = formattedHours;
  minutesCounter.textContent = formattedMinutes;
  secondsCounter.textContent = formattedSeconds;
};


function addLeadingZero(value) { 
  return String(value).padStart(2, '0');
};



