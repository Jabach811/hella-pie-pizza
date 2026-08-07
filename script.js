// Hours in America/Los_Angeles; 24h floats. null = closed.
const HOURS = [
  { open: 12, close: 18 }, // Sun
  { open: 12, close: 19 }, // Mon
  null,                    // Tue
  { open: 12, close: 19 }, // Wed
  { open: 12, close: 19 }, // Thu
  { open: 12, close: 20 }, // Fri
  { open: 12, close: 20 }, // Sat
];

const sign = document.getElementById("open-sign");
if (sign) {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  const today = HOURS[now.getDay()];
  const hr = now.getHours() + now.getMinutes() / 60;
  const fmt = h => (h > 12 ? h - 12 : h) + (h >= 12 ? "PM" : "AM");
  if (today && hr >= today.open && hr < today.close) {
    sign.textContent = "● OPEN TIL " + fmt(today.close);
  } else {
    sign.textContent = "● CLOSED — SEE HOURS";
    sign.classList.add("closed");
  }
}

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
if (toggle) toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

const bar = document.querySelector(".sticky-order");
if (bar) bar.classList.add("on");
