const container = document.querySelector(".container");
const seats = document.querySelectorAll(".seat-row .seat:not(.occupied)");
const movieSelect = document.getElementById("select");
let total = document.getElementById("total");

// uppdatera priset
function uppdatePrice() {
    let selectedSeats = document.getElementById("selected-seats");
    let count = document.querySelectorAll(".seat-row .seat.selected");
    selectedSeats.innerHTML = count.length;
    count.innerHTML = count.length;
    total.innerHTML = +movieSelect.value * count.length;
}
// movie select
movieSelect.addEventListener("change", function (e) {
    const screen = document.querySelector(".screen");
    if(e.target.value === "100") {
        screen.style.backgroundImage = "url(/img/shrek-2jpg.jpeg)";
    } else if(e.target.value === "120") {
        screen.style.backgroundImage = "url(/img/lotr.jpg)";
    } else {
        screen.style.backgroundImage = "url(/img/harrypotter.jpg)";
    }
    uppdatePrice()
});
// när du klcikar på något i container hämtas info
container.addEventListener("click", function (e) {
    if (
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("occupied")
    ) {
        e.target.classList.toggle("selected");
    }
    uppdatePrice();
});
