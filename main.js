let msg = document.querySelector("#msg");
let btn = document.querySelector("#btn");
let span = document.querySelector("span");
let spanParent = span.parentElement;
function disapperSpan() {
  spanParent.classList.add("hidden");
}
span.addEventListener("click", () => {
  disapperSpan();
});
// happen once
let countDown = setTimeout(disapperSpan, 7000);
// need to disappear it every 3000MS
let repeats = setInterval(() => {
  spanParent.classList.remove("hidden");
  setTimeout(disapperSpan, 7000);
  move();
}, 10000);

btn.addEventListener("click", () => {
  clearInterval(repeats);
  clearTimeout(countDown);
});
// create the progressBar
let element = document.querySelector("#myBar");
let i = 0;
function move() {
  if (i === 0) {
    i = 1;
    let width = 1;
    let repeat = setInterval(progress, 70);
    function progress() {
      if (width >= 100) {
        i = 0;
        clearInterval(repeat);
      } else {
        ++width;
        element.style.width = `${width}%`;
      }
    }
  }
}
move();
