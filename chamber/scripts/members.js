const memberURL = 'https://gilbertkabunyu.github.io/wdd230/chamber/data/members.json';
const directoryContainer = document.getElementById('directory-container');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');

async function getMembers() {
  try {
    const response = await fetch(memberURL);
    const members = await response.json();

    displayMembers(members, 'grid-view');

    gridViewBtn.addEventListener('click', () => {
      displayMembers(members, 'grid-view');
      gridViewBtn.classList.add('active');
      listViewBtn.classList.remove('active');
    });

    listViewBtn.addEventListener('click', () => {
      displayMembers(members, 'list-view');
      listViewBtn.classList.add('active');
      gridViewBtn.classList.remove('active');
    });
  } catch (error) {
    console.error('Error fetching member data:', error);
  }
}

function displayMembers(members, viewType) {
  directoryContainer.innerHTML = '';

  members.forEach(member => {
    const memberElement = document.createElement('div');
    memberElement.classList.add(viewType === 'grid-view' ? 'member-card' : 'member-list-item');

    memberElement.innerHTML = `
      <div class="member-info">
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership Level: ${member.membership}</p>
      </div>
    `;

    directoryContainer.appendChild(memberElement);
  });
}

getMembers();