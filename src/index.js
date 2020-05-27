const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  // change theme of the website
  document.body.classList.toggle("dark");
});
