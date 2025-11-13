const bibliotheque = [
    { code: 12, titre: "Clean Code", auteur: "Robert C. Martin", annee: 2008, disponible: true, prix: 150 },
    { code: 45, titre: "Eloquent JavaScript", auteur: "Marijn Haverbeke", annee: 2018, disponible: true, prix: 200 }
];

function afficherLivre(livres = bibliotheque) {
    const container = document.getElementById('livres-container');
    container.innerHTML = "";

    livres.forEach(livre => {
        const div = document.createElement('div');
        div.innerHTML = `
<p>Code: ${livre.code}</p>
<p>Titre: ${livre.titre}</p>
<p>Auteur: ${livre.auteur}</p>
<p>Année: ${livre.annee}</p>
<p>Prix: ${livre.prix} DH</p>
<p>Disponible: ${livre.disponible ? "Oui" : "Non"}</p>
<button onclick="supprimerLivre(${livre.code})">Supprimer</button>
        `;
        container.appendChild(div);
    });

    afficherStats();
}

function supprimerLivre(code) {
    const index = bibliotheque.findIndex(l => l.code === code);
    if (index >= 0) {
        bibliotheque.splice(index, 1);
        afficherLivre();
    }
}

function afficherStats() {
    const total = bibliotheque.length;
    const disponible = bibliotheque.filter(l => l.disponible).length;
    document.getElementById('stats-footer').innerText = `Total des livres: ${total} | Livres disponibles: ${disponible}`;
}


function rechercheLivre(titre) {
    return bibliotheque.filter(l => l.titre.toLowerCase().includes(titre.toLowerCase()));
}

document.getElementById('btn-recherche').addEventListener('click', function() {
    const txt = document.getElementById('recherche').value;
    afficherLivre(rechercheLivre(txt));
});

function ajouterLivre(livre) {
    bibliotheque.push(livre);
    afficherLivre();
}

document.getElementById('btn-ajouter-popup').addEventListener('click', function() {
    window.open("ajouter-livre.html", "Ajouter Livre", "width=400,height=500");
});
afficherLivre();