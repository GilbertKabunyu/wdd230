//elements in html file

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figacation');

// url link for api
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Trier,De&appid=44fc08398fa60be7f53fa1661c5b52aa';

// trier, germany coordinates
const lat = 49.75
const lon = 6.64

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
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();