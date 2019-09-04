console.log("Page script is starting to run.")
window.addEventListener("load", main);

function main() {
  console.log("Page script main() is executed.");
  let title = document.querySelector("#title1");
  title.innerHTML = "Page script executed last.";
}
