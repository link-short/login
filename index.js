const loginForm = document.getElementById('loginForm');
const errorFrame = document.getElementById('errorFrame');
let errorPassword_or_name = "Username or passsword error!!!";

errorFrame.style.visibility = 'hidden';

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращает стандартную отправку формы

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Здесь вы можете добавить свою логику проверки пользователя
    // Например, сравнить введенные данные с заранее заданными
    if (username === 'admin' && password === '12345') {
        window.location.assign('https://link-short.github.io/login/panel');
        alert('Вход выполнен успешно!');
        // Здесь можно перенаправить пользователя на другую страницу или выполнить другие действия
    } else {
         errorFrame.style.visibility = 'visible';
         errorFrame.textContent = errorPassword_or_name;
         const obj = document.getElementById('password')
         obj.Value= " ";
    }
});
