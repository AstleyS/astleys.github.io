// Find the selectors in html
const nav = document.getElementById('nav');
const navLinks = document.getElementById('nav_links');
const burger = document.getElementById('burger');
const socials = document.getElementById('social_links');
const scrollTop = document.getElementById('scroll_top');

// This variable will contain all items of the nav-links
const navItems = document.querySelectorAll('.nav-item');
// This variable will contain all filters
const filters = document.querySelectorAll('.filters');

// Checks if any item of the menu was clicked. If the menu is on, then the menu will be removed
nav.addEventListener('click', showHideMenu);

// The window will keep "listening" the position of the scroll to indicate the active link
window.addEventListener('scroll', activeLink);

// The window will keep "listening" the position of the scroll to scroll to the top
window.addEventListener('scroll', scrollToTop);

// If any item was clicked, then the we will apply the filter
filters.forEach(filter => filter.addEventListener('click', filterProjects));

/*******
 * SHOW OR HIDE MENU
 * Function responsible for showing or hiding the menu when clicked on menu burger
*******/
function showHideMenu(event) {
    const element = event.target;

    if (element.classList.contains('nav-item')) {
        
        if (burger.classList.contains('on')) {
            // Removes the show-menu and show-menu-links classes to the nav and nav_links
            nav.classList.remove('show-menu');
            navLinks.classList.remove('show-menu-links');
            socials.classList.remove('show-menu-social');
            burger.innerText = 'menu';
            burger.classList.remove('on');

            document.querySelector('html').style.overflow = 'scroll';
        }
    } else if (element.classList.contains('burger')) {

        if (burger.classList.contains('on')) {
            // Removes the show-menu and show-menu-links classes to the nav and nav_links
            nav.classList.remove('show-menu');
            navLinks.classList.remove('show-menu-links');
            socials.classList.remove('show-menu-social');
            burger.innerText = 'menu';
            burger.classList.remove('on');

            document.querySelector('html').style.overflow = 'scroll';
        } else {
            // We add the show-menu and show-menu-links classes to the nav and navlinks (respectivelly)
            // with the nav and nav_links ids
            nav.classList.add('show-menu');
            navLinks.classList.add('show-menu-links');
            socials.classList.add('show-menu-social');
            // Re-position the burger
            burger.style.alignSelf = 'center';
            burger.innerText = 'clear';
            // Add some type of flag to warn that is on
            burger.classList.add('on');   
            
            document.querySelector('html').style.overflow = 'hidden';
        }
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
        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
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

/******* 
 * SHOW SCROLL TOP
 * Function responsible for scrolling to the top 
*******/
function scrollToTop() {
    // When the scroll is higher than 10 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(window.scrollY > 10) {
        scrollTop.classList.add('show-scrolltop'); 
    } else {
        scrollTop.classList.remove('show-scrolltop');
    } 
}

/******* 
 * SCROLL REVEAL
 * Library responsible for scroll reveal transition on  
*******/
const scrollReveal = ScrollReveal({ 
    distance: '80px', // Distance covered to the static position
    duration: 1500, // Duration of the transition in ms (1800ms = 1,8s)
    reset: true, // Boolean value on if we want to reset the transition or not
});

const scrollReveal2 = ScrollReveal({ 
    distance: '5px', // Distance covered to the static position
    duration: 1500, // Duration of the transition in ms (1800ms = 1,8s)
    reset: true, // Boolean value on if we want to reset the transition or not
});

scrollReveal.reveal(`.presentation, .availability-status, .skills-title`, {
    origin: 'left' // direction of the transition
})

scrollReveal2.reveal(`.me-img, .filters`, {
    origin: 'right' // direction of the transition
})

scrollReveal.reveal(`.skill-level`, {
    origin: 'bottom', // direction of the transition
    interval: 1000 // Time between each reveal
})

scrollReveal.reveal(`.title,
           .section-content,
           .footer-section`, {
    origin: 'top', // direction of the transition
    interval: 800 // Time between each reveal
})



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
