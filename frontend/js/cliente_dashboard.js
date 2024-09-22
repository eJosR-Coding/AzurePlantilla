document.addEventListener('DOMContentLoaded', function () {
    // Solicitar la lista de pedidos del usuario
    fetch('../../backend/public/getUserOrders.php') // Debe devolver solo los pedidos del usuario actual
        .then(response => response.json())
        .then(data => {
            const orderTable = document.getElementById('orderTableBody');
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
        })
        .catch(error => console.error('Error:', error));
});
