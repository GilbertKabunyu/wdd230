const baseURL = "https://gilbertkabunyu.github.io/wdd230/";
const linksURL = "https://gilbertkabunyu.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.error('Error fetching the links data:', error);
  }
}

function displayLinks(weeks) {
  const linksList = document.getElementById('links-list');
  linksList.innerHTML = ''; // Clear any existing content

  weeks.forEach(week => {
    const weekItem = document.createElement('li');
    weekItem.textContent = week.week;

    const activitiesList = document.createElement('ul');

    week.links.forEach(link => {
      const activityItem = document.createElement('li');
      const activityLink = document.createElement('a');
      activityLink.href = `${baseURL}${link.url}`;
      activityLink.textContent = link.title;

      activityItem.appendChild(activityLink);
      activitiesList.appendChild(activityItem);
    });

    weekItem.appendChild(activitiesList);
    linksList.appendChild(weekItem);
  });
}

getLinks();