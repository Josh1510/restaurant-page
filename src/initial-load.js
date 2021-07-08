const writeElements = (() => {
    // Creates the main element which page contect can be added to
    const writeMain = () => {
        const main = document.createElement('main');
        main.id = 'content';

        return main;
    };

    // Creates the header text
    const writeHeader = () => {
        const header = document.createElement('header');
        header.id = 'header';
        const headerTitle = document.createElement('h1');
        headerTitle.textContent = "Josh's Pizzas";
        header.appendChild(headerTitle);
        header.appendChild(writeNavBar());
        return header;
    };

    // Creats the buttons which are later added to the nav bar
    const writeButton = (buttonTitle) => {
        const button = document.createElement('button');
        button.id = buttonTitle;
        const span = document.createElement('span');
        span.textContent = buttonTitle;
        button.appendChild(span);

        return button;
    };

    // Creates the navigation bar and adds buttons to it
    const writeNavBar = () => {
        const navBar = document.createElement('nav');

        const homeButton = writeButton('Home');
        const menuButton = writeButton('Menu');
        const contactButton = writeButton('Contact');

        navBar.appendChild(homeButton);
        navBar.appendChild(menuButton);
        navBar.appendChild(contactButton);

        return navBar;
    };

    const writeFooter = () => {
        const footer = document.createElement('footer');

        const madeby = document.createElement('p');
        madeby.textContent = 'Josh';

        footer.appendChild(madeby);

        return footer;
    };

    return { writeMain, writeHeader, writeFooter };
})();

// Initial load of the page, loads in the header, footer and main
// elements.
const initialLoad = () => {
    const body = document.querySelector('body');

    const content = document.createElement('div');

    const header = writeElements.writeHeader();
    const main = writeElements.writeMain();
    const footer = writeElements.writeFooter();

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);

    // main.appendChild(loadHome());

    body.appendChild(content);
};

export default initialLoad;
