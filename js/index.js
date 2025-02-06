// Craete a footer and add it to the body.
const footer = document.createElement('footer');
const body = document.querySelector('body');
body.appendChild(footer);

// Add a copyright to the footer 
const today = new Date(); 
const year  = today.getFullYear(); 
const copyright = document.createElement('p');
copyright.innerHTML =`<span>&#169 ${year} Hicham</span>`
footer.appendChild(copyright); 

footer.style.position = 'fixed';  // Fix the footer at the bottom
footer.style.left = '0';          // Align it to the left of the page
footer.style.bottom = '0';        // Stick it to the bottom of the screen
footer.style.textAlign = 'left';  // Align text to the left
footer.style.fontSize = '14px';   // Font size for the copyright text


// populate the skills list 
const skillslist= ['JavaScript', 'HTML','CSS', 'c++', 'python', 'powerpoint'];    
const skillsSection = document.getElementById('skills');
const skillsUL = skillsSection.querySelector('ul');

for ( let skill  of skillslist) { 
    let skillLI = document.createElement('li');
    skillLI.innerHTML = skill;
    skillsUL.appendChild(skillLI);
}
// Lesson 12 
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  if (!usersName || !usersEmail || !usersMessage) {
    alert("Please fill in all fields!");
    return;  
  }
  console.log(usersName, usersEmail, usersMessage);

  event.target.reset();  // Reset form after submission

  const messageSection = document.querySelector('#messages');
  const messageList = messageSection.querySelector('ul');

  // New message List
  const newMessage = document.createElement('li');

  const messageLink = document.createElement('a');
  messageLink.href = `mailto:${usersEmail}`;
  messageLink.textContent = usersName;

  const messageText = document.createElement('span');
  messageText.textContent = `: ${usersMessage}`;

  // Remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.type = 'button';  // Make it a button type

  removeButton.addEventListener('click', function() {
    newMessage.remove();  // Remove the entire message when the button is clicked
    updateMessageSectionVisibility();
  });

  //Edit button
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.type = 'button';  // Make it a button type

  // Add event listener for the Edit button
  editButton.addEventListener('click', function() {
    const newMessageContent = prompt('Edit your message:', usersMessage);
    if (newMessageContent) {
      messageText.textContent = `: ${newMessageContent}`;  // Update the message content
    }
  });

  // Append the components to the new message
  newMessage.appendChild(messageLink);
  newMessage.appendChild(messageText);
  newMessage.appendChild(removeButton);
  newMessage.appendChild(editButton);  // Append the Edit button to the message

  // Append the new message to the message list
  messageList.appendChild(newMessage);

  //After adding a new message Update the visibility of the message section
  updateMessageSectionVisibility();
});

function updateMessageSectionVisibility() {
  const messageSection = document.querySelector('#messages');
  const messageList = messageSection.querySelector('ul');
  
  // Check if there are any messages in the list
  if (messageList.children.length === 0) {
    messageSection.style.display = 'none';
  } else {
    messageSection.style.display = 'block';
  }
}

// Lesson 13 
const username = 'lamhich';
// Fetch the repositories (Getting Projects from GitHub API)
fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json()) 
  .then(repositories => {
    console.log(repositories);
    displayRepositories(repositories);
  })
  .catch(error => {
    console.error('Error fetching repositories:', error);
  });

function displayRepositories(repositories) {
  // DOM Selectors (Getting HTML elements)
  const projectSection = document.querySelector('#projects');
  const projectList = projectSection.querySelector('ul');

  // Clear the list before adding 
  projectList.innerHTML = '';

  // Loop through each repository and create a new list item
  repositories.forEach(repo => {
    const project = document.createElement('li');
    project.innerText = repo.name;  
    projectList.appendChild(project);  
  });

  // If no repositories were found, display a message
  if (repositories.length === 0) {
    const noReposMessage = document.createElement('p');
    noReposMessage.innerText = 'No repositories found.';
    projectSection.appendChild(noReposMessage);
  }
}