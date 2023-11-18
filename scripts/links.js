const baseURL = "https://nortories.github.io/wdd230/";
const linksURL = "./data/links.json";


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log("script running");
    console.log(data);
    displayLinks(data.lessons);
  }
  
function displayLinks(lessons) {
    const linksList = document.getElementById("linksList");
    lessons.forEach(lesson => {
        const lessonItem = document.createElement("li");
        const lessonTitle = document.createElement("h3");
        lessonTitle.textContent = `${lesson.lesson}`;
        lessonItem.appendChild(lessonTitle);

        // const links = lesson.links;
        // const linksList = document.createElement("ul");
        // links.forEach(link => {
        //     const linkItem = document.createElement("li");
        //     const linkAnchor = document.createElement("a");
        //     linkAnchorlinkItem.textContent = link.title;
        //     linkAnchor.setAttribute("href", link.url);
        //     linkItem.appendChild(linkAnchor);
        //     linksList.appendChild();
        // });
        linksList.appendChild(lessonItem);
    });
}
  
  getLinks();


