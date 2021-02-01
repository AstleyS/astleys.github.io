/******* SHOW MENU *******/
const showMenu = (navS, navLinksS, burgerS) => {
    // Find the selectors in html
    const nav = document.getElementById(navS);
    const navLinks = document.getElementById(navLinksS);
    const burger = document.getElementById(burgerS);

    // Verifies if the selectores are valid 
    if(nav && navLinks && burger){
        burger.addEventListener('click', ()=>{
            // We add the show-menu and show-menu-links classes to the nav and navlinks (respectivelly)
            // with the nav and nav_links ids
            nav.classList.toggle('show-menu');
            navLinks.classList.toggle('show-menu-links');
        });
    }
}

showMenu('nav', 'nav_links', 'burger');
/******* END SHOW MENU *******/

/******* HIDE MENU ONCLICK ITEM *******/
function hide_menu () {
    const nav = document.getElementById('nav')
    const navLinks = document.getElementById('nav_links')
    if (nav && navLinks) {
        // Removes the show-menu and show-menu-links classes to the nav and nav_links
        nav.classList.remove('show-menu');
        navLinks.classList.remove('show-menu-links');
    }
}

// This variable will contain all items of the nav-links
const navItems = document.querySelectorAll('.nav-item');
// If any item was clicked, then the menu will be removed
navItems.forEach(item => item.addEventListener('click', hide_menu));
/******* END HIDE MENU *******/

/******* SCROLL SECTIONS ACTIVE LINK *******/
