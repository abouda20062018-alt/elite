/* =====================================================
   QUESTIONS PYTHON
===================================================== */

const questionsPython = [

    {
        question: "À quoi sert Python ?",
        rep1: "Créer des logiciels et des sites web",
        rep2: "Créer uniquement des images",
        correcte: 1
    },

    {
        question: "Python est-il facile à apprendre ?",
        rep1: "Oui",
        rep2: "Non",
        correcte: 1
    },

    {
        question: "Quel symbole permet d'écrire un commentaire en Python ?",
        rep1: "#",
        rep2: "$",
        correcte: 1
    },

    {
        question: "Python peut-il être utilisé pour l'intelligence artificielle ?",
        rep1: "Oui",
        rep2: "Non",
        correcte: 1
    },

    {
        question: "Quelle fonction permet d'afficher un texte en Python ?",
        rep1: "print()",
        rep2: "displayText()",
        correcte: 1
    },

    {
        question: "Quelle extension utilise généralement un fichier Python ?",
        rep1: ".py",
        rep2: ".html",
        correcte: 1
    },

    {
        question: "Comment créer une variable en Python ?",
        rep1: "x = 10",
        rep2: "variable == 10",
        correcte: 1
    },

    {
        question: "Quel mot-clé permet de créer une condition ?",
        rep1: "if",
        rep2: "condition",
        correcte: 1
    },

    {
        question: "Quelle boucle permet de parcourir une liste ?",
        rep1: "for",
        rep2: "repeatOnly",
        correcte: 1
    },

    {
        question: "Python est-il un langage de programmation ?",
        rep1: "Oui",
        rep2: "Non",
        correcte: 1
    }

];



/* =====================================================
   QUESTIONS SCRATCH
===================================================== */

const questionsScratch = [

    {
        question: "À quoi sert Scratch ?",
        rep1: "Créer des jeux et des animations",
        rep2: "Créer uniquement des documents",
        correcte: 1
    },

    {
        question: "Scratch utilise principalement quoi pour programmer ?",
        rep1: "Des blocs",
        rep2: "Des câbles électriques",
        correcte: 1
    },

    {
        question: "Quel personnage est souvent présent au début d'un projet Scratch ?",
        rep1: "Le chat",
        rep2: "Un robot réel",
        correcte: 1
    },

    {
        question: "Peut-on créer un jeu avec Scratch ?",
        rep1: "Oui",
        rep2: "Non",
        correcte: 1
    },

    {
        question: "Scratch permet-il de créer des animations ?",
        rep1: "Oui",
        rep2: "Non",
        correcte: 1
    },

    {
        question: "Comment appelle-t-on les personnages dans Scratch ?",
        rep1: "Sprites",
        rep2: "Serveurs",
        correcte: 1
    },

    {
        question: "Quelle catégorie permet de déplacer un personnage ?",
        rep1: "Mouvement",
        rep2: "Impression",
        correcte: 1
    },

    {
        question: "Peut-on ajouter des sons dans Scratch ?",
        rep1: "Oui",
        rep2: "Non",
        correcte: 1
    },

    {
        question: "Scratch est-il adapté aux débutants ?",
        rep1: "Oui",
        rep2: "Non",
        correcte: 1
    },

    {
        question: "Scratch est-il un langage de programmation visuel ?",
        rep1: "Oui",
        rep2: "Non",
        correcte: 1
    }

];



/* =====================================================
   CHOIX AUTOMATIQUE DU QUIZ
===================================================== */

let questions = [];

const titrePage = document.title.toLowerCase();

if (titrePage.includes("scratch")) {

    questions = questionsScratch;

} else if (titrePage.includes("python")) {

    questions = questionsPython;

}



/* =====================================================
   VARIABLES
===================================================== */

let numero = 0;

let score = 0;

let dejaVerifie = false;



/* =====================================================
   COMMENCER LE QUIZ
===================================================== */

function commencerQuiz() {

    numero = 0;

    score = 0;

    dejaVerifie = false;


    document.getElementById("scoreValue").innerHTML = "0";

    document.getElementById("intro").style.display = "none";

    document.getElementById("resultatFinal").style.display = "none";

    document.getElementById("quiz").style.display = "flex";


    afficherQuestion();
}



/* =====================================================
   AFFICHER QUESTION
===================================================== */

function afficherQuestion() {

    if (questions.length === 0) {
        return;
    }


    document.getElementById("question").innerHTML =
        questions[numero].question;


    document.getElementById("label1").innerHTML =
        questions[numero].rep1;


    document.getElementById("label2").innerHTML =
        questions[numero].rep2;


    document.getElementById("numeroQuestion").innerHTML =
        numero + 1;


    document.getElementById("totalQuestions").innerHTML =
        questions.length;


    document.getElementById("totalQuestions2").innerHTML =
        questions.length;


    document.getElementById("progression").innerHTML =
        "Question " +
        (numero + 1) +
        " sur " +
        questions.length;


    document.getElementById("rep1").checked = false;

    document.getElementById("rep2").checked = false;


    document.getElementById("resultat").innerHTML = "";

    document.getElementById("resultat").className = "";


    dejaVerifie = false;


    if (numero === questions.length - 1) {

        document.getElementById("btnSuivant").innerHTML =
            "🏆 Voir mon résultat";

    } else {

        document.getElementById("btnSuivant").innerHTML =
            "Question suivante →";

    }

}



/* =====================================================
   VERIFIER REPONSE
===================================================== */

function verifier() {

    let resultat =
        document.getElementById("resultat");


    if (dejaVerifie) {
        return;
    }


    let reponse = 0;


    if (document.getElementById("rep1").checked) {

        reponse = 1;

    } else if (document.getElementById("rep2").checked) {

        reponse = 2;

    }


    if (reponse === 0) {

        resultat.innerHTML =
            "⚠ Choisissez une réponse";

        resultat.className = "non-valide";

        return;
    }


    if (reponse === questions[numero].correcte) {

        resultat.innerHTML =
            "✓ Bonne réponse !";

        resultat.className =
            "valide";

        score++;

    } else {

        resultat.innerHTML =
            "✗ Mauvaise réponse";

        resultat.className =
            "non-valide";

    }


    dejaVerifie = true;


    document.getElementById("scoreValue").innerHTML =
        score;

}



/* =====================================================
   QUESTION SUIVANTE
===================================================== */

function suivant() {

    /*
       On vérifie d'abord que l'utilisateur
       a répondu à la question.
    */

    if (!dejaVerifie) {

        document.getElementById("resultat").innerHTML =
            "⚠ Vérifiez votre réponse avant de continuer";

        document.getElementById("resultat").className =
            "non-valide";

        return;
    }


    if (numero === questions.length - 1) {

        afficherResultatFinal();

        return;
    }


    numero++;

    afficherQuestion();

}



/* =====================================================
   RESULTAT FINAL
===================================================== */

function afficherResultatFinal() {

    document.getElementById("quiz").style.display =
        "none";


    document.getElementById("resultatFinal").style.display =
        "flex";


    document.getElementById("scoreFinal").innerHTML =
        score;


    let message =
        document.getElementById("messageFinal");


    let medaille =
        document.getElementById("medaille");



    /*
       10 / 10
    */

    if (score === 10) {

        message.innerHTML =
            "🌟 Parfait ! Tu as réussi toutes les questions !";

        medaille.innerHTML =
            "🥇";

    }


    /*
       8 ou 9
    */

    else if (score >= 8) {

        message.innerHTML =
            "👏 Excellent travail !";

        medaille.innerHTML =
            "🥈";

    }


    /*
       5 à 7
    */

    else if (score >= 5) {

        message.innerHTML =
            "👍 Bravo ! Continue à apprendre !";

        medaille.innerHTML =
            "🥉";

    }


    /*
       Moins de 5
    */

    else {

        message.innerHTML =
            "💪 Continue tes efforts et réessaie !";

        medaille.innerHTML =
            "📚";

    }

}



/* =====================================================
   RECOMMENCER
===================================================== */

function recommencerQuiz() {

    document.getElementById("resultatFinal").style.display =
        "none";

    commencerQuiz();

}



/* =====================================================
   RETOUR À LA PAGE D'ACCUEIL
===================================================== */

function retourAccueil() {

    window.location.href =
        "projet.html";

}



/* =====================================================
   ANIMATION
===================================================== */

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});