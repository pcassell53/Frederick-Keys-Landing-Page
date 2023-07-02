// below listed default settings
AOS.init({
// Global settings:
disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
initClassName: 'aos-init', // class applied after initialization
animatedClassName: 'aos-animate', // class applied on animation
useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
disableMutationObserver: false, // disables automatic mutations' detections (advanced)
debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
offset: 120, // offset (in px) from the original trigger point
delay: 0, // values from 0 to 3000, with step 50ms
duration: 400, // values from 0 to 3000, with step 50ms
easing: 'ease', // default easing for AOS animations
once: true, // whether animation should happen only once - while scrolling down
mirror: false, // whether elements should animate out while scrolling past them
anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
easing: 'ease-out-back',
duration: 800,
delay: 300,
disable: 'mobile'
});
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
if(!menuOpen) {
menuBtn.classList.add('open');
menuOpen = true;
} else {
menuBtn.classList.remove('open');
menuOpen = false;
}
});

function fetchEventInformation() {
fetch('https://www.ticketsmarter.com/p/frederick-keys-tickets')
.then(response => response.text())
.then(html => {
const parser = new DOMParser();
const doc = parser.parseFromString(html, 'text/html');
const eventNames = doc.querySelectorAll('.eventName');
const eventTimes = doc.querySelectorAll('.eventTime');
const eventDates = doc.querySelectorAll('.eventDate');
const eventNamesContainer = document.getElementById('eventNames');
const eventTimesContainer = document.getElementById('eventTimes');
const eventDatesContainer = document.getElementById('eventDates');
// Populate the event names
eventNames.forEach(event => {
const eventNameElement = document.createElement('p');
eventNameElement.textContent = event.textContent;
eventNamesContainer.appendChild(eventNameElement);
});
// Populate the event times
eventTimes.forEach(event => {
const eventTimeElement = document.createElement('p');
eventTimeElement.textContent = event.textContent;
eventTimesContainer.appendChild(eventTimeElement);
});
// Populate the event dates
eventDates.forEach(event => {
const eventDateElement = document.createElement('p');
eventDateElement.textContent = event.textContent;
eventDatesContainer.appendChild(eventDateElement);
});
})
.catch(error => {
console.error('Error:', error);
});
}
// Call the function to fetch and populate event information
fetchEventInformation();