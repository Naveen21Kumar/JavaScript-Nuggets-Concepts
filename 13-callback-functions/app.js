// Callback function 1
function makeUppercase(value) {
  console.log(value.toUpperCase());
}

// Callback function 2
function reverseString(value) {
  console.log(value.split('').reverse().join(''));
}

function handleName(name, cb) {
  const fullName = `${name} smith`;
  cb(fullName);
}

handleName('Peter', makeUppercase);
handleName('Peter', reverseString);

// callback function 3
handleName('susan', (value) => console.log(value));

// array methods, setTimeouts, event listeners are Callback functions

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  console.log('Hello Universe');
});
