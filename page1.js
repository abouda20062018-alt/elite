function verifierMailMdp() {

    let mail = document.getElementById("mail").value;
    let mdp = document.getElementById("mdp").value;

    if (mail == "") {
        alert("Email obligatoire");
        return false;
    }

    else if (!mail.includes("@")) {
        alert("@ obligatoire");
        return false;
    }

    else if (mdp == "") {
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

    return true;
}


function verifier() {

    if (verifierMailMdp()) {
        alert("Mot de passe valide");
        return true;
    }

    return false;
}


function verf() {

    let nom = document.getElementById("nom").value;
    let pre = document.getElementById("pre").value;
    let mdp = document.getElementById("mdp").value;
    let confirm = document.getElementById("confirm").value;


    if (nom == "") {
        alert("Nom obligatoire");
        return false;
    }

    else if (pre == "") {
        alert("Prénom obligatoire");
        return false;
    }


    else if (!verifierMailMdp()) {
        return false;
    }


    else if (confirm == "") {
        alert("Confirmation du mot de passe obligatoire");
        return false;
    }


    else if (confirm != mdp) {
        alert("Les mots de passe ne sont pas identiques");
        return false;
    }


    else {
        alert("Compte confirmé");
        return true;
    }
}function verif1() {

    let mail = document.getElementById("mail").value;
    let code = document.getElementById("code").value;
    let mdp = document.getElementById("mdp").value;
    let conmdp = document.getElementById("conmdp").value;
    if (mail == "") {

        alert("Email obligatoire");
        return false;

    } else if (!mail.includes("@")) {

        alert("@ obligatoire");
        return false;
    }
    else if (code == "") {

        alert("Code obligatoire");
        return false;

    } else if (code.length != 4) {

        alert("Code doit contenir exactement 4 chiffres");
        return false;

    } else if (!/^[0-9]+$/.test(code)) {

        alert("Code seulement chiffres");
        return false;
    }
    else if (mdp == "") {

        alert("Mot de passe obligatoire");
        return false;

    } else if (mdp.length < 8) {

        alert("Mot de passe : minimum 8 caractères");
        return false;

    } else if (!/[A-Za-z]/.test(mdp)) {

        alert("Le mot de passe doit contenir des lettres");
        return false;

    } else if (!/[0-9]/.test(mdp)) {

        alert("Le mot de passe doit contenir des chiffres");
        return false;

    } else if (!/[^A-Za-z0-9]/.test(mdp)) {

        alert("Le mot de passe doit contenir un symbole");
        return false;
    }
    else if (conmdp == "") {

        alert("Confirmation du mot de passe obligatoire");
        return false;

    } else if (conmdp != mdp) {

        alert("❌ Les mots de passe ne sont pas identiques");
        return false;
    }
    else {

        alert("Code valide");
        return true;
    }
}
function verif2(){
    let mail=document.getElementById("mail").value;
    let mdp=document.getElementById("mdp").value;
    if(!verifierMailMdp()){
        return false;
    }
    

}