const randomName = require("random-italian-names");

let currentName: string;

const newGame = () => {
  currentName = randomName.random() as string;
  return currentName.split("").map((letter, index) => {
    return index == 0 ? letter : "_";
  });
};

const play = (test: string) => {
  if (test.length !== currentName.length) {
    throw new Error("Size of error");
  }
  const response = test.split("").map((letter, index) => {
    return {
      letter, // letter: letter
      currentNameLetter: currentName[index],
      color: letter === currentName[index] ? "green" : "red",
    };
  });
  const missingLetters = response
    .filter((item) => {
      return item.color === "red";
    })
    // .filter((item) => item.color === "red")
    // .filter(({color}) => color === "red")
    .map((item) => item.currentNameLetter);
  //.map(({currentNameLetter}) => currentNameLetter)

  return response.map((item) => {
    if (item.color === "green") {
      return {
        letter: item.letter,
        color: item.color,
      };
    } else {
      return {
        letter: item.letter,
        color: missingLetters.includes(item.letter) ? "yellow" : "red",
      };
    }
  });
};

export { newGame, play };
