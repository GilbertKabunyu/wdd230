// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

// about weather

//elements in html file

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figacation');
const myDescription = document.querySelector('#description');

// url link for api
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Bindura,Zw&appid=44fc08398fa60be7f53fa1661c5b52aa';

// Bindura, Zimbabwe coordinates
const lat = -17.30
const lon = 31.33

// API key
const apiKey = '44fc08398fa60be7f53fa1661c5b52aa';

async function apiFetch() {
	try {
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			displayResults(data);
		} else {
			throw Error(await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}

function displayResults(data) {
	currentTemp.innerHTML = `${data.main.temp}&deg;F`;
	myDescription.innerHTML = data.weather[0].description;
	const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
	weatherIcon.setAttribute('src', iconsrc);
	weatherIcon.setAttribute('alt', desc);
	captionDesc.textContent = `${description}`;
}

apiFetch();