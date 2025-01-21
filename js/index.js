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