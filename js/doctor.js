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

    // Gestion des consultations
    const consultations = document.querySelectorAll('tbody tr');
    consultations.forEach(consultation => {
        const status = consultation.querySelector('td:nth-child(4)');
        const actionButton = consultation.querySelector('.action-btn');
        
        if (status.textContent === 'En cours') {
            status.style.color = '#e67e22';
            actionButton.textContent = 'Voir dossier';
        } else if (status.textContent === 'En attente') {
            status.style.color = '#e74c3c';
            actionButton.textContent = 'Préparer';
        }

        actionButton.addEventListener('click', function() {
            const patientName = consultation.querySelector('td:nth-child(2)').textContent;
            console.log(`Action sur le dossier de ${patientName}`);
            // Ici, vous pouvez ajouter la logique pour chaque action
        });
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