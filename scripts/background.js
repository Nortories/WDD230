function createNode() {
  const node = document.createElement("div"); // Create a new node as a div in html
  node.className = "node"; // Set the class name to 'node' for styling in CSS
  const size = Math.floor(Math.random() * 10) + 1; // Random size from 1px to 10px
  const color = getRandomColor(); // Get a random color
  node.style.width = size + "px";
  node.style.height = size + "px";
  node.style.backgroundColor = color; // Set random color to the node background
  const startX = Math.random() * window.innerWidth; // Random start position on the x-axis
  const startY = Math.random() * window.innerHeight; // Random start position on the y-axis
  node.style.left = startX + "px"; //set the node's left position to the random x-axis position
  node.style.top = startY + "px"; //set the node's top position to the random y-axis position

  // Random direction
  const angle = Math.random() * 360; // Random angle that the node will move in
  const velocity = Math.random(); // Random speed that the node will move at

  // After 5 seconds, remove the node from the DOM (Document Object Model) otherwise I'll have a bunch of nodes on the screen and crash the browser
  setTimeout(() => {
    node.remove();
  }, 5000);

  document.body.appendChild(node); // Set the node to the body of the HTML to display it on the screen

  // Animation loop (contributed by OpenAi)
  function moveNode() {
    const radians = angle * (Math.PI / 180); // Convert angle to radians (OpenAi contribution)
    const deltaX = Math.cos(radians) * velocity; // Calculate the change in x-axis position (OpenAi contribution)
    const deltaY = Math.sin(radians) * velocity; // Calculate the change in y-axis position (OpenAi contribution)

    const currentX = parseFloat(node.style.left); // Get the current x-axis position (OpenAi contribution)
    const currentY = parseFloat(node.style.top); // Get the current y-axis position (OpenAi contribution)

    node.style.left = currentX + deltaX + "px"; // Set the new x-axis position (OpenAi contribution)
    node.style.top = currentY + deltaY + "px"; // Set the new y-axis position (OpenAi contribution)

    requestAnimationFrame(moveNode); // Call the moveNode function again (OpenAi contribution)
  }

  moveNode();
}

// Get a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF"; // Hexadecimal color values needed becasue CSS doesn't support random colors
  let color = "#";
  for (
    let i = 0;
    i < 6;
    i++ // Loop through 6 times to get a 6 digit color. With each loop, add a random hexadecimal value to the color variable
  ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Create nodes periodically in milliseconds also used to first call the createNode function
setInterval(createNode, 50);
