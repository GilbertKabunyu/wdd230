const baseURL = "https://gilbertkabunyu.github.io/wdd230/";
const linksURL = "https://gilbertkabunyu.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

function displayLinks(weeks) {
  const learningActivities = document.querySelector('#card');
  learningActivities.innerHTML = '';

  weeks.forEach(week => {
    const weekItem = document.createElement('ul');
    const weekTitle = document.createElement('h4');
    weekTitle.textContent = week.week;
    weekItem.appendChild(weekTitle);
    
    week.links.forEach(link => {
      const linkItem = document.createElement('a');
      linkItem.href = `${baseURL}${link.url}`;
      linkItem.textContent = link.title;
      weekItem.appendChild(linkItem);
      weekItem.appendChild(document.createTextNode(' | ')); // Add separator
    });

    // Remove the last separator
    weekItem.removeChild(weekItem.lastChild);

    learningActivities.appendChild(weekItem);
  });
}

getLinks();