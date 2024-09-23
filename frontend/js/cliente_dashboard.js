document.addEventListener('DOMContentLoaded', function () {
    // Solicitar la lista de pedidos del usuario
    fetch('../../backend/public/getUserOrders.php')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Mostrar el contenido de data en la consola
            
            const orderTable = document.getElementById('orderTableBody');
            
            // Verificar si 'data' es un array
            if (Array.isArray(data)) {
                if (orderTable) {
                    data.forEach(order => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${order.id}</td>
                            <td>${order.fecha}</td>
                            <td>${order.estado}</td>
                            <td>${order.total}</td>
                        `;
                        orderTable.appendChild(row);
                    });
                } else {
                    console.error('El elemento con ID "orderTableBody" no existe.');
                }
            } else {
                console.error('La respuesta del servidor no es un array:', data);
            }
        })
        .catch(error => console.error('Error:', error));
});
