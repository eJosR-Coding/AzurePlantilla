document.addEventListener('DOMContentLoaded', function () {
    // Solicitar la lista de usuarios al servidor
    fetch('../../backend/public/getUsers.php')
        .then(response => response.json())
        .then(data => {
            const userTable = document.getElementById('userTableBody');
            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.nombre}</td>
                    <td>${user.correo_electronico}</td>
                    <td>${user.rol}</td>
                    <td><button class="delete-btn" data-id="${user.user_id}">Eliminar</button></td>
                `;
                userTable.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
});

// Manejar la eliminación de usuarios
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        const userId = e.target.getAttribute('data-id');
        fetch('../../backend/public/deleteUser.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                e.target.closest('tr').remove();
            } else {
                alert('Error al eliminar usuario.');
            }
        })
        .catch(error => console.error('Error:', error));
    }
});
