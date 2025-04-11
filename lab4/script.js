function hello() {
  const username = prompt("Введіть своє ім'я");
  alert(`Привіт ${username}! Радий тебе бачити`);
}

function calculateAge() {
  const birthYear = parseInt(prompt("Введіть рік народження:"));
  const currentYear = new Date().getFullYear();

  if (!isNaN(birthYear) && birthYear > 1900 && birthYear <= currentYear) {
    const age = currentYear - birthYear;
    alert(`Ваш вік: ${age} років`);
  } else {
    alert("Будь ласка, введіть коректний рік народження.");
  }
}

function numbers() {
  const firstNumber = Number(prompt("Enter first number:"));
  const secondNumber = Number(prompt("Enter second number:"));

  alert(`Добуток: ${firstNumber * secondNumber}\nЧастка:${firstNumber / secondNumber}`);
  console.log(firstNumber * secondNumber);
}

calculateAge();
