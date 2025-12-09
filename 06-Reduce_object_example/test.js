const data = [
  {
    project: 'proj-1',
    language: 'javascript',
  },
  {
    project: 'proj-2',
    language: 'HTML',
  },
  {
    project: 'proj-3',
    language: 'CSS',
  },
  {
    project: 'proj-4',
    language: 'javascript',
  },
  {
    project: 'proj-5',
    language: 'javascript',
  },
  {
    project: 'proj-6',
    language: 'HTML',
  },
  {
    project: 'proj-7',
    language: 'CSS',
  },
  {
    project: 'proj-8',
    language: 'React',
  },
  {
    project: 'proj-9',
    language: null,
  },
  {
    project: 'proj-10',
    language: 'TypeScript',
  },
];

// ========== testing dynamic object ========== //
// const total = {};

// if (total[language]) {
//   total[language] += 1;
// } else {
//   total[language] = 1;
// }

// console.log(total);

// ===== testing Reduce method using dynamic object ===== //

const newData = data.reduce((total, repo) => {
  const { language } = repo;

  // remove null
  if (language) {
    if (total[language]) {
      total[language] += 1;
      console.log(total[language]);
    } else {
      total[language] = 1;
      console.log(total[language]);
    }
  }

  return total;
}, {});

console.log(newData);
