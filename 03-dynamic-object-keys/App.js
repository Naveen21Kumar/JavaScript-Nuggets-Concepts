const person = {
  name: 'kumar',
  age: 21,
};

// Dot notation
console.log(person.name); // kumar

// Square notation
console.log(person['age']); // 21

// ============================================================================ //

const appState = 'loading';

const app = {
  [appState]: true,
};

const keyName = 'computer';

app[keyName] = 'apple';

console.log(app);

// ============================================================================ //

const state = {
  loading: true,
  name: '',
  job: '',
};

console.log(state);

const updateState = (key, value) => {
  state[key] = value;
};

updateState('name', 'john');
updateState('job', 'Developer');
updateState('job', 'Developer');
updateState('age', 21);
updateState('products', []);

console.log(state);
