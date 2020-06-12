const toggleMenu = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]
const backgroundHeight = document.getElementsByClassName('bg-cover')[0]

toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    backgroundHeight.classList.toggle('active');
})