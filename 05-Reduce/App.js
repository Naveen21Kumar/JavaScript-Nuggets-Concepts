const staff = [
  {
    name: 'John',
    age: 25,
    position: 'developer',
    salary: 200,
  },
  {
    name: 'Doe',
    age: 27,
    position: 'Tester',
    salary: 200,
  },
  {
    name: 'Peter',
    age: 30,
    position: 'Boss',
    salary: 400,
  },
  {
    name: 'Mark',
    age: 35,
    position: 'Intern',
    salary: 40,
  },
];

// ========== Reduce Method (Array)========== //

// iterates, callback function
//  reduces to a single value - number. array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr) - current iteration/value
// must must return the 'acc' or 1st parameter or else it will be undefined

const totalSalary = staff.reduce((total, person) => {
  console.log(total);

  console.log(person.salary);

  total += person.salary;
  console.log(total);

  return total;
}, 150);

console.log(totalSalary);
