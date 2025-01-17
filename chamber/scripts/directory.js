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


const gridButton = document.querySelector('#GridView');
const listButton = document.querySelector('#ListView');

const cards = document.querySelector('#cards');

gridButton.addEventListener("click", function () {
    cards.classList.remove("listView");
    gridButton.classList.add("buttonToggled");
    listButton.classList.remove("buttonToggled");
})
listButton.addEventListener("click", function () {
    cards.classList.add("listView");
    gridButton.classList.remove("buttonToggled");
    listButton.classList.add("buttonToggled");

})

async function getCompanyData() {
    const response = await fetch("./data/members.json");
    const data = await response.json();
    displayCompanies(data.companies);

}


const displayCompanies = (companies) => {
    companies.forEach((company) => {

    let card = document.createElement("section");
    card.classList.add("company-card");

    /*   Top part of the card   */
    let intro = document.createElement("div")
    intro.classList.add("introBox");

    let name = document.createElement("h2");
    name.textContent = company.name;
    intro.appendChild(name);

    let tagline = document.createElement("h3");
    tagline.textContent = company.tagline;
    intro.appendChild(tagline);

    card.appendChild(intro);

    /*        Bottom part of the card            */
    let details = document.createElement("div");
    details.classList.add("companyDetails");

    let icon = document.createElement("img");
    icon.setAttribute ("src", company.icon);
    icon.setAttribute ("height", "80");
    icon.alt = `Icon for ${company.name}`;
    details.appendChild(icon);

    let textBox = document.createElement("div");
    textBox.classList.add("cardTextBox");

    let email = document.createElement("p");
    email.innerHTML = `<strong>Email:</strong> ${company.email}`;
    textBox.appendChild(email);

    let phoneNumber = document.createElement("p");
    phoneNumber.innerHTML = `<strong>Phone:</strong> ${company.phonenumber}`;
    textBox.appendChild(phoneNumber);

    let website = document.createElement("p");
    website.innerHTML = `<strong>URL:</strong> <a href=${company.websiteurl}> ${company.websiteurl} </a>`;
    textBox.appendChild(website);

    let membershipLevel = document.createElement("p");
    membershipLevel.innerHTML = `<strong>Membership Level:</strong> ${company.membershiplevel}`;
    textBox.appendChild(membershipLevel);

    details.appendChild(textBox);
    card.appendChild(details);
    cards.appendChild(card);
    });
};

getCompanyData();