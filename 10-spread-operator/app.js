// ========== String Example ========== //

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

// ========== Array Example ========== //

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna', 'pinky'];
const bestFriend = 'arnold';

const friends = [...boys, bestFriend, ...girls];
console.log(friends);

// reference
// const newFriends = friends;
//copy
const newFriends = [...friends];

newFriends[0] = 'nancy';

console.log(friends);
console.log(newFriends);

// ========== Object Example ========== //

const person = { name: 'john', job: 'developer' };

const newPerson = { ...person, city: 'delhi', name: 'peter' };

console.log(person);
console.log(newPerson);
