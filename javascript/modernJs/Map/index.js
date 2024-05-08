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
    
  ],
  getProduct() {
    return this.products;
  },
};

const map = new Map();
// map.set('categories', ["books", "home", "games", "eletronics"]);
// map.set('products', [{books:{}, home: {}, games: {}, eletronics: {}}]);
// map.delete('categories');
// console.log(map.get("products")); 
for (const [, arr] of map) {
  for (const value  of arr) {
    const key = Object.keys(value);
    const { books, home, games, eletronics } = value;
    console.log(books, home, games, eletronics);
    for (const item of key) {
      console.log(item);
    }
  }
}

map.forEach(arr => {
  arr.forEach(item => {
    const {books, home, games, eletronics} = item;
    const key = Object.keys(item);
    console.log(books, home, games, eletronics);
    key.forEach(value => console.log(value));
  })
})