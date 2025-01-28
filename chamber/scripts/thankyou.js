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


//http://127.0.0.1:5500/chamber/thankyou.html?
//first=asdf&last=asdf&organizational-title=asdf&email=asdf%40asdf&phone=asdf&organization=asdf&membershipLevel=Bronze&desc=asdf&timestamp=2025-01-27T18%3A26%3A49.331Z
const websiteurl = window.location.href;
let formData = websiteurl.split('?')[1].split('&');
console.log(formData);

function showData(target) {
    let result = ''
    formData.forEach((str) => {
        if (str.startsWith(target)) {
            result = str.split('=')[1].replace("%40", "@").replace('+', " ").replace('+', " ");
        }
    });
    return result;
}

console.log(showData('first'));

let decodedTimestamp = decodeURIComponent(showData('timestamp'));
let newDate = new Date(decodedTimestamp);
let formattedDate = new Intl.DateTimeFormat('en-US').format(newDate);

const thankYouBox = document.getElementById('thankYouBox');
thankYouBox.innerHTML = `
<h2>Thank you for joining the Dragon's Hoard Chamber of Commerce!</h2>
<h3>The following membership has been created:</h3>
<p><strong>First Name</strong>: ${showData('first')}</p>
<p><strong>Last Name</strong>: ${showData('last')}</p>
<p><strong>Business Name</strong>: ${showData('organization')}</p>
<p><strong>Email</strong>: ${showData('email')}</p>
<p><strong>Phone Number</strong>: ${showData('phone')}</p>
<p><strong>Date</strong>: ${formattedDate}</p>

`;