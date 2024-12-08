function startCountdown() {
    const participantsText = document.getElementById("participants").value;
    const participants = participantsText.split("\n").map(name => name.trim()).filter(name => name);
    
    if (participants.length === 0) {
        alert("Por favor, insira pelo menos um nome!");
        return;
    }

    document.getElementById("winner").classList.add("hidden");
    let countdownElement = document.getElementById("countdown");
    countdownElement.classList.remove("hidden");

    let countdown = 5;
    countdownElement.textContent = countdown;

    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown === 0) {
            clearInterval(interval);
            announceWinner(participants);
        }
    }, 1000);
}

function announceWinner(participants) {
    const winner = participants[Math.floor(Math.random() * participants.length)];
    document.getElementById("countdown").classList.add("hidden");
    
    const winnerElement = document.getElementById("winner");
    winnerElement.textContent = `🎉 Parabéns! O vencedor é: ${winner} 🎉`;
    winnerElement.classList.remove("hidden");
}
