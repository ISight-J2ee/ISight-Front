document.addEventListener('DOMContentLoaded', function() {
    // Gestion du menu mobile
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-button';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.dashboard-header').prepend(menuButton);

    menuButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Gestion des actions rapides
    const actionButtons = document.querySelectorAll('.action-buttons button');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim();
            console.log(`Action rapide sélectionnée: ${action}`);
            // Ici, vous pouvez ajouter la logique pour chaque action
        });
    });

    // Gestion des rendez-vous
    const appointments = document.querySelectorAll('tbody tr');
    appointments.forEach(appointment => {
        const status = appointment.querySelector('td:nth-child(5)');
        if (status.textContent === 'En attente') {
            status.style.color = '#e74c3c';
        } else if (status.textContent === 'Confirmé') {
            status.style.color = '#2ecc71';
        }
    });

    // Gestion de la déconnexion
    const logoutButton = document.querySelector('.sidebar-menu li:last-child');
    logoutButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // Animation des éléments
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}); 