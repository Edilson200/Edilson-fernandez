const users = [
    { username: 'bici', password: '321' },
    { username: 'pedro', password: '458' },
    { username: 'moto', password: '2929' }
];

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('isLoggedIn', 'true');
        message.style.color = 'green';
        message.textContent = 'Inicio de sesión exitoso.';
        window.location.href = 'Menu.html'; // Redirige a la página principal
    } else {
        message.style.color = 'red';
        message.textContent = 'Usuario o contraseña incorrectos.';
    }
});
