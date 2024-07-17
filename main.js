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
let countDown = setTimeout(() => {
  disapperSpan();
}, 7000);

let repeats = setInterval(() => {
  spanParent.classList.remove("hidden");
}, 60 * 1000);

btn.addEventListener("click", () => {
  clearInterval(repeats);
  clearTimeout(countDown);
});
