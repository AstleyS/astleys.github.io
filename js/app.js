// Find the selectors in html
const nav = document.getElementById('nav');
const navLinks = document.getElementById('nav_links');
const burger = document.getElementById('burger');

// This variable will contain all items of the nav-links
const navItems = document.querySelectorAll('.nav-item');
// This variable will contain all filters
const filters = document.querySelectorAll('.filters');

// Checks if any item of the menu was clicked. If the menu is on, then the menu will be removed
nav.addEventListener('click', showHideMenu);

// The window will keep "listening" the position of the scroll to indicate the active link
window.addEventListener('scroll', activeLink);

// If any item was clicked, then the we will apply the filter
filters.forEach(filter => filter.addEventListener('click', filterProjects));

/*******
 * SHOW OR HIDE MENU
 * Function responsible for showing or hiding the menu when clicked on menu burger
*******/
function showHideMenu(event) {
    const element = event.target.classList[0];

    switch (element) {
        case 'nav-item': 
            if (burger.classList.contains('on')) {
                // Removes the show-menu and show-menu-links classes to the nav and nav_links
                nav.classList.remove('show-menu');
                navLinks.classList.remove('show-menu-links');
                burger.classList.remove('on');

                document.querySelector('html').style.overflow = 'scroll';
            }
            break;
        case 'burger':
            if (burger.classList.contains('on')) {
                // Removes the show-menu and show-menu-links classes to the nav and nav_links
                nav.classList.remove('show-menu');
                navLinks.classList.remove('show-menu-links');
                burger.classList.remove('on');

                document.querySelector('html').style.overflow = 'scroll';
            } else {
                // We add the show-menu and show-menu-links classes to the nav and navlinks (respectivelly)
                // with the nav and nav_links ids
                nav.classList.add('show-menu');
                navLinks.classList.add('show-menu-links');
                // Re-position the burger
                burger.style.alignSelf = 'center';
                // Add some type of flag to warn that is on
                burger.classList.add('on');   
                
                document.querySelector('html').style.overflow = 'hidden';
            }
            break;
    }
}

/*******
 * SCROLL SECTIONS ACTIVE LINK
 * Function responsible for finding the active section
*******/
function activeLink() {
    // This variable will contain all sections (that contains an id) of the portfolio
    const sections = document.querySelectorAll('section[id]');
    // Y position of scroll
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        // Get section height
        const sectionHeight = current.offsetHeight;
        // Get the top position of section. -56 because of the header + margin
        const sectionTop = current.offsetTop - 56;
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

/******* 
 * FILTER PROJECTS
 * Function responsible for filtering the projects on portfolio section 
*******/
function filterProjects(event) {

    // This variable will contain all filters
    const filters = document.getElementById('filters');

    /* Find the previous filter and remove it */
    let wantedFilter = filters.firstElementChild;
   
   while (wantedFilter !== null) {
       if (wantedFilter.classList.contains('active-filter')) {
           wantedFilter.classList.remove('active-filter');
           break; // In case we find it, we can exit the loop 
       }
       wantedFilter = wantedFilter.nextElementSibling;
   }

    // Getting the filter that was clicked (target)
    // event.target returns the element that was cliked
    let filterElement = event.target;
    // Add the active filter class to the element
    filterElement.classList.add(('active-filter'));
    filter = filterElement.getAttribute('data-filter');
    
    const projects = document.querySelectorAll('.project');
    
    // If the value is all then display all
    if (filter === 'all') {
        projects.forEach((project) => project.style.display = 'block');
    } else {
        // Checking for each project if they contain the filter value
        // For those who doesn't contain, display: none 
        projects.forEach((project) => {
            if (project.classList.contains(filter)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            } 
        });
    }
}

/*
const texts = ['am a Developer', 'love creating solutions'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
(function type() {

    
    // Checking if it completed the texts to present
    if (count === texts.length) {
        // If it does it resets
        count = 0;
    }

    // This variable below holds the text to present from the list
    currentText = texts[count];
    
    // This variable below holds the letter to present from the current text
    letter = currentText.slice(0, ++index);

    // Displaying the letter(s) in the ".typing" selector
    document.querySelector('.typing').textContent = letter;

    // Checking if the variable letter is completed
    if (letter.length == currentText.length) {
        // If it is, moves to next word(s)
        count++;
        index = 0;
    }

    setTimeout(type, 250);

}());
*/