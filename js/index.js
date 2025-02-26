// 1
const array = ["Mango", "Poly", "Ajax"];
const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};
logItems(array);
// 2
const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(" ");
  const wordsNumber = words.length;
  const price = wordsNumber * pricePerWord;
  return price;
};
const text = "I am Anton";
console.log(calculateEngravingPrice(text, 10));
// 3
const findLongestWord = function (string) {
  const words = string.split(" ");
  const longestWord = null;
  for (const word of words) {
    if (!longestWord || word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};
// 4
const formatString = function (string) {
  if (string.length > 40) {
    return string.slice(0, 40) + "...";
  } else {
    return string;
  }
};
console.log(formatString("Якийсь текст"));
// 5
const checkForSpam = function (message) {
  const lowerCaseMessage = message.toLowerCase();

  if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};
// 6
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число або клацніть на Cancel для завершення");
  if (input === null) {
    break;
  }
  const number = Number(input);
  if (isNaN(number)) {
    alert("Ви ввели не число, спробуйте ще раз");
    continue;
  }
  numbers.push(number);
}
if (numbers.length > 0) {
  for (const num of numbers) {
    total += num;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log("Ви не ввели жодного числа.");
}
