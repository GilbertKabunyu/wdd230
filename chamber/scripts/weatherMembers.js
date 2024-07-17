// Check the current day and display the banner if it's Monday, Tuesday, or Wednesday
const currentDay = new Date().getDay();
if (currentDay === 1 || currentDay === 2 || currentDay === 3) {
    document.getElementById('banner').style.display = 'block';
}

// Close banner function
function closeBanner() {
    document.getElementById('banner').style.display = 'none';
}

// Fetch weather data from OpenWeatherMap API
const apiKey = '44fc08398fa60be7f53fa1661c5b52aa';
const cityId = 'bindura,Zw'; // Replace with the chamber location city ID

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bindura,Zw&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('currentTemp').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('currentDesc').textContent = `Description: ${data.weather[0].description}`;
    });

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Bindura,Zw&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const forecastList = data.list;
        let forecastHtml = '';
        for (let i = 0; i < forecastList.length; i += 8) {
            const day = forecastList[i];
            forecastHtml += `<li>${new Date(day.dt_txt).toLocaleDateString()}: ${day.main.temp}°C</li>`;
        }
        document.getElementById('forecast').innerHTML = forecastHtml;
    });

// Fetching member data and selecting random silver or gold members for spotlight
const githubUrl = 'https://gilbertkabunyu.github.io/wdd230/chamber/data/members.json';

fetch(githubUrl)
    .then(response => response.json())
    .then(data => {
        const members = data.members;
        const qualifiedMembers = members.filter(member => membershiplevel === 'silver' || membershiplevel === 'gold');
        const spotlightMembers = [];

        while (spotlightMembers.length < 3 && qualifiedMembers.length > 0) {
            const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
            spotlightMembers.push(qualifiedMembers.splice(randomIndex, 1)[0]);
        }

        let spotlightHtml = '';
        spotlightMembers.forEach(member => {
            spotlightHtml += `<div>
                <h3>${member.name}</h3>
                <p>${member.description}</p>
            </div>`;
        });

        document.getElementById('memberSpotlights').innerHTML = spotlightHtml;
    });