document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const errorMessages = [];

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const age = document.getElementById('age').value;
<<<<<<< HEAD
  const gender = document.querySelector('input[name="gender"]:checked');
=======
>>>>>>> db0b20f (push labs)
  const group = document.getElementById('group').value;

  if (!name) {
    errorMessages.push("Ім'я є обов'язковим.");
  }
  if (!email || !validateEmail(email)) {
    errorMessages.push("Будь ласка, введіть коректний email.");
  }
  if (!password) {
    errorMessages.push("Пароль є обов'язковим.");
  } else if (password.length < 6) {
    errorMessages.push("Пароль має бути не менше 6 символів.");
  }
  if (password !== confirmPassword) {
    errorMessages.push("Паролі не збігаються.");
  }
  if (!age || age < 10) {
    errorMessages.push("Вік має бути не менше 10 років.");
  }

  if (document.body.classList.contains('even') && !gender) {
    errorMessages.push("Будь ласка, виберіть стать.");
  }
  if (document.body.classList.contains('odd') && !group) {
    errorMessages.push("Будь ласка, виберіть групу.");
  }

  if (errorMessages.length > 0) {
    document.getElementById('errorMessages').innerHTML = errorMessages.join("<br>");
  } else {
    document.getElementById('errorMessages').innerHTML = "";
    alert("Реєстрація успішна!");
  }
});

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

const isEven = new Date().getSeconds() % 2 === 0;
if (isEven) {
  document.body.classList.add('even');
  document.getElementById('genderSection').style.display = 'block';
} else {
  document.body.classList.add('odd');
  document.getElementById('groupSection').style.display = 'block';
}

