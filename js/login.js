// Constantes para el formulario y el boton de inciar sesion.
const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");


// Agrego un evento al clickear el boton. Obtengo valores del input con datos del correo y la contraseña
loginBtn.addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() === '' || password === '') {
        
        alert('Por favor, ingresa un usuario y contraseña válidos.');
        
    } else {
        window.location.href = 'index.html';
    }
});



