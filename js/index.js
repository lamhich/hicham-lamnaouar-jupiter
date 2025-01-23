// Craete a footer and add it to the body.
const footer = document.createElement('footer');
const body = document.querySelector('body');
body.appendChild(footer);

// Add a copyright to the footer 
const today = new Date(); 
const year  = today.getFullYear(); 
const copyright = document.createElement('p');
copyright.innerHTML = `<span>&#169 ${year} Hicham</span>`
footer.appendChild(copyright); 

// populate the skills list 
const skillslist= ['JavaScript', 'HTML','CSS', 'c++', 'python', 'powerpoint'];    
const skillsSection = document.getElementById('skills');
const skillsUL = skillsSection.querySelector('ul');

for ( let skill  of skillslist) { 
    let skillLI = document.createElement('li');
    skillLI.innerHTML = skill;
    skillsUL.appendChild(skillLI);
}

const messageForm = document.querySelector('form[name="leave_message"]');

// Add event listener for form submit
messageForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  // Get the form field values
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  // Clear the form
  event.target.reset();

  const messageSection = document.querySelector('#messages');
  const messageList = messageSection.querySelector('ul');

  // Create a new list item for the new message
  const newMessage = document.createElement('li');

  const messageLink = document.createElement('a');
  messageLink.href = `mailto:${usersEmail}`;
  messageLink.textContent = usersName;

  // Span for the user's message
  const messageText = document.createElement('span');
  messageText.textContent = `: ${usersMessage}`;

  // Create a remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.type = 'button'; // Make it a button type

  removeButton.addEventListener('click', function() {
    removeButton.parentNode.remove();
  });

  // The link, message, and remove button 
  newMessage.appendChild(messageLink);
  newMessage.appendChild(messageText);
  newMessage.appendChild(removeButton);

  messageList.appendChild(newMessage);
});
