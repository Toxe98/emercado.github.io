document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

if(isLoggedin === 'true' && username){
    usernameElement.textContent = username;
    logoutButton.style.display="block";
} else {
    window.location.href = 'login.html'
    loginButton.style.display='none';
};

logoutButton.addEventListener('click', function(){
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username")
    window.location.href = 'login.html'
});
document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("loginForm");
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if(username === 'admin@gmail.com' && password ==='1234'){
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", username);

            window.location.href = 'index.html';
        } else {
            alert("Usuario o contraseña incorrectos.");
        }

    });
});