// Javascript Nuggets
// Width/Height - window,  any element
// innerHeight - window
// innerWidth - window
// getBoundingClientRect() - any element

console.log("width", window.innerWidth);
console.log("height", window.innerHeight);

const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

btn.addEventListener("click", () => {
  const dimension = box.getBoundingClientRect();
  console.log(document.body.getBoundingClientRect());
  console.log("box dimension", dimension);
});
