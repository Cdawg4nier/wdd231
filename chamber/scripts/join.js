const footerYear = document.querySelector("#current-year");
let currentYear = new Date().getFullYear();
footerYear.textContent = currentYear;

const footerLastModified = document.querySelector("#last-modified");
footerLastModified.textContent = `Last Modification: ${document.lastModified}`;

const burgerButton = document.querySelector('#BurgerMenu');
const navElement = document.querySelector('nav');


let isBurgerMenuVisible = false;
burgerButton.addEventListener("click", function () {
    navElement.classList.toggle("burgerExpanded")
    isBurgerMenuVisible = !isBurgerMenuVisible;
    if (!isBurgerMenuVisible) { burgerButton.textContent = "☰"; }
    else { burgerButton.textContent = "❎"; }
})

const hiddenTimestamp = document.getElementById('timestamp');
let currentDate = new Date();
hiddenTimestamp.value = currentDate.toISOString();

const npButton = document.getElementById('NPButton');
const bronzeButton = document.getElementById('BronzeButton');
const silverButton = document.getElementById('SilverButton');
const goldButton = document.getElementById('GoldButton');

const npDialogue = document.getElementById('NPDialogue')
const bronzeDialogue = document.getElementById('BronzeDialogue');
const silverDialogue = document.getElementById('SilverDialogue');
const goldDialogue = document.getElementById('GoldDialogue');



npButton.addEventListener("click", function () {
    npDialogue.showModal();
    let closeButton = document.getElementById("closeBtnNP");
    closeButton.addEventListener("click", function() {
        npDialogue.close();
    })
})
bronzeButton.addEventListener("click", function () {
    bronzeDialogue.showModal();
    let closeButton = document.getElementById("closeBtnBR");
    closeButton.addEventListener("click", function() {
        bronzeDialogue.close();
    })
})
silverButton.addEventListener("click", function () {
    silverDialogue.showModal();
    let closeButton = document.getElementById("closeBtnSI");
    closeButton.addEventListener("click", function() {
        silverDialogue.close();
    })
})
goldButton.addEventListener("click", function () {
    goldDialogue.showModal();
    let closeButton = document.getElementById("closeBtnGO");
    closeButton.addEventListener("click", function() {
        goldDialogue.close();
    })
})