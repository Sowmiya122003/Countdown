let timerElement = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");

let counter = 0;
let interval = null;

startBtn.addEventListener("click", () => {
  if (interval) return; // prevent multiple intervals

  interval = setInterval(() => {
    counter++;
    timerElement.textContent = `${counter} sec`;

    if (counter === 5) {
      clearInterval(interval);
      interval = null;

      setTimeout(() => {
        const confirmRedirect = confirm("Time's up! Redirect to Pixabay?");
        if (confirmRedirect) {
          window.location.href = "https://pixabay.com";
        }
      }, 100);
    }
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});
