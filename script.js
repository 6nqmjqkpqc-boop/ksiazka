const komplementy = [
    "Jesteś najcudowniejsza!",
    "Twój uśmiech rozświetla dzień!",
    "Jesteś jedyna w swoim rodzaju!",
    "Twoje oczy są jak gwiazdy!",
    "Z tobą świat jest piękniejszy!"
];

function losujKomplement() {
    const rand = Math.floor(Math.random() * komplementy.length);
    document.getElementById("komplement").innerText = "Wika, " + komplementy[rand];
}