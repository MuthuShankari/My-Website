const lightBtn = document.getElementById("lightBtn");
const blowBtn = document.getElementById("blowBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const flames = document.querySelectorAll(".flame");

/* Light Candles */
lightBtn.addEventListener("click", () => {
  flames.forEach(flame => {
    flame.style.opacity = "1";
    flame.classList.add("flicker");
  });

  lightBtn.disabled = true;
  blowBtn.disabled = false;
});

/* Blow Candles */
blowBtn.addEventListener("click", () => {
  flames.forEach(flame => {
    flame.style.opacity = "0";
  });

  setTimeout(() => {
    popup.style.display = "flex";
  }, 400);
});

/* Close Popup */
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

/* Flicker Animation */
const style = document.createElement("style");
style.innerHTML = `
  .flicker {
    animation: flicker 0.15s infinite alternate;
  }

  @keyframes flicker {
    from { transform: scale(1); }
    to { transform: scale(1.2); }
  }
`;
document.head.appendChild(style);
