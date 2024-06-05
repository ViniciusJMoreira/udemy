const generateRandonNames = function () {
  const names = [
    "Aragorn",
    "Legolas",
    "Gimli",
    "Gandalf",
    "Galadriel",
    "Arwen",
    "Eowyn",
    "Merry",
    "Pippin",
    "Sam",
    "Tyrion",
    "Daenerys",
    "Jon Snow",
    "Sansa",
    "Arya",
    "Cersei",
    "Jaime",
    "Theon",
    "Jorah",
    "Ygritte",
    "Geralt",
    "Yennefer",
    "Triss",
    "Ciri",
    "Cloud",
    "Tifa",
    "Aerith",
    "Sephiroth",
    "Squall",
    "Laguna",
    "Zidane",
    "Vivi",
    "Quina",
    "Freya",
    "Tidus",
    "Yuna",
    "Rikku",
    "Wakka",
    "Selphie",
    "Lightning",
    "Sazh",
    "Vanille",
    "Fang",
    "Snow",
    "Hope",
    "Noel",
    "Serah",
    "Lightning",
    "Noctis",
    "Prompto",
    "Ignis",
    "Gladiolus",
    "Aranea",
    "Ardyn",
    "Luna",
    "Iris",
    "Cor",
    "Cid",
    "Cloud Strife",
    "Tifa Lockhart",
    "Aerith Gainsborough",
    "Sephiroth",
    "Squall Leonhart",
    "Laguna Loire",
    "Zidane Tribal",
    "Vivi Ornitier",
    "Quina Quen",
    "Freya Crescent",
    "Tidus",
    "Yuna",
    "Rikku",
    "Wakka",
    "Selphie Tilmit",
    "Lightning Farron",
    "Sazh Katzroy",
    "Vanille",
    "Fang",
    "Snow Villiers",
    "Hope Estheim",
    "Noel Kreiss",
    "Serah Farron",
    "Noctis Caelum",
    "Prompto Argentum",
    "Ignis Scientia",
    "Gladiolus Amicitia",
    "Aranea Highwind",
    "Ardyn Izunia",
    "Luna Freya Nox Fleuret",
    "Iris Amicitia",
    "Cor Leonis",
    "Cid Sophius",
  ];
  return names[Math.floor(Math.random() * names.length)];
};

const generateRandonRace = function () {
  const races = [
    "Humano",
    "Elfo Noturno",
    "Anão",
    "Gnomo",
    "Orc",
    "Troll",
    "Goblin",
  ];
  return races[Math.floor(Math.random() * races.length)];
};

const generateRandonClass = function () {
  const classes = [
    "Mago",
    "Sacerdotista",
    "Guerreiro",
    "Ladino",
    "Caçador",
    "Druida",
    "Paladino",
  ];
  return classes[Math.floor(Math.random() * classes.length)];
};

class Personagen {
  constructor() {
    this.nivel = Math.floor(Math.random() * 100);
    this.nome = generateRandonNames();
    this.raca = generateRandonRace();
    this.classe = generateRandonClass();
  }
}

const personagens = [];

for(let i=0; i<30; i++) personagens.push(new Personagen())

module.exports = personagens;