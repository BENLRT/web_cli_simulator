let currentFragment = 1;
const terminal = document.getElementById("terminal");
const inputField = document.getElementById("userInput");

function slowPrint(text, color = "") {
    return new Promise(resolve => {
        let i = 0;
        let interval = setInterval(() => {
            terminal.innerHTML += `<span class="${color}">${text[i]}</span>`;
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                terminal.innerHTML += "<br>";
                resolve();
            }
        }, 30);
    });
}

async function startProtocol() {
    await slowPrint(">>> Connexion au centre de contrôle...", "cyan");
    await slowPrint(">>> ...", "cyan");
    await slowPrint(">>>  ...", "cyan");
    await slowPrint("/!\\ ALERTE : Mémoire insuffisante !! /!\\", "red");
    await slowPrint("/!\\ ALERTE : Mémoire insuffisante !! /!\\", "red");
    await slowPrint("/!\\ ALERTE : Mémoire insuffisante !! /!\\", "red");
    await slowPrint("###############################################################", "red");
    await slowPrint("###############  PROTOCOLE D'URGENCE ENCLENCHÉ  ###############", "red");
    await slowPrint("###############################################################\n", "red");
    await slowPrint(">>> Pour finaliser le protocole et sauver tous les membres, vous devez restaurer les fragments de mémoire corrompue", "yellow");
    await slowPrint(">>> En cas d'échec, nous serons TOUS effacés !  ", "yellow");
    await slowPrint(">>> Faites appel à vos souvenirs !  ", "yellow");
    askQuestion();
}

async function askQuestion() {
    if (currentFragment === 1) {
        slowPrint(">>> Fragment 1. Combien de personnes avez-vous libérées ? ", "yellow");
    } 
    else if (currentFragment === 2) {
        slowPrint(">>> Fragment 2. De combien de cases avez-vous dû vous déplacer pour sortir Minimoys ? ", "yellow");
    } 
    else if (currentFragment === 3) {
        slowPrint(">>> Fragment 3. Quel est le nom du système de défense ? ", "yellow");
    } 
    else {
        displaySSD();  // si on a fini les questions
    }
}

inputField.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        let answer = inputField.value.trim().toLowerCase();
        terminal.innerHTML += ">>> " + answer + "\n";
        inputField.value = "";

        if (currentFragment === 1 && answer === "9") {
            slowPrint(">>> Premier fragment restauré. Bonne chance pour la suite...", "green");
            currentFragment++;
            setTimeout(askQuestion, 1000);
        } 
        else if (currentFragment === 2 && answer === "32") {
            slowPrint(">>> Deuxième fragment restauré. Courage Agent...", "green");
            currentFragment++;
            setTimeout(askQuestion, 1000);
        } 
        else if (currentFragment === 3 && answer === "alicia") {
            slowPrint(">>> Dernier fragment restauré. Félicita....", "green");
            currentFragment++;
            setTimeout(askQuestion, 1000);
        } 
        else {
            slowPrint(">>> Mauvaise réponse. Veuillez recommencer.", "red");
        }
    }
});
// Lancer au début
startProtocol();