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
    await slowPrint("/!\\ ALERTE : Mémoire insuffisante !! /!\\", "red");
    await slowPrint("##############################################################", "red");
    await slowPrint("#####    PROTOCOLE D'URGENCE ENCLENCHÉ    #####", "red");
    await slowPrint("##############################################################\n", "red");

    await slowPrint(">>> Fragment 1. Combien de personnes avez-vous libérées ? ", "yellow");
}

// Lancer au début
startProtocol();

// Gestion des réponses
inputField.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        let answer = inputField.value.trim().toLowerCase();
        terminal.innerHTML += `>>> ${answer}\n`;
        inputField.value = "";

        // Ici tu peux vérifier les réponses comme en Python
    }
});
