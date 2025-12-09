// ========== Cart Example ========== //

const cart = [
  {
    title: 'Samsung Galaxy M32',
    price: 599.99,
    amount: 1,
  },
  {
    title: 'Google Pixel 3',
    price: 499.99,
    amount: 2,
  },
  {
    title: 'Xiamoi Redmi Note 2',
    price: 699.99,
    amount: 4,
  },
  {
    title: 'Xiamoi Redmi Note 5',
    price: 399.99,
    amount: 3,
  },
];

let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { price, amount } = cartItem;
    total.totalItems += amount;
    total.cartTotal += price * amount;

    return total;
  },
  { totalItems: 0, cartTotal: 0 }
);

cartTotal = parseFloat(cartTotal.toFixed(2));

console.log(totalItems, cartTotal);

const url = 'https://api.github.com/users/Naveen21Kumar/repos?per_page=100';

const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();

  const newData = data.reduce((total, repo) => {
    const { language } = repo;

    if (language) {
      if (total[language]) {
        total[language] = total[language] + 1;
      } else {
        total[language] = 1;
      }
    }

    // shorthand
    if (language) {
      total[language] = total[language] + 1 || 1;
    }

    return total;
  }, {});

  console.log(newData);
};

fetchRepos();
