const readline = require('readline');
const { SliceArr } = require('./main3.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateRandomArray(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * 100));
}

rl.question('Бажаєте ввести власний масив (y/n)? ', (answer) => {
  if (answer.trim().toLowerCase() === 'n') {
    const randomArray = generateRandomArray(10); // Генеруємо випадковий масив
    console.log("Згенерований випадковий масив:", randomArray);
    const sortedArray = SliceArr(randomArray);
    console.log("Відсортований масив:", sortedArray);
    rl.close();
  } else {
    rl.question('Введіть числа, розділені пробілом: ', (input) => {
      const unsortedArray = input.split(' ').map(Number);
      console.log('Згенерований вами масив', unsortedArray)
      const sortedArray = SliceArr(unsortedArray);
      console.log("Відсортований масив:", sortedArray);
      rl.close();
    });
  }
});