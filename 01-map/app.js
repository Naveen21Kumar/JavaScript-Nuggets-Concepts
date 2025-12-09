// MAP Method
// 1. returns new array.
// 2. does not change the size of the original array (unlike filter)
// 3. uses values from original array while making the new one

const people = [
  {
    name: 'John',
    age: 25,
    position: 'developer',
  },
  {
    name: 'Doe',
    age: 27,
    position: 'Tester',
  },
  {
    name: 'peter',
    age: 29,
    position: 'Boss',
  },
  {
    name: 'Mark',
    age: 32,
    position: 'Intern',
  },
];

// ================================================================= //
// get Age

const getAges = (person) => person.age * 2;

const ages = people.map(getAges);

console.log(ages);

// ================================================================= //
// Return Object

const newPeople = people.map((person) => {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

console.log(newPeople);

// ================================================================= //
// Render Person in HTML

const result = document.getElementById('result');

const names = people.map((person) => {
  const h2 = document.createElement('h2');
  h2.innerText = person.name;
  result.appendChild(h2);
});
