// Navigation and project content work without JavaScript.
const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
