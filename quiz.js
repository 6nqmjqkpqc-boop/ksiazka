const questions = [
    {
        q: "1. Jak bardzo kocham Wikusię? 💗",
        a: ["trochę", "dużo", "nieskończenie"],
        correct: 2
    },
    {
        q: "2. Co najbardziej lubię w Wikusi? ✨",
        a: ["uśmiech", "charakter", "wszystko"],
        correct: 2
    },
    {
        q: "3. Co czuję, gdy widzę Wikusię? 💞",
        a: ["motylki", "radość", "wszystko naraz"],
        correct: 2
    },
    {
        q: "4. Kiedy najbardziej za Wikusią tęsknię? 💕",
        a: ["zawsze", "czasem", "nigdy"],
        correct: 0
    },
    {
        q: "5. Co jest najpiękniejsze u Wikusi? 💝",
        a: ["oczy", "uśmiech", "cała ona"],
        correct: 2
    }
];

let current = 0;
let score = 0;

function loadQuestion() {
    const q = questions[current];
    document.getElementById("question").innerText = q.q;

    const answersBox = document.getElementById("answers");
    answersBox.innerHTML = "";

    q.a.forEach((text, index) => {
        const btn = document.createElement("div");
        btn.classList.add("answer");
        btn.innerText = text;
        btn.onclick = () => selectAnswer(index);
        answersBox.appendChild(btn);
    });
}

function selectAnswer(index) {
    const q = questions[current];

    if (index === q.correct) score++;

    document.getElementById("nextBtn").style.display = "block";

    document.querySelectorAll(".answer").forEach((a, i) => {
        a.style.pointerEvents = "none";
        if (i === q.correct) a.style.borderColor = "#00cc66";
        else a.style.opacity = "0.5";
    });
}

function nextQuestion() {
    current++;
    if (current >= questions.length) return finishQuiz();

    document.getElementById("nextBtn").style.display = "none";
    loadQuestion();
}

function finishQuiz() {
    document.getElementById("question").style.display = "none";
    document.getElementById("answers").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";

    const result = document.getElementById("result");
    result.classList.remove("hidden");

    result.innerHTML = `
        Wynik: <b>${score}/${questions.length}</b> 💖<br><br>
        Wikusiu...<br>
        <b>Zawsze wygrywasz moje serduszko 💞</b>
    `;
}

loadQuestion();