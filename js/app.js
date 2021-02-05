// Calling showMenu function with nav, nav_links and burger id names as args
showMenu('nav', 'nav_links', 'burger');

// This variable will contain all items of the nav-links
const navItems = document.querySelectorAll('.nav-item');
// If any item was clicked, then the menu will be removed
navItems.forEach(item => item.addEventListener('click', hide_menu));

// The window will keep "listening" the position of the scroll to indicate the
// active link
window.addEventListener('scroll', activeLink);


/******* SHOW MENU *******/
function showMenu(navS, navLinksS, burgerS) {
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
/******* END HIDE MENU *******/

/******* SCROLL SECTIONS ACTIVE LINK *******/
function activeLink() {
    // This variable will contain all sections (that contains an id) of the portfolio
    const sections = document.querySelectorAll('section[id]');
    // Y position of scroll
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        // Get section height
        const sectionHeight = current.offsetHeight;
        // Get the top position of section. -50 because of the header
        const sectionTop = current.offsetTop - 50;
        // Get the id of the section
        let sectionId = current.getAttribute('id');

        // Verifying in which section the scroll position is on 
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}