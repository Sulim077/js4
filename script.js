const pet = {
  name: "Бобик",
  type: "пес",
  sound: "гав",
  say(text = this.sound) {
    return `${this.type} ${this.name} говорит ${text}`;
  },
};

console.log(pet.say());
console.log(pet.say("voff"));

const products = {
  potato: "овощи",
  carrot: "овощи",
  banana: "фрукты",
  orange: "фрукты",
  apple: "фрукты",
  strawberry: "ягоды",
  tomato: "овощи",
  melon: "фрукты",
  lemon: "фрукты",
};
const categoryCount = {};
for (const product in products) {
  const category = products[product];
  categoryCount[category] = (categoryCount[category] || 0) + 1;
}

console.log(categoryCount);

const cars = {
  Mercedes: { color: "silver", country: "Germany", year: 2005 },
  Lexus: { color: "red", country: "Japan", year: 2014 },
  Honda: { color: "blue", country: "Japan", year: 2017 },
  BMW: { color: "white", country: "Germany", year: 2012 },
  Ford: { color: "black", country: "USA", year: 2007 },
  Audi: { color: "gray", country: "Germany", year: 2009 },
  Hyundai: { color: "green", country: "South Korea", year: 2013 },
  Kia: { color: "yellow", country: "South Korea", year: 2011 },
  Volvo: { color: "brown", country: "Sweden", year: 2025 },
  Chevrolet: { color: "white", country: "USA", year: 2014 },
};
const carsArray = Object.entries(cars).map(([brand, details]) => ({
  brand,
  ...details,
}));

const sortByYear = (a, b) => b.year - a.year;
const sortedCars = [...carsArray].sort(sortByYear);
const youngestCars = sortedCars.slice(0, 3);
const oldestCars = sortedCars.slice(-3).reverse();
console.log("Три самых молодых автомобиля:");
console.table(youngestCars);
console.log("\nТри самых старых автомобиля:");
console.table(oldestCars);
