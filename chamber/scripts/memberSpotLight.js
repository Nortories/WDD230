// Step 1: Read the JSON data from the file
fetch("./data/members.json")
  .then((response) => response.json())
  .then((data) => {
    // Step 2: Parse the JSON data into a JavaScript object

    // Step 3: Iterate over each member until there are x members on the page
    let count = 0;
    // Create an array to store the names of the members that have been added to the page
    const addedMembers = [];

    // Loop through the data array until there are X members on the page
    while (count < 3) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomMember = data[randomIndex];

      // Only add the member if they are not bronze and have not already been added to the page
      if (randomMember.contact.membershipLevel !== "Bronze" && !addedMembers.includes(randomMember.name)) {
        // Step 4: Create HTML elements to display the member data
        const section = document.createElement("section");
        section.innerHTML = `
          <h2>${randomMember.name}</h2>
          <p>${randomMember.description}</p>
          <img src="${randomMember.logo}" alt="${randomMember.name} Logo">
          <ul>
            <li>Email: ${randomMember.contact.email}</li>
            <li>Phone: ${randomMember.contact.phone}</li>
            <li>Address: ${randomMember.contact.address}</li>
            <li>Website: <a href="${randomMember.contact.website}">${randomMember.contact.website}</a></li>
            <li>Membership Level: ${randomMember.contact.membershipLevel}</li>
            <li>Other Info: ${randomMember.contact.otherInfo}</li>
          </ul>
        `;

        // Step 5: Append the HTML elements to the page
        const article = document.querySelector("article");
        article.appendChild(section);

        // Step 6: Add the member's name to the addedMembers array and increment the count to exit the loop when there are X members on the page
        addedMembers.push(randomMember.name);
        count++;
      }
    }
  });
