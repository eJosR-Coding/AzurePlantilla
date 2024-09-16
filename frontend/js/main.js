document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevenir el envío tradicional del formulario

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('../../backend/public/validateLogin.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '../html/landing.html';  
        } else {
            document.getElementById('error-message').innerText = 'Credenciales incorrectas';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
