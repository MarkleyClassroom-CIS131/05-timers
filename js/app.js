
// Variable to store the repeating interval id
let tickerId = null;

// Runs once, after 3 seconds
document.getElementById("countdown").addEventListener("click", () => {
  const status = document.getElementById("status");
  status.textContent = "Counting down...";
  // After 3000 ms (3s), update text
  setTimeout(() => { status.textContent = "Go!"; }, 4000);
})

// Starts a ticker that updates every 1 second
document.getElementById("start").addEventListener("click", () => {
  // Prevent multiple intervals from stacking
  if (tickerId !== null) return;
  const status = document.getElementById("status");
  let count = 0;
  tickerId = setInterval(() => {
    count++;
    status.textContent = "Ticks: " + count;
  }, 1000);
})

// Stops the ticker
document.getElementById("stop").addEventListener("click", () => {
  if (tickerId !== null) {
    clearInterval(tickerId);
    tickerId = null;
  }
})



