let visitElement = document.getElementById('visits');
let message = document.getElementById('visit-message');

let currentDate = new Date();
let formattedDate = `${currentDate.getMonth() + 1}-${currentDate.getDate()}`; // Format as MM-DD

function displayNumberOfVisits() {
    visitElement.innerHTML = getNumberOfVisits();
}

function displayMessage() {
    var lastVisit = localStorage.getItem('lastVisit');
    console.log(`last day visited ${lastVisit}`);
    if (lastVisit === null) {
        message.innerHTML = "Welcome! Let us know if you have any questions.";
        setNewDate();
    } else if (lastVisit === formattedDate) {
        message.innerHTML = "Back so soon! Awesome!";
    } else {
        message.innerHTML = `You last visited on ${lastVisit}.`;
    }
}

function getNumberOfVisits() {
    var numberOfVisits = localStorage.getItem('numberOfVisits');
    if (!numberOfVisits) {
        numberOfVisits = 0;
    }
    numberOfVisits++;
    localStorage.setItem('numberOfVisits', numberOfVisits);
    return numberOfVisits;
}

function setNewDate() {
    localStorage.setItem('lastVisit', formattedDate);
}

displayNumberOfVisits();
displayMessage();
