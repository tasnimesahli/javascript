const formLivre = document.getElementById("formLivre");

formLivre.addEventListener("submit", function(e) {
    e.preventDefault();

    const livre = {
        code: Number(document.getElementById("code").value),
        titre: document.getElementById("titre").value,
        auteur: document.getElementById("auteur").value,
        annee: Number(document.getElementById("annee").value),
        prix: Number(document.getElementById("prix").value),
        disponible: document.getElementById("disponible").checked
    };

    if (window.opener && window.opener.ajouterLivre) {
        window.opener.ajouterLivre(livre);
    }

    alert("Livre ajouté !");
    window.close(); 
});