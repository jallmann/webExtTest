function main() {
  console.log("Content script is being executed.");
  let title = document.querySelector("#title1");
  title.innerHTML = "Content script executed last.";
}

main();
