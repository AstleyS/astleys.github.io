/******* SHOW MENU *******/
const showMenu = (navS, navLinksS, burgerS) => {
    // Find the selectors in html
    const nav = document.getElementById(navS);
    const navLinks = document.getElementById(navLinksS);
    const burger = document.getElementById(burgerS);

    if(nav && navLinks && burger){
        burger.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu');
            navLinks.classList.toggle('show-menu-links');
        });
    }
}

showMenu('nav', 'nav_links', 'burger');