const store = {
  products: [
    {
      books: [
        "Romance",
        "Thriller",
        "Dark Romance",
        "Science Fiction",
        "historical",
        "Adventure",
      ],
      home: [
        "Lighting",
        "Fumiture & Decoration",
        "Showroom",
        "Cooking & Serving",
        "Textiles & Mattresses",
        "Creative Hobbies",
        "Garden & Gardening",
      ],
      games: [
        "Xbox One",
        "Xbox Series X|S",
        "Playstation 5",
        "Playstation 4",
        "PC Games",
        "Virtual Reality",
      ],
      eletronics: [
        "Telephony",
        "Monitor",
        "Laptop",
        "Tablets",
        "Desktop",
        "Computer Components",
        "Printers",
        "Consoles",
      ],
    },
  ],
  categories: [
    "books",
    "home",
    "games",
    "eletronics",
    // made on purpose
    "games",
    "home",
  ],

  getProduct() {
    return this.products;
  },
};

const set = new Set();
// console.log(set.size);
// console.log(set.has('books'));
// console.log(set.delete('games'));
// console.log(set.add('games'));
// console.log(set.add('sport'));
// set.forEach(cat => console.log(cat));
// set.clear();
// console.log(set);
// const [...categories] = set;
// store.categories = categories;
// console.log(store);