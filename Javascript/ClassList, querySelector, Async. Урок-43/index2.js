const btn = document.querySelector("#timer");

let timerid = setInterval(() => console.log("tick"), 1000);

btn.addEventListener("click", () => {
  setTimeout(() => clearInterval(timerid), 1000);
});
