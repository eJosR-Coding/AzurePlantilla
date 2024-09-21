document.addEventListener('DOMContentLoaded', function () {
    fetch('../../backend/public/getClients.php')
        .then(response => response.json())
        .then(data => {
            const clientTable = document.getElementById('clientTableBody');
            data.forEach(client => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${client.nombre}</td>
                    <td>${client.correo_electronico}</td>
                    <td>${client.numero_contacto}</td>
                    <td>${client.segmento}</td>
                    <td><button class="delete-btn" data-id="${client.customer_id}">Eliminar</button></td>
                `;
                clientTable.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
});

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        const clientId = e.target.getAttribute('data-id');
        fetch('../../backend/public/deleteClient.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ clientId })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                e.target.closest('tr').remove();
            } else {
                alert('Error al eliminar cliente.');
            }
        })
        .catch(error => console.error('Error:', error));
    }
});
