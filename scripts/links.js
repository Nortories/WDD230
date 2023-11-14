const baseURL = "https://nortories.github.io/wdd230/";
const linksURL = "https://nortories.github.io/wdd230/data/links.json";


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
function displayLinks(weeks) {
    const linksList = document.getElementById("linksList");
    weeks.forEach(week => {
        const weekItem = document.createElement("li");
        const weekTitle = document.createElement("h3");
        weekTitle.textContent = `Week ${week.week}`;
        weekItem.appendChild(weekTitle);
        const links = week.links;
        const linksList = document.createElement("ul");
        links.forEach(link => {
            const linkItem = document.createElement("li");
            const linkAnchor = document.createElement("a");
            linkAnchor.textContent = link.label;
            linkAnchor.setAttribute("href", link.url);
            linkItem.appendChild(linkAnchor);
            linksList.appendChild(linkItem);
        });
        weekItem.appendChild(linksList);
        linksList.appendChild(weekItem);
    });
}
  
  getLinks();


