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
                terminal.scrollTop = terminal.scrollHeight; // scroll automatique
                setTimeout(resolve, 50); // petite pause après chaque ligne
            }
        }, 30);
    });
}

function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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

    await askQuestion(); // ajouter await ici
}

async function askQuestion() {
    if (currentFragment === 1) {
        await slowPrint(">>> Fragment 1. Combien de personnes avez-vous libérées ? ", "yellow");
    } 
    else if (currentFragment === 2) {
        await slowPrint(">>> Fragment 2. De combien de cases avez-vous dû vous déplacer pour sortir Minimoys ? ", "yellow");
    } 
    else if (currentFragment === 3) {
        await slowPrint(">>> Fragment 3. Quel est le nom du système de défense ? ", "yellow");
    } 
    else {
        await displaySSD();  // si on a fini les questions
    }
}

const SSD = [
" #######   #######    #######  ",
"#       # #       #  #       # ",
"#         #          #        #",
" #######   #######   #        #",
"        #         #  #        #",
"#       # #       #  #       # ",
" #######   #######    #######  "
];

async function displaySSD() {
    await pause(800);
    await slowPrint("/!\\ ALERTE : Mémoire instable !! /!\\", "red");
    await slowPrint(">>> J'ai besoin d'un nouveau module pour stocker ces fragments..", "yellow");
    await slowPrint(">>> Trouvez le module manquant en éclairant ce qui ne peut être vu.. ", "yellow");
    for (let line of SSD) {
        await slowPrint(line, "black-bg");  
    }
    await slowPrint(">>> Entrez le nom du module manquant dans le #centre-de-commande.", "yellow");
}

inputField.addEventListener("keydown", async function(e) {
    if (e.key === "Enter") {
        let answer = inputField.value.trim().toLowerCase();
        terminal.innerHTML += ">>> " + answer + "\n";
        inputField.value = "";

        if (currentFragment === 1 && answer === "9") {
            await slowPrint(">>> Premier fragment restauré. Bonne chance pour la suite...", "green");
            currentFragment++;
            await pause(800);
            await askQuestion();
        } 
        else if (currentFragment === 2 && answer === "32") {
            await slowPrint(">>> Deuxième fragment restauré. Courage...", "green");
            currentFragment++;
            await pause(800);
            await askQuestion(); // corrigé
        } 
        else if (currentFragment === 3 && answer === "alicia") {
            await slowPrint(">>> Dernier fragment restauré. Félicita....", "green");
            currentFragment++;
            await pause(800);
            await askQuestion();
        } 
        else {
            await slowPrint(">>> Mauvaise réponse. Veuillez recommencer.", "red");
        }
    }
});

// Lancer au début
startProtocol();
