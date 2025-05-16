document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Будь ласка, заповніть усі поля.');
    return;
  }

  alert(`Дякую, ${name}! Ваше повідомлення відправлено.`);
  console.log({ name, email, message });

});

