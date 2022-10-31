const container = document.querySelector(".container");
const seats = document.querySelectorAll(".seat-row .seat:not(.occupied)");
const movieSelect = document.getElementById("select");
let total = document.getElementById("total");
let count = document.getElementById("selected-seats");

populateUI();

// save selected movie index

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("slectedMovieIndex", movieIndex);
    localStorage.setItem("slectedMovieprice", moviePrice);
}

// uppdatera priset
function uppdatePrice() {
    const selectedSeats = document.querySelectorAll(".seat-row .seat.selected");

    const seatsIndex = [...selectedSeats].map((seat) =>
        [...seats].indexOf(seat)
    );

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    count.innerHTML = selectedSeats.length;
    total.innerHTML = +movieSelect.value * selectedSeats.length;
}
// Get data from localstorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

    console.log(selectedSeats);
}

// movie select
movieSelect.addEventListener("change", function (e) {
    setMovieData(e.target.selectedIndex, e.target.value);
    uppdatePrice();
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

// page load
uppdatePrice();
