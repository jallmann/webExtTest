function main() {
  console.log("Content script is being executed.");
  let title = document.querySelector("#title1");
  wait(5000);
  console.log("Content script finished waiting");
  title.innerHTML = "Content script executed last.";
}

function wait(ms) {
    var start = +(new Date());
    while (new Date() - start < ms);
}

main();
