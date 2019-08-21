function main() {
  let title = document.querySelector("#title1");
  console.log("Content script is being executed.");
  title.innerHTML = "Something";
}

main();
