const username = prompt("Як вас звати?");

alert(`Привіт, ${username}! Радий тебе бачити!`);

const firstNumber = prompt("Введіть число:");
const secondNumber = prompt("Введіть наступне число:");

const result = `Добуток ${firstNumber * secondNumber}\nЧастка ${firstNumber / secondNumber}`;

alert(result);
console.log(result);

const userYear = prompt("Ваш рік народження:");
const userAge = Math.abs(userYear - new Date().getFullYear());
const staticAge = 20;

const ageDiff = Math.abs(userAge - staticAge);

if (userAge < staticAge)
  alert(`Ваш вік ${userAge}.\nВи молодше від мене на ${ageDiff} років.`);
else
  alert(`Ваш вік ${userAge}.\nВи старше від мене на ${ageDiff} років.`);
