function generator(type, length) {
  var newString = "";
  for (var i = 0; i < length; i++) {
    var random_num = Math.floor(Math.random() * type.length);
    newString += type[random_num];
  }
  return newString;
}

export default (inputs) => {
  const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const smalls = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  var finalPassword =
    generator(capitals, Number(inputs.capital)) +
    generator(smalls, Number(inputs.small)) +
    generator(numbers, Number(inputs.number)) +
    generator(symbols, Number(inputs.symbols));
  var shuffled = finalPassword
    .split("")
    .sort(() => {
      return 0.5 - Math.random();
    })
    .join("");
  return shuffled;
};
