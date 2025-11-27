const pages = [
    {title: "Dla mojej ukochanej Wikusi", text: "Książka o tym, dlaczego Cię kocham."},

    {title: "Nasze pierwsze spotkanie", text: "Choć nie ma tu zdjęcia – ten moment mam w sercu. To był początek wszystkiego."},

    {title: "Kocham Twój uśmiech", text: "Twój uśmiech rozjaśnia mój każdy dzień. Jest jak słońce w pochmurny poranek."},

    {title: "Kocham Twoje oczy", text: "Mają w sobie ciepło, spokój i coś, co sprawia, że chcę patrzeć w nie bez końca."},

    {title: "Kocham Twoją dobroć", text: "Twoje serce jest piękne. Zawsze myślisz o innych i dajesz im ciepło."},

    {title: "Kocham Twoją obecność", text: "Przy Tobie czuję się bezpiecznie. Jakbym był dokładnie tam, gdzie powinienem."},

    {title: "Kocham Twoje wsparcie", text: "Zawsze dodajesz mi sił. Czuję, że razem możemy wszystko."},

    {title: "Kocham Twoją wrażliwość", text: "Widzę, jak bardzo przejmujesz się światem – to jedna z Twoich najpiękniejszych cech."},

    {title: "Kocham Twoją energię", text: "Potrafisz zmienić zwykły dzień w coś pięknego."},

    {title: "Kocham Twoją troskę", text: "Dzięki Tobie czuję się kochany każdego dnia."},

    {title: "Kocham Twoją naturalność", text: "Nie musisz nic udawać. Kocham Cię taką, jaka jesteś."},

    {title: "Kocham Twoją delikatność", text: "Masz w sobie coś niezwykle subtelnego i pięknego."},

    {title: "Kocham Twoją siłę", text: "Nawet gdy jest ciężko – nie poddajesz się. Podziwiam Cię."},

    {title: "Kocham Twój śmiech", text: "Jest jak muzyka. Najpiękniejszy dźwięk mojego świata."},

    {title: "Kocham Twoją bliskość", text: "Gdy jesteś obok – wszystko inne przestaje mieć znaczenie."},

    {title: "Kocham, gdy mówisz 'będzie dobrze'", text: "I zawsze naprawdę wierzę, że masz rację."},

    {title: "Kocham każdą chwilę z Tobą", text: "Każdy dzień jest dzięki Tobie piękniejszy."},

    {title: "Kocham Cię za wszystko", text: "Za to kim jesteś. Za to, co robisz. Za to, jak mnie kochasz."},

    {title: "Na zawsze razem", text: "Obiecuję Ci – zawsze będę przy Tobie. Przez każdy dzień, przez każdy uśmiech, przez każdy trudny moment."},

    {title: "Kocham Cię nieskończenie", text: "Ty i ja – na zawsze. ❤️"}
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