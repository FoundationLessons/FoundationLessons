let button = document.querySelector("#change");
button.classList.add("black");

button.addEventListener("click", () => {
  if (button.classList == "black") {
    button.classList.remove("black");
    button.classList.add("white");
  } else {
    button.classList.remove("white");
    button.classList.add("black");
  }
});
