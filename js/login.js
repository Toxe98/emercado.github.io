function auth() {
    let email = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(email == 'admin@gmail.com' && password == '1234'){
        window.location.assign('index.html');
        alert('Iniciando Sesión');     
    } else {
        alert("Datos Incorrectos, ingrese nuevamente");
        return;
    }  
};