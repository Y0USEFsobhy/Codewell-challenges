

document.querySelector('.hamburger-button').addEventListener('click', function() {
    toggleNavLinks();
});

document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const hamburgerButton = document.querySelector('.hamburger-button');

    if (event.target !== navLinks && event.target !== hamburgerButton) {
        navLinks.style.display = 'none';
    }
});

function toggleNavLinks() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = (navLinks.style.display === 'none') ? 'block' : 'none';
}

 

