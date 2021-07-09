const loadContact = () => {
    console.log('contact loading');
    let mainContent = document.getElementById('content');

    // reset page
    mainContent.innerHTML = '';

    mainContent.innerHTML = `
    <div>We're so close! Come and say hello.</div>
    <iframe
        src="https://maps.google.com/maps?q=home&t=&z=19&ie=UTF8&iwloc=&output=embed"
        width="600"
        height="450"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
    ></iframe>`;

    console.log('contact loaded~');
};

export default loadContact;
