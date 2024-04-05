export default function loadMenuPage() {
  const contentDiv = document.querySelector('#content');
  contentDiv.innerHTML = ''; // Clear existing content

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('tab-content');

  const menuItem1 = document.createElement('p');
  menuItem1.textContent = 'Menu Item 1: Description';
  
  const menuItem2 = document.createElement('p');
  menuItem2.textContent = 'Menu Item 2: Description';

  menuDiv.appendChild(menuItem1);
  menuDiv.appendChild(menuItem2);
  contentDiv.appendChild(menuDiv);
}
