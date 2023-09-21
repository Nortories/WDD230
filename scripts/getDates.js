// Get current year
const currentYear = new Date().getFullYear();

// Get the last modified date/time
const lastModified = document.lastModified;
const lastModifiedDate = lastModified.split(" ")[0];

// Get elements by ID from the HTML
const currentYearElement = document.getElementById("current-year");
const lastModifiedElement = document.getElementById("last-modified");

// Update the text content
currentYearElement.innerHTML += "Copyright © | All rights reserved | " + currentYear + " | \uD83C\uDDFA\uD83C\uDDF8";
lastModifiedElement.textContent += lastModifiedDate;
