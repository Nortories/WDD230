const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetsData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    //card build code goes here
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let img = document.createElement('img');

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        p.textContent = `Date of Birth: ${prophet.birthdate}`;
        img.setAttribute('src', prophet.imageurl);
        img.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '200');
        img.setAttribute('height', '300');

        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(img);

        cards.appendChild(card);
    });
}
getProphetsData();