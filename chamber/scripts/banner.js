
// Get the current day of the week
const currentDay = new Date().getDay();
console.log(currentDay);

// Check if it's Monday, Tuesday, or Wednesday
if (currentDay === 1 || currentDay === 2 || currentDay === 3) {
    // Create the banner element
    const banner = document.createElement('div');
    banner.id = 'chamber-banner';

    // Add styles to the banner element
    banner.style.position = 'fixed';
    banner.style.top = '25%';
    banner.style.left = '50%';
    banner.style.transform = 'translate(-50%, -50%)';
    banner.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    banner.style.color = '#fff';
    banner.style.padding = '20px';
    banner.style.borderRadius = '10px';
    // zindex is a CSS property that determines the order in which elements are displayed on the page
    banner.style.zIndex = '9999';

    // Add the banner content to the banner element
    banner.innerHTML = `
        <p>Join us at the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.</p>
        <button id="close-banner">Close</button>
    `;
    
    // Append the banner to the body
    document.getElementById("banner").appendChild(banner);
    
    // Add event listener to the close button
    const closeButton = document.getElementById('close-banner');
    closeButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
}
