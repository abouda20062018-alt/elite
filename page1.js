function verifierMailMdp() {

    let mail = document.getElementById("mail").value.trim();
    let mdp = document.getElementById("mdp").value;

    if (mail === "") {

        alert("Email obligatoire");
        return false;

    }

    else if (!mail.includes("@")) {

        alert("@ obligatoire");
        return false;

    }

    else if (mdp === "") {

        alert("Mot de passe obligatoire");
        return false;

    }

    else if (mdp.length < 8) {

        alert("Mot de passe : minimum 8 caractères");
        return false;

    }

    else if (!/[A-Za-z]/.test(mdp)) {

        alert("Le mot de passe doit contenir des lettres");
        return false;

    }

    else if (!/[0-9]/.test(mdp)) {

        alert("Le mot de passe doit contenir des chiffres");
        return false;

    }

    else {

        alert("confirmer");
        return true;

    }
}


function verifier() {

    if (!verifierMailMdp()) {

        return false;

    }

    alert("Connexion réussie !");

    window.location.href = "../tache1/projet.html";

    return false;
}


function verf() {

    let mail = document.getElementById("mail").value.trim();
    let code = document.getElementById("code").value.trim();

    if (mail === "") {

        alert("Email obligatoire");
        return false;

    }

    else if (!mail.includes("@")) {

        alert("@ obligatoire");
        return false;

    }

    else if (code === "") {

        alert("Code obligatoire");
        return false;

    }

    else if (!/^[0-9]{4}$/.test(code)) {

        alert("Code doit contenir exactement 4 chiffres");
        return false;

    }

    alert("Code vérifié avec succès !");

    window.location.href = "oblier1.html";

    return false;
}


function modifierMotDePasse() {

    let mdp = document.getElementById("mdp").value;
    let confirm = document.getElementById("confirm").value;

    if (mdp === "") {

        alert("Mot de passe obligatoire");
        return false;

    }

    else if (mdp.length < 8) {

        alert("Mot de passe : minimum 8 caractères");
        return false;

    }

    else if (!/[A-Za-z]/.test(mdp)) {

        alert("Le mot de passe doit contenir des lettres");
        return false;

    }

    else if (!/[0-9]/.test(mdp)) {

        alert("Le mot de passe doit contenir des chiffres");
        return false;

    }

    else if (!/[^A-Za-z0-9]/.test(mdp)) {

        alert("Le mot de passe doit contenir un symbole");
        return false;

    }

    else if (confirm === "") {

        alert("Confirmation du mot de passe obligatoire");
        return false;

    }

    else if (confirm !== mdp) {

        alert("Les mots de passe ne sont pas identiques");
        return false;

    }

    else {

        alert("Mot de passe modifié avec succès !");

        window.location.href = "../tache1/projet.html";

        return false;

    }
}


function verif1() {

    let mail = document.getElementById("mail").value.trim();
    let code = document.getElementById("code").value.trim();
    let mdp = document.getElementById("mdp").value;
    let conmdp = document.getElementById("conmdp").value;

    if (mail === "") {

        alert("Email obligatoire");
        return false;

    }

    else if (!mail.includes("@")) {

        alert("@ obligatoire");
        return false;

    }

    else if (code === "") {

        alert("Code obligatoire");
        return false;

    }

    else if (!/^[0-9]{4}$/.test(code)) {

        alert("Code doit contenir exactement 4 chiffres");
        return false;

    }

    else if (mdp === "") {

        alert("Mot de passe obligatoire");
        return false;

    }

    else if (mdp.length < 8) {

        alert("Mot de passe : minimum 8 caractères");
        return false;

    }

    else if (!/[A-Za-z]/.test(mdp)) {

        alert("Le mot de passe doit contenir des lettres");
        return false;

    }

    else if (!/[0-9]/.test(mdp)) {

        alert("Le mot de passe doit contenir des chiffres");
        return false;

    }

    else if (!/[^A-Za-z0-9]/.test(mdp)) {

        alert("Le mot de passe doit contenir un symbole");
        return false;

    }

    else if (conmdp === "") {

        alert("Confirmation du mot de passe obligatoire");
        return false;

    }

    else if (conmdp !== mdp) {

        alert("Les mots de passe ne sont pas identiques");
        return false;

    }

    alert("Code valide");

    return true;
}


function verif2() {

    return verifierMailMdp();

}


function creerCompte() {

    let nom = document.getElementById("nom").value.trim();
    let pre = document.getElementById("pre").value.trim();
    let daten = document.getElementById("daten").value;
    let mail = document.getElementById("mail").value.trim();
    let mdp = document.getElementById("mdp").value;
    let confirm = document.getElementById("confirm").value;

    if (nom === "") {

        alert("Nom obligatoire");
        return false;

    }

    else if (pre === "") {

        alert("Prénom obligatoire");
        return false;

    }

    else if (daten === "") {

        alert("Date de naissance obligatoire");
        return false;

    }

    else if (new Date(daten) > new Date()) {

        alert("La date de naissance ne peut pas être dans le futur");
        return false;

    }

    else if (mail === "") {

        alert("Email obligatoire");
        return false;

    }

    else if (!mail.includes("@")) {

        alert("@ obligatoire");
        return false;

    }

    else if (mdp === "") {

        alert("Mot de passe obligatoire");
        return false;

    }

    else if (mdp.length < 8) {

        alert("Mot de passe : minimum 8 caractères");
        return false;

    }

    else if (!/[A-Za-z]/.test(mdp)) {

        alert("Le mot de passe doit contenir des lettres");
        return false;

    }

    else if (!/[0-9]/.test(mdp)) {

        alert("Le mot de passe doit contenir des chiffres");
        return false;

    }

    else if (!/[^A-Za-z0-9]/.test(mdp)) {

        alert("Le mot de passe doit contenir un symbole");
        return false;

    }

    else if (confirm === "") {

        alert("Confirmation du mot de passe obligatoire");
        return false;

    }

    else if (confirm !== mdp) {

        alert("Les mots de passe ne sont pas identiques");
        return false;

    }

    else {

        alert("Compte créé avec succès !");

        window.location.href = "../tache1/projet.html";

        return false;

    }
}


function changerLangue() {

    let langue = document.getElementById("langue").value;

    if (langue === "fr") {

        document.getElementById("titre").innerHTML =
            "Créer un compte";

        document.getElementById("description").innerHTML =
            "Créer votre nouvel espace utilisateur";

        document.getElementById("labelNom").innerHTML =
            "Nom";

        document.getElementById("labelPre").innerHTML =
            "Prénom";

        document.getElementById("labelDate").innerHTML =
            "Date de naissance";

        document.getElementById("labelMail").innerHTML =
            "E-mail";

        document.getElementById("labelMdp").innerHTML =
            "Mot de passe";

        document.getElementById("labelConfirm").innerHTML =
            "Confirmer le mot de passe";

        document.getElementById("bouton").value =
            "Créer le compte";
    }

    else if (langue === "en") {

        document.getElementById("titre").innerHTML =
            "Create an account";

        document.getElementById("description").innerHTML =
            "Create your new user space";

        document.getElementById("labelNom").innerHTML =
            "Last name";

        document.getElementById("labelPre").innerHTML =
            "First name";

        document.getElementById("labelDate").innerHTML =
            "Date of birth";

        document.getElementById("labelMail").innerHTML =
            "E-mail";

        document.getElementById("labelMdp").innerHTML =
            "Password";

        document.getElementById("labelConfirm").innerHTML =
            "Confirm password";

        document.getElementById("bouton").value =
            "Create account";
    }

    else if (langue === "ar") {

        document.getElementById("titre").innerHTML =
            "إنشاء حساب";

        document.getElementById("description").innerHTML =
            "أنشئ مساحة المستخدم الخاصة بك";

        document.getElementById("labelNom").innerHTML =
            "اللقب";

        document.getElementById("labelPre").innerHTML =
            "الاسم";

        document.getElementById("labelDate").innerHTML =
            "تاريخ الميلاد";

        document.getElementById("labelMail").innerHTML =
            "البريد الإلكتروني";

        document.getElementById("labelMdp").innerHTML =
            "كلمة المرور";

        document.getElementById("labelConfirm").innerHTML =
            "تأكيد كلمة المرور";

        document.getElementById("bouton").value =
            "إنشاء الحساب";
    }
}