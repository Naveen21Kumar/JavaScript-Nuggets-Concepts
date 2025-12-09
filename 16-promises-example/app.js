// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  addColor('.first', 'green', 1000, 'hello world')
    .then((data) => addColor('.second', 'darkblue', 3000, data))
    .then((data) => addColor('.third', 'orange', 2000, data))
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
});

function addColor(selector, color, time, data) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        element.innerText = `Color Changed to ${color}`;
        resolve(data);
      }, time);
    } else {
      reject(console.log(`there is no such element: ${selector}`));
    }
  });
}
