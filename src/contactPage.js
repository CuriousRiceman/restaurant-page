export default function loadContactPage() {
  const contentDiv = document.querySelector('#content');
  contentDiv.innerHTML = ''; // Clear existing content

  const contactDiv = document.createElement('div');
  contactDiv.classList.add('tab-content');

  const contactInfo = document.createElement('p');
  contactInfo.textContent = 'Contact us at: example@example.com';
  
  contactDiv.appendChild(contactInfo);
  contentDiv.appendChild(contactDiv);
}
  