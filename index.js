let homeScore = document.querySelector("#home>.score");
let guestScore = document.querySelector("#guest>.score");

function addBy1Home() {
    homeScore.textContent = +homeScore.textContent + 1;
}

function addBy2Home() {
    homeScore.textContent = +homeScore.textContent + 2;
}

function addBy3Home() {
    homeScore.textContent = +homeScore.textContent + 3;
}

function addBy1Guest() {
    guestScore.textContent = +guestScore.textContent + 1;
}

function addBy2Guest() {
    guestScore.textContent = +guestScore.textContent + 2;
}

function addBy3Guest() {
    guestScore.textContent = +guestScore.textContent + 3;
}

let homeScoreEl = document.querySelector("#home>.score");
let guestScoreEl = document.querySelector("#guest>.score");

function scoreBoxColor() {
    if (+homeScore.textContent > +guestScore.textContent) {
        homeScoreEl.style.background = "#064E3B";
        guestScoreEl.style.background = "#881337";
    } else if (+homeScore.textContent < +guestScore.textContent) {
        homeScoreEl.style.background = "#881337";
        guestScoreEl.style.background = "#064E3B";
    } else {
        homeScoreEl.style.background = "#1F2937";
        guestScoreEl.style.background = "#1F2937";
    }
}

function reset() {
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    homeScoreEl.style.background = "#080001";
    guestScoreEl.style.background = "#080001";
}