import initialLoad from './initial-load';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

// First page load, load in header, nav and footer then loads the home page
initialLoad();
loadHome();

const loadPage = (id) => {
    if (id === 'Home') {
        loadHome();
    } else if (id === 'Menu') {
        loadMenu();
    } else if (id === 'Contact') {
        loadContact();
    } else {
        console.log("thats not a page? how'd you get here?");
    }
};

// Selectors for buttons
const navButtons = document
    .getElementById('header')
    .querySelectorAll('button')
    .forEach((item) => {
        item.addEventListener('click', (event) => {
            loadPage(item.id);
        });
    });
