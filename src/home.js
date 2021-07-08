const loadHome = () => {
    console.log('home loading~');

    let mainContent = document.getElementById('content');

    const resetPage = () => {
        mainContent.innerHTML = '';
    };

    const homeContent = () => {
        // Load in home page content
        mainContent = document.getElementById('content');
        const para = document.createElement('p');
        para.textContent =
            "Could this be the best pizza in the world? No. Is this the best pizza within 10 minutes of your house? Possibly, there's only one way to find out!";

        const widgetDiv = document.createElement('div');
        const widgetScript = document.createElement('script');

        widgetScript.src =
            '//www.opentable.com/widget/reservation/loader?rid=99999&type=standard&theme=standard&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website';

        mainContent.appendChild(para);
        widgetDiv.appendChild(widgetScript);
        mainContent.appendChild(widgetDiv);
    };

    resetPage();
    homeContent();
    console.log('home loaded~');
};

export default loadHome;
