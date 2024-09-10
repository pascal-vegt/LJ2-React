const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

const names = characters.map((character) => {
  return character.name;
});

const heights = characters.map((character) => {
  return `${character.height}cm`;
});

const firstNames = characters.map((character) => {
  return character.name.split(" ")[0];
});

console.log("=+=---------------All-character-names--------------------=+=");
console.log(names);
console.log("=+=---------------All-character-heights--------------------=+=");
console.log(heights);
console.log("=+=-------------All-character-first-names-------------------=+=");
console.log(firstNames);

console.log(
  "=+=---------Character-with-mass-greater-than-100--------------=+="
);

const findMass = characters.filter((character) => {
  return parseInt(character.mass) > 100;
});

console.log(findMass);

console.log("=+=--------Characters-with-height-less-than-200-----------=+=");

const findHeight = characters.filter((character) => {
  return parseInt(character.height) < 200;
});

console.log(findHeight);

console.log("=+=----------------------Find-Men-----------------------=+=");

const grindr = characters.filter((character) => {
  return character.gender === "male";
});

console.log(grindr);

console.log("=+=---------------------Find-Women----------------------=+=");

const tinder = characters.filter((character) => {
  return character.gender === "female";
});

console.log(tinder);

console.log("=+=----------------------------------------------=+=");

// EVERY
console.log("=+=---------------EVERY-questions-------------------=+=");
console.log("1. Does every character have blue eyes?");
const everyBlueEyes = characters.every(
  (character) => character.eye_color === "blue"
);
console.log(everyBlueEyes); // Output: false

console.log("2. Does every character have mass more than 40?");
const everyMassMoreThan40 = characters.every(
  (character) => parseInt(character.mass) > 40
);
console.log(everyMassMoreThan40); // Output: true

console.log("3. Is every character shorter than 200?");
const everyShorterThan200 = characters.every(
  (character) => parseInt(character.height) < 200
);
console.log(everyShorterThan200); // Output: true

console.log("4. Is every character male?");
const everyMale = characters.every((character) => character.gender === "male");
console.log(everyMale); // Output: false

// SOME
console.log("=+=---------------SOME-questions-------------------=+=");
console.log("1. Is there at least one male character?");
const someMale = characters.some((character) => character.gender === "male");
console.log(someMale); // Output: true

console.log("2. Is there at least one character with blue eyes?");
const someBlueEyes = characters.some(
  (character) => character.eye_color === "blue"
);
console.log(someBlueEyes); // Output: true

console.log("3. Is there at least one character taller than 200?");
const someTallerThan200 = characters.some(
  (character) => parseInt(character.height) > 200
);
console.log(someTallerThan200); // Output: true

console.log("4. Is there at least one character that has mass less than 50?");
const someMassLessThan50 = characters.some(
  (character) => parseInt(character.mass) < 50
);
console.log(someMassLessThan50); // Output: true
