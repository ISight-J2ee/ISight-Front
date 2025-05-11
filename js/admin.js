// Gestion du menu mobile
document.addEventListener('DOMContentLoaded', function() {
    // Ajout du bouton menu mobile
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-button';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.dashboard-header').prepend(menuButton);

    menuButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Gestion des clics sur les éléments du menu
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Simulation de navigation
            const action = this.textContent.trim();
            console.log(`Action sélectionnée: ${action}`);
            
            // Si c'est la déconnexion
            if (action === 'Déconnexion') {
                window.location.href = 'index.html';
            }
        });
    });

    // Animation des cartes statistiques
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}); 