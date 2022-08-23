/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


// Variables
const navbarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll('section')

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav
sections.forEach((section) => {
    
    let navLinks = `
        <li>
            <a  data-id=${section.id}>${section.dataset.nav}</a>
        </li>
    `
    navbarList.insertAdjacentHTML('beforeend', navLinks)
})


const navbarLinks = document.querySelectorAll('a');

// Add class 'active' to section when near top of viewport
sections.forEach((section, index) => {
    window.addEventListener('scroll', () => {
        if (section.getBoundingClientRect().top < window.innerHeight && section.getBoundingClientRect().top > 100) {
            section.classList.add('your-active-class')
            navbarLinks[index].classList.add('link-active')
        }else {
            section.classList.remove('your-active-class');
            navbarLinks[index].classList.remove('link-active')
        }
    })
})


// Scroll to anchor ID using scrollTO event
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        const section = document.getElementById(link.dataset.id);
        console.log(section)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
        })
    })
})


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
const iconsContainer = document.querySelector('.icons');
const menuIcon = document.querySelector('.bars');
const xIcon = document.querySelector('.x-icon');
const navContainer = document.querySelector('.nav-container');


iconsContainer.addEventListener('click', () => {
    iconsContainer.classList.toggle('visible')

    if (iconsContainer.classList.contains('visible')) {
        menuIcon.classList.remove('visible')
        xIcon.classList.remove('hidden')
        navContainer.classList.remove('hidden')
        menuIcon.classList.add('hidden')
        xIcon.classList.add('visible')
        navContainer.classList.add('visible')
    }else {
        menuIcon.classList.add('visible')
        xIcon.classList.add('hidden')
        navContainer.classList.add('hidden')
        menuIcon.classList.remove('hidden')
        xIcon.classList.remove('visible')
        navContainer.classList.remove('visible')
    }

})


// Scroll to section on link click

// Set sections as active


