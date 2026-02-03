const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

/* uciekające NIE */
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

/* kliknięcie TAK */
yesBtn.addEventListener("click", () => {
    alert("JEEEEJ 💖 Wiedziałem, że powiesz TAK!");

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "70vh";
        heart.style.fontSize = (20 + Math.random() * 30) + "px";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }
});
