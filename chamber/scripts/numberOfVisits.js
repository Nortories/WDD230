let visitElement = document.getElementById('visits');
let message = document.getElementById('visit-message');

const currentDay = new Date().getDay();

function displayNumberOfVisits() {
    visitElement.innerHTML = getNumberOfVisits();
}
function displayMessage() {
    var lastVisit = localStorage.getItem('lastVisit');
    if (!lastVisit) {
        lastVisit = currentDay;
        setNewDate();
        message.html = "Welcome! Let us know if you have any questions.";
    }
    else if (lastVisit == currentDay) {
        message.innerHTML = "Back so soon! Awesome!";
    }
    else {
        message.innerHTML = `You last visited ${lastVisit} days ago.`;
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
    
    localStorage.setItem('lastVisit', currentDay);
}


setNewDate();
displayNumberOfVisits();
displayMessage();