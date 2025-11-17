// Fonction pour initialiser le comportement des boutons
function initialiserBoutons() {
    // Sélectionne tous les éléments avec la classe 'btn'
    const boutons = document.querySelectorAll('.btn');

    // Pour chaque bouton, ajoute un écouteur d'événement 'click'
    boutons.forEach(bouton => {
        bouton.addEventListener('click', () => {
            // Afficher une alerte avec le texte du bouton cliqué
            alert(`Vous avez cliqué sur le bouton : ${bouton.textContent}`);
        });
    });
}

// Assurez-vous que le script s'exécute après le chargement de la page
document.addEventListener('DOMContentLoaded', initialiserBoutons);
