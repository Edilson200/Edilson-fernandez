if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'index.html'; // Redirige a la página de inicio de sesión si no está autenticado
}
