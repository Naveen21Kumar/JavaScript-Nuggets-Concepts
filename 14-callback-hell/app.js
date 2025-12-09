const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const btn = document.querySelector('.btn');

// after 1s first red
// after 3s first darkblue
// after 2s first orange
// IN SEQUENCE !!!!

// Callback Hell
btn.addEventListener('click', () => {
  setTimeout(() => {
    first.style.color = 'red';
    setTimeout(() => {
      second.style.color = 'darkblue';
      setTimeout(() => {
        third.style.color = 'orange';
      }, 2000);
    }, 3000);
  }, 1000);
});
