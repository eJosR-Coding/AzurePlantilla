document.addEventListener('DOMContentLoaded', function () {
    fetch('../../backend/public/getSales.php')
        .then(response => response.json())
        .then(data => {
            const salesTable = document.getElementById('salesTableBody');
            data.forEach(sale => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${sale.fecha_venta}</td>
                    <td>${sale.cantidad}</td>
                    <td>${sale.precio_unitario}</td>
                    <td>${sale.total_venta}</td>
                `;
                salesTable.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
});
