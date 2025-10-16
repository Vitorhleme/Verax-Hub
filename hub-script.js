document.addEventListener('DOMContentLoaded', function() {
    
    // Lógica para expandir/recolher o menu lateral
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const appContainer = document.querySelector('.app-container');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('expanded');
            
            // Adiciona uma classe overlay no container principal para escurecer
            if (window.innerWidth <= 768) {
                appContainer.classList.toggle('sidebar-open');
            }
        });
    }

    // Lógica para o Gráfico de Custos (Chart.js)
    const ctx = document.getElementById('costsChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Combustível', 'Manutenção', 'Pneus', 'Multas', 'Peças'],
                datasets: [{
                    label: 'Custos do Mês',
                    data: [19500, 12300, 6800, 2250, 7000],
                    backgroundColor: [
                        '#2980b9', '#e67e22', '#27ae60', '#e74c3c', '#8e44ad'
                    ],
                    borderColor: '#1e1e2f',
                    borderWidth: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: '#ecf0f1',
                            font: { family: "'Poppins', sans-serif" }
                        }
                    }
                }
            }
        });
    }

});