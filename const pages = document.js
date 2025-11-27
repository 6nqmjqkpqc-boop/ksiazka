const pages = document.querySelectorAll(".page");
let current = 0;

function updatePages() {
    pages.forEach((page, index) => {
        if (index <= current) {
            page.classList.add("flipped");
        } else {
            page.classList.remove("flipped");
        }
    });
}

document.getElementById("next").onclick = () => {
    if (current < pages.length - 1) current++;
    updatePages();
};

document.getElementById("prev").onclick = () => {
    if (current > 0) current--;
    updatePages();
};

updatePages();