// Get current year
const currentYear = new Date().getFullYear();

// Get the last modified date/time
const lastModified = document.lastModified;
const lastModifiedDate = lastModified.split(" ")[0];

// Get elements by ID from the HTML
const lastModifiedElement = document.getElementById("lastUpdated");

// Update the text content
lastModifiedElement.innerHTML +=  `Last Modified: ${lastModifiedDate}` + " v0.0.01";
