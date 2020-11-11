// All the choices and winning conditions

export default [
  {
    id: 1,
    name: 'Pierre',
    beats: [
      'Fabiosaure',
      'Ciseaux',
    ],
  },
  {
    id: 2,
    name: 'Fabigeon',
    beats: [
      'Ciseaux',
      'Pierre',
    ],
  },
  {
    id: 3,
    name: 'Fabiosaure',
    beats: [
      'Fabigeon',
      'Feuille',
    ],
  },
  {
    id: 4,
    name: 'Ciseaux',
    beats: [
      'Feuille',
      'Fabiosaure',
    ],
  },
  {
    id: 5,
    name: 'Feuille',
    beats: [
      'Pierre',
      'Fabigeon',
    ],
  },
];
