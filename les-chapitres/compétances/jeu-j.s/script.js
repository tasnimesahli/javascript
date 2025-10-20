let personalP = prompt("Saisir votre nom pour commencer le quiz :");

const questions = [
  { q: "Maquetter une application", r: "C1" },
  { q: "Réaliser une interface utilisateur web statique", r: "C2" },
  { q: "Développer une interface utilisateur web dynamique", r: "C3" },
  { q: "Créer une base de données - niveau 1", r: "C4" },
  { q: "Développer les composants d’accès aux données - niveau 1", r: "C5" },
  { q: "Développer la partie back-end d’une application web - niveau 1", r: "C6" },
  { q: "Réaliser une interface utilisateur avec un CMS ou e-commerce", r: "C7" },
  { q: "Utiliser un Framework FrontEnd (React, Vue...)", r: "C8" }
];
let score = 0;

function quiz() {
  for (let i = 0; i < questions.length; i++) {
    console.log("Question " + (i + 1));
    
    let reponse = prompt(questions[i].q);

    if (reponse !== "" && reponse !== null && reponse.toUpperCase() === questions[i].r) {
      console.log("✅ Correct! La réponse est " + questions[i].r);
      score++;
    } else {
      console.log("❌ Incorrect. La bonne réponse est " + questions[i].r);
    }
  }

  console.log("Score final: " + score + " / " + questions.length);

  if (score === questions.length) {
    console.log("🌟 Bravo ! Excellent travail, tu connais toutes les compétences!");
  } else if (score >= 4) {
    console.log("👍 Bien joué, continue d'apprendre!");
  } else {
    console.log("⚠️ Courage , révise encore les compétences.");
  }
}

quiz();
