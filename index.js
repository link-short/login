const loginForm = document.getElementById('loginForm');
const errorFrame = document.getElementById('errorFrame');
let errorPassword_or_name = "Username or passsword error!!!";

errorFrame.style.visibility = 'hidden';

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращает стандартную отправку формы

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;



    function hideErrorObj() {
      errorFrame.style.visibility = 'hidden';
    }
    // Здесь вы можете добавить свою логику проверки пользователя
    // Например, сравнить введенные данные с заранее заданными
    if (username === 'Winnigames2024' && password === 'kodiki8909') {
        location.href = "https://link-short.github.io/login/panel";
        hideErrorObj();
    } else {
         errorFrame.style.visibility = 'visible';
         errorFrame.textContent = errorPassword_or_name;
         setTimeout(hideErrorObj, 3000)
         password = 'kodiki8909';
    }
});
