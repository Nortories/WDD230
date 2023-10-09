const modeButton = document.querySelector("#mode");
const card = document.querySelectorAll('.dark-mode ul');
const cardH3 = document.querySelectorAll('.dark-mode h3');
const allElements = document.querySelectorAll('*');


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
        card.forEach(card => card.classList.toggle('show'));
        cardH3.forEach(cardH3 => cardH3.classList.toggle('show'));
        allElements.forEach(element => {
            const boxShadow = window.getComputedStyle(element).boxShadow;
            if (boxShadow && boxShadow !== 'none') {
                // Change the box-shadow here
                element.style.boxShadow = '#141516 0px 0px 20px 10px';
            }
        });
		modeButton.textContent = "❎";
	} else {
        allElements.forEach(element => {
            const boxShadow = window.getComputedStyle(element).boxShadow;
            if (boxShadow && boxShadow !== 'none') {
                // Change the box-shadow here
                element.style.boxShadow = '#A5C9FF 0px 0px 20px 10px';
            }
        });
        card.forEach(card => card.classList.toggle('show'));
        cardH3.forEach(cardH3 => cardH3.classList.toggle('show'));
		modeButton.textContent = "☑️";
	}
});