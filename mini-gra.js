function startGra() {
    const liczba = Math.floor(Math.random() * 5) + 1;
    let strzal = prompt("Mini gra 💖\nZgadnij liczbę od 1 do 5:");

    if (parseInt(strzal) === liczba) {
        document.getElementById("wynik").innerText = "Brawo! Zdobywasz serce Wikuśki 💖";
    } else {
        document.getElementById("wynik").innerText = 
            "Niestety nie tym razem 😢 Poprawna liczba to: " + liczba;
    }