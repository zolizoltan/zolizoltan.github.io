function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    
    menuIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
}
