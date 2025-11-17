const bibliotheque = [
    { code: 12, titre: "Clean Code", auteur: "Robert C. Martin", annee: 2008, disponible: true, prix: 150 },
    { code: 45, titre: "Eloquent JavaScript", auteur: "Marijn Haverbeke", annee: 2018, disponible: true, prix: 200 },
     { code: 17, titre: "Antigone", auteur: "Jean Anouilh", annee: 1946, disponible: true, prix: 43 }
];

let ordreCroissant = true; 

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

<!-- Bouton Réserver ou label Réservé -->
${livre.disponible ? `<button onclick="reserverLivre(${livre.code})">Réserver</button>` 
                  : `<span style="color:red;font-weight:bold">Réservé</span>`}

<button onclick="supprimerLivre(${livre.code})">Supprimer</button>
        `;
        container.appendChild(div);
    });

    afficherStats();
    afficherLivreLePlusCher();
}

function supprimerLivre(code) {
    const index = bibliotheque.findIndex(l => l.code === code);
    if (index >= 0) {
        bibliotheque.splice(index, 1);
        afficherLivre();
    }
}

function reserverLivre(code) {
    const livre = bibliotheque.find(l => l.code === code);
    if(livre && livre.disponible) {
        livre.disponible = false;
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
    const resultat = txt ? rechercheLivre(txt) : bibliotheque;
    afficherLivre(resultat);
});

function ajouterLivre(livre) {
    bibliotheque.push(livre);
    afficherLivre();
}

document.getElementById('btn-ajouter-popup').addEventListener('click', function() {
    window.open("ajouter-livre.html", "Ajouter Livre", "width=400,height=500");
});

function trierLivres() {
    bibliotheque.sort((a, b) => {
        if(a.titre.toLowerCase() < b.titre.toLowerCase()) return ordreCroissant ? -1 : 1;
        if(a.titre.toLowerCase() > b.titre.toLowerCase()) return ordreCroissant ? 1 : -1;
        return 0;
    });
    ordreCroissant = !ordreCroissant;
    afficherLivre();
}

document.getElementById('btn-trier').addEventListener('click', trierLivres);

function afficherLivreLePlusCher() {
    if(bibliotheque.length === 0) return;
    const plusCher = bibliotheque.reduce((prev, current) => (prev.prix > current.prix) ? prev : current);
    const footer = document.getElementById('stats-footer');
    footer.innerHTML += `<br><strong>Le livre le plus cher :</strong> ${plusCher.titre} - ${plusCher.prix} DH`;
}
afficherLivre();

