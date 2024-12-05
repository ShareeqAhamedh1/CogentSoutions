// Countdown target date
const targetDate = new Date("2025-02-04T00:00:00");

function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  // Calculate time components
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update each flip-card
  updateFlipCard("days", days);
  updateFlipCard("hours", hours);
  updateFlipCard("minutes", minutes);
  updateFlipCard("seconds", seconds);
}

function updateFlipCard(unit, value) {
  const top = document.getElementById(`${unit}-top`);
  const bottom = document.getElementById(`${unit}-bottom`);

  // Check if value has changed
  if (top.textContent !== String(value).padStart(2, "0")) {
    bottom.textContent = top.textContent;
    top.textContent = String(value).padStart(2, "0");

    // Apply the flip animation
    top.classList.add("flip");
    setTimeout(() => top.classList.remove("flip"), 600);
  }
}

// Start the countdown
setInterval(updateCountdown, 1000);
