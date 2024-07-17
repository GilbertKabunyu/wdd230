const memberURL = 'https://gilbertkabunyu.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('.cards');
const select = document.querySelector('.select')
const selectIMG = document.querySelector('.selectIMG')


let mode = 0;

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let picture = document.createElement('img');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let siteWrap = document.createElement('p');
        let site = document.createElement('a');

        name.textContent = member.name;

        phone.textContent = member.phone;

        address.textContent = member.address;

        site.textContent = member.website;
        site.setAttribute('href', member.website)

        picture.setAttribute('src', `https://gilbertkabunyu.github.io/wdd230/chamber/images/${member.image}.webp`);
        picture.setAttribute('alt', `Portrait of ${member.name} logo`);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('width', '200');
        picture.setAttribute('height', '150');

        siteWrap.appendChild(site)

        card.appendChild(picture)
        card.appendChild(name)
        card.appendChild(phone)
        card.appendChild(address)
        card.appendChild(siteWrap)
        cards.appendChild(card)
    });
}

async function getMemberData() {
    const response = await fetch(memberURL);

    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}

select.addEventListener('click', () => {
    if (mode === 0) {
        cards.classList.remove('grid')
        cards.classList.add('list')
        selectIMG.setAttribute('src', 'images/grid.webp')
        select.setAttribute('alt', 'Grid button')

        mode = 1;
    }
    else {
        mode = 0;
        cards.classList.remove('list')
        cards.classList.add('grid')
        selectIMG.setAttribute('src', 'images/list.webp')
        select.setAttribute('alt', 'List button')
    }

});


getMemberData();