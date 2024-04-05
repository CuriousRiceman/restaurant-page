import loadHomepage from './homepage.js';
import loadContactPage from './contactPage.js';
import loadMenuPage from './menuPage.js';

loadHomepage();
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.id;
        if (tabId === 'homePage') {
            loadHomepage();
        } else if (tabId === 'contactPage') {
            loadContactPage();
        } else if (tabId === 'menuPage') {
            loadMenuPage();
        }
    });
});