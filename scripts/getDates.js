// Get current year
const currentYear = new Date().getFullYear();

// Get the last modified date/time
const lastModified = document.lastModified;
const lastModifiedDate = lastModified.split(" ")[0];

// Get elements by ID from the HTML
const copyright = document.getElementById("copyright");
const lastModifiedElement = document.getElementById("lastUpdated");

// Update the text content
copyright.innerHTML += `Joshua Sooaemalelagi | Copyright © ${currentYear} &#x1F1FA;&#x1F1F8; | All rights reserved`;
lastModifiedElement.innerHTML +=  `Last Modified: ${lastModifiedDate}`;
