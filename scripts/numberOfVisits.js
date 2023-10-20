let visitElement = document.getElementById('visits');

function displayNumberOfVisits() {
    visitElement.innerHTML = getNumberOfVisits();
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

displayNumberOfVisits();