// Run with: node timers-node.js

// Runs once, after 3 seconds.
console.log("Counting down...");
setTimeout(() => {
  console.log("Go!");
}, 3000);

// Repeats every second.
let count = 0;
let tickerId = setInterval(() => {
  count++;
  console.log("Ticks: " + count);
}, 1000);

// Stops the repeating timer after 5 seconds.
setTimeout(() => {
  clearInterval(tickerId);
  tickerId = null;
  console.log("Ticker stopped.");
}, 5000);


