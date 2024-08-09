function verify() {
    const nameInput = document.getElementById("nameInput");
    const rollBtn = document.getElementById("rollBtn");
    const verifyBtn = document.getElementById("verifyBtn");
    const playerName = nameInput.value.trim();

    if (0 <= playerName.charAt(0) <= 9 && playerName.length < 4) {
        alert("Name must start with a letter and be at least 4 characters long!");
        return;
    }

    nameInput.disabled = true;
    verifyBtn.disabled = true;
    rollBtn.disabled = false;
};
let score = 0
function rollthedice() {
    const diceContainer = document.getElementById("diceContainer");
    diceContainer.innerHTML = "";

    const dice1 = Math.floor(Math.random() * 6) + 1;
    score += dice1
    document.getElementById("scorecontainer").innerHTML = score;
    const diceImage1 = document.createElement("img");
    diceImage1.src = `Images/dice${dice1}.png`;
    diceContainer.appendChild(diceImage1);
};
