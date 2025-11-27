const pages = [
    {title: "Dla mojej ukochanej Wikusi", text: "Książka o tym, dlaczego Cię kocham."},

    {title: "Nasze pierwsze spotkanie", text: "Gdy cie zobaczyłem moje serce zaczęło bić szybciej bo sie w tobie zakochałem w tamtym momencie."},

    {title: "Kocham Twój uśmiech", text: "Twój uśmiech bo dzięki nie czuje że nie zawiodłem."},

    {title: "Kocham Twoje oczy", text: "Mają w sobie dużo ciepła i SĄ STASZNIE PIĘKNE."},

    {title: "Kocham Twoją dobroć", text: "Twoje serce jest piękne. Zawsze myślisz o innych i dajesz im ciepło."},

    {title: "Kocham Twoją obecność", text: "Przy Tobie czuję się bezpiecznie i naprawdę kochanym."},

    {title: "Kocham Twoje wsparcie", text: "Zawsze dodajesz mi sił nawet jak sama masz problemy."},

    {title: "Kocham Twoją wrażliwość", text: "Widzę, jak bardzo przejmujesz się światem – to jedna z Twoich najpiękniejszych cech."},

    {title: "Kocham Twoją energię", text: "Potrafisz zmienić zwykły dzień w coś pięknego."},

    {title: "Kocham Twoją troskę", text: "Dzięki Tobie czuję się kochany każdego dnia."},

    {title: "Kocham Twoją naturalność", text: "Nie musisz nic udawać. Kocham Cię taką, jaka jesteś."},

    {title: "Kocham Twoją delikatność", text: "Masz w sobie coś niezwykle subtelnego i pięknego."},

    {title: "Kocham Twoją siłę", text: "Nawet gdy jest ciężko – nie poddajesz się."},

    {title: "Kocham Twój śmiech", text: "Jest jak odgłos radości która jest najważniejsza."},

    {title: "Kocham Twoją bliskość", text: "Gdy jesteś obok zapomninam o wszystkim nawet w gorszych chwilach"},

    {title: "Kocham, gdy mówisz 'będzie dobrze'", text: "I zawsze naprawdę wierzę, że tak będzie."},

    {title: "Kocham każdą chwilę z Tobą", text: "Każdy dzień jest dzięki Tobie piękniejszy i chce ich wiecej."},

    {title: "Kocham Cię za wszystko", text: "Za to kim jesteś. Za to, co robisz. Za to, jak mnie kochasz. Tak w skróce za całą ciebie"},

    {title: "Na zawsze razem", text: "Obiecuję ci, że zawsze będę przy Tobie. Przez każdy dzień, przez każdy uśmiech, przez każdy trudny moment."},

    {title: "Kocham Cię nieskończenie", text: "Ty i ja – na zawsze razem MIU. ❤️"}
];

let currentPage = 0;

function updatePage() {
    const p = pages[currentPage];
    document.getElementById("page").innerHTML =
        `<h3>${p.title}</h3><p>${p.text}</p>
         <p style="margin-top:20px; color:#ff7ba5;">${currentPage+1} / ${pages.length}</p>`;

    document.querySelectorAll(".dot").forEach((d, i) => {
        d.classList.toggle("active", i === currentPage);
    });
}

document.getElementById("next").onclick = () => {
    if (currentPage < pages.length - 1) currentPage++;
    updatePage();
};

document.getElementById("prev").onclick = () => {
    if (currentPage > 0) currentPage--;
    updatePage();
};

function generateDots() {
    const dots = document.getElementById("dots");
    pages.forEach(() => {
        const d = document.createElement("div");
        d.classList.add("dot");
        dots.appendChild(d);
    });
}

generateDots();
updatePage();
function spawnHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "💗";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (3 + Math.random() * 3) + "s";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }, 400);
}


spawnHearts();

document.addEventListener("click", () => {
    const audio = document.getElementById("music");
    if (audio) {
        audio.play().catch(() => {});
    }
}, { once: true });

// Animacja przewracania stron
function animatePage(direction) {
    const page = document.getElementById("page");

    page.classList.remove("flip-next", "flip-prev");

    void page.offsetWidth; // reset animacji

    if (direction === "next") {
        page.classList.add("flip-next");
    } else {
        page.classList.add("flip-prev");
    }

    setTimeout(() => {
        updatePage(); // aktualizuje treść strony
        page.classList.remove("flip-next", "flip-prev");
    }, 300);
}

// PODMIANA Twoich przycisków:
document.getElementById("next").onclick = () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        animatePage("next");
    }
};

document.getElementById("prev").onclick = () => {
    if (currentPage > 0) {
        currentPage--;
        animatePage("prev");
    }
};
