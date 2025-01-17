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


const weatherAPIKey = "816f16e2416e4647b59ba678241378be";

/*
https://api.openweathermap.org/data/2.5/weather?lat={39.00}&lon={104.49}&appid={API key}(&units=metric/imperial)
Colorado springs coords: 39°00'47.3"N 104°49'35.1"W

https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={39.00}&lon={104.49}&appid={API key}&cnt=72&units=imperial
*/

async function getWeatherData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=39.00&lon=104.49&appid=816f16e2416e4647b59ba678241378be&units=imperial`);
        const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=39.00&lon=104.49&appid=816f16e2416e4647b59ba678241378be&units=imperial`);

        let data, data2;

        if (!response.ok) {
            throw new Error(await response.text());
        } else {
            data = await response.json();
        }

        if (!response2.ok) {
            throw new Error(await response2.text());
        } else {
            data2 = await response2.json();
        }

        displayWeather(data, data2);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
 
const currentWeatherTemp = document.querySelector("#currentTemp");
const currentWeatherDesc = document.querySelector("#currentWeatherDescription")
const forecastDay1 = document.querySelector("#forecastday1");
const forecastDay2 = document.querySelector("#forecastday2");
const forecastDay3 = document.querySelector("#forecastday3");

function displayWeather(currentData, forecastData) {

    console.log("We are starting to display the weather data");
    currentWeatherTemp.textContent = `${currentData.main.temp}° F`;
    currentWeatherDesc.textContent = `${currentData.weather[0].description}`;

    forecastDay1.textContent = `Today: ${forecastData.list[0].main.temp}° F`;
    forecastDay2.textContent = `Tomorrow: ${forecastData.list[8].main.temp}° F`;
    forecastDay3.textContent = `Day after tomorrow: ${forecastData.list[16].main.temp}° F`;
}

getWeatherData();

const showcaseBox = document.querySelector("#showcaseBox");

async function getCompanyData() {
    const response = await fetch("./data/members.json");
    const data = await response.json();
    displayCompanies(data.companies);

}


const displayCompanies = (companies) => {
    let validCompanies = [];
    companies.forEach((company) => {
    if (company.membershiplevel == 1 ){
        return;
    }
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
    let membershipText = ""
    if (company.membershiplevel == 1) {
        membershipText = "Bronze";
    }
    else if (company.membershiplevel == 2) {
        membershipText = "Silver";
    }
    else if (company.membershiplevel == 3) {
        membershipText = "Gold"
    }
    membershipLevel.innerHTML = `<strong>Membership Level:</strong> ${membershipText}`;
    textBox.appendChild(membershipLevel);

    details.appendChild(textBox);
    card.appendChild(details);
    validCompanies.push(card);
    });

    if (validCompanies.length < 3) {
        validCompanies.forEach((company) => {
            showcaseBox.appendChild(company);
        });
    } else {
        const selectedCompanies = [];
        while (selectedCompanies.length < 3) {
            const randomIndex = Math.floor(Math.random() * validCompanies.length);
            const randomCompany = validCompanies[randomIndex];
            if (!selectedCompanies.includes(randomCompany)) {
                selectedCompanies.push(randomCompany);
            }
        }
        selectedCompanies.forEach((company) => {
            showcaseBox.appendChild(company);
        });
    }
    
};

getCompanyData();