
// Step 1: Read the JSON data from the file
fetch('./data/members.json')
  .then(response => response.json())
  .then(data => {
    // Step 2: Parse the JSON data into a JavaScript object

    // Step 3: Iterate over each member
    data.forEach(member => {
      // Step 4: Create a new section element
      const section = document.createElement('section');

      // Step 5: Set the id of the section element
      // section.id = 'directory-cards';

      // Step 6: Create the HTML structure for the member's information
      section.innerHTML = `
        <h2>${member.name}</h2>
        <p>${member.description}</p>
        <img src="${member.logo}" alt="${member.name} Logo">
        <ul>
          <li>Email: ${member.contact.email}</li>
          <li>Phone: ${member.contact.phone}</li>
          <li>Address: ${member.contact.address}</li>
          <li>Website: <a href="${member.contact.website}">${member.contact.website}</a></li>
          <li>Membership Level: ${member.contact.membershipLevel}</li>
          <li>Other Info: ${member.contact.otherInfo}</li>
        </ul>
      `;

      // Step 7: Append the section element to the article tag
      const article = document.querySelector('article');
      article.appendChild(section);
    });
  })
  .catch(error => {
    console.error('Error: displaying member data', error);
  });
