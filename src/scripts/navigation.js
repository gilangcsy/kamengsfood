const navbar = document.querySelector("#nav");
const navButtonOpen = document.querySelector("#navButtonOpen");
const navButtonClose = document.querySelector("#navButtonClose");

function openNav() {
    // navbar.style.transform = "translateY(0%)";
    navbar.classList.toggle('slide');
    navButtonOpen.style.display = "none";
    navButtonClose.style.display = "block";
    const aTest = 'aTest';
}

function closeNav() {
    navbar.classList.toggle('slide');
    // navbar.style.transform = "translateY(-100%)";
    navButtonOpen.style.display = "block";
    navButtonClose.style.display = "none";
}

export default { openNav, closeNav }