import { newGame, play } from ".";
import colors from "colors";

colors.enable();

const x = "a".blue + "b".yellow + "c".red;
console.log(x);

const input = require("prompt-sync")();
console.log("\x1b[33m Welcome to the app! \x1b[0m");

console.log(newGame());
let n: string | number = 1;
while (Number(n) !== 0) {
  let n = input("");
  if (Number(n) === 0) break;
  const response = play(String(n));

  console.log(response);
  const youWin = response.every((item) => {
    return item.color === "green";
  });
  // const youWin = response.every(({color}) => color === "green");

  if (youWin) {
    console.log("Hai vinto");
    break;
  }
}
