// Generating random colors functionality
export const HexProvider = () => {
  const hexSymbols = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let code = "#";
  const colorCodes = [];

  //generating 4 random hexes and adding them to the array
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 6; j++) {
      code += hexSymbols[Math.floor(Math.random() * hexSymbols.length)];
    }
    colorCodes.push(code);
    code = "#";
  }

  return colorCodes;
};
