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
    name: 'Peter',
    age: 30,
    position: 'Boss',
  },
  {
    name: 'Mark',
    age: 35,
    position: 'Intern',
  },
];

// ========== Filter Array Method ========== //
// Filter Returns a new array, can manipulate the size of new array (unlike map), returns based on condition

const youngPeople = people.filter((person) => {
  if (person.age < 28) {
    return person;
  }
});

console.log(youngPeople);

const developer = people.filter((person) => person.position === 'developer');
console.log(developer[1]?.position || 'none');

// No match
const seniorDevs = people.filter((item) => item.position === 'senior dev');
console.log(seniorDevs);

// ========== Find Array Method ========== //
// Find returns single instance (object), returns first match, if no match - undefined

const fruits = ['apple', 'mango', 'lemon', 'peach'];

const peter = people.find((item) => item.name === 'Peter');
console.log(peter);

const fruit = fruits.find((fruit) => fruit === 'lemon');
console.log(fruit);

// No match
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);

// mulitple matches then first match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

// ========== difference between access values find vs filter ========== //

// find method
console.log(peter.position);

//filter method
const mark = people.filter((person) => person.name === 'Mark');
console.log(mark[0]?.position);
