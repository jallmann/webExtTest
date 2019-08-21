console.log("Page script is starting to run.")
window.addEventListener("load", main);

function main() {
  let title = document.querySelector("#title1");
  console.log("Page script main() is executed.");
  title.innerHTML = "Nothing";
}
