import colors, { Color } from "colors";

colors.enable();

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const a = [
  { color: "red", letter: "l" },
  { color: "green", letter: "a" },
  { color: "yellow", letter: "b" },
];

let sum = 0;

const response = a.reduce((sum, item, index) => {
  return sum + item.letter[`bg${capitalize(item.color)}` as any];
}, "");
console.log(response);

const name = "Pippo";

const {
  address,
  city: { name: n, greater },
  civic,
  vatCode,
} = {
  address: "Via Motta",
  city: {
    name: "Catania",
    greater: "Metropolitan Area of Catania",
  },
  civic: "140",
  vatCode: "95037",
};

const finalAddress2 = `io abito in ${address} a ${n}`;
console.log(finalAddress2);

const [{ letter: l1, color: c2 }, { letter: l2, color: c4 }, pippo] = [
  { color: "red", letter: "l" },
  { color: "green", letter: "a" },
  { color: "yellow", letter: "b" },
];

console.log(l1, l2);
