document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('../../backend/public/validateLogin.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirigir según el rol
            if (data.role === 'admin') {
                window.location.href = '../html/admin_dashboard.html';
            } else {
                window.location.href = '../html/client_dashboard.html';
            }
        } else {
            document.getElementById('error-message').innerText = 'Credenciales incorrectas';
        }
    })
    .catch(error => console.error('Error:', error));
});
