// Unqiue Values using new Set

const menu = [
  {
    name: 'pasta',
    category: 'Breakfast',
  },
  {
    name: 'Egg',
    category: 'Breakfast',
  },
  {
    name: 'pancakes',
    category: 'Lunch',
  },
  {
    name: 'Chicken',
    category: 'Dinner',
  },
  {
    name: 'Pizza',
    category: 'Lunch',
  },
  {
    name: 'Burger',
    category: 'Dinner',
  },
  {
    name: 'sandwich',
    category: 'Breakfast',
  },
];

const categories = menu.map((item) => item.category);

const uniqueCategories = ['all', ...new Set(categories)];

const result = document.querySelector('#result');

uniqueCategories.map((category) => {
  const button = document.createElement('button');
  button.style.margin = '10px';
  button.innerText = category;
  result.append(button);
});

console.log(uniqueCategories);
