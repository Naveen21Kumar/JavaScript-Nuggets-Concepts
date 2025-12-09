const promise = new Promise((resolve, reject) => {
  resolve([1, 2, 3, 4, 5]);
  // reject('there was an error');
});

console.log(promise);

promise.then((data) => console.log(data)).catch((err) => console.log(err));

// Simple Guess

const value = 2;
const randomGuess = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);
  console.log(random);

  if (random === value) {
    resolve('you guessed correctly');
  } else {
    reject('wrong number');
  }
});

console.log(randomGuess);
