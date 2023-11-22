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
        // Create a list item for each lesson
        const listItem = document.createElement("li");

        // Create and set the lesson title
        const lessonTitle = document.createElement("h3");
        lessonTitle.textContent = lesson.lesson;
        listItem.appendChild(lessonTitle);

        // Create a div to hold the links
        const linksDiv = document.createElement("div");
        linksDiv.className = "lesson-links";

        // Iterate over the links in each lesson
        lesson.links.forEach(link => {
            const lessonLink = document.createElement("a");
            lessonLink.setAttribute("href", link.url);
            lessonLink.textContent = link.title;

            // Append the link to the links div
            linksDiv.appendChild(lessonLink);

            // Optional: Add a line break for better readability
            linksDiv.appendChild(document.createElement("br"));
        });

        // Append the links div to the list item
        listItem.appendChild(linksDiv);

        // Append the list item to the main list
        linksList.appendChild(listItem);
    });
}

  getLinks();


