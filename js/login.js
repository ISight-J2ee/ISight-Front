document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Simulation de vérification des identifiants
    if (username && password && role) {
        // Redirection vers le tableau de bord approprié
        switch(role) {
            case 'admin':
                window.location.href = 'admin-dashboard.html';
                break;
            case 'secretary':
                window.location.href = 'secretary-dashboard.html';
                break;
            case 'doctor':
                window.location.href = 'doctor-dashboard.html';
                break;
        }
    } else {
        alert('Veuillez remplir tous les champs');
    }
}); 