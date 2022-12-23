
/**
 * Define Global Variables
 * 
*/

// access navbar list
const navBarList = document.querySelector('#navbar__list'); 
// access sections
const sections = document.querySelectorAll('section'); 


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// function to build the Nav bar list
function buildNavBarList() {
    let fragment = document.createDocumentFragment();
    for (let section of sections) {
        let navBarItem = document.createElement('li');
        navBarItem.classList.add(section.id);
        navBarItem.innerHTML = `<a class = 'menu__link' href="#${section.id}">${section.dataset.nav}</a>`;
        fragment.appendChild(navBarItem);
    } 
    navBarList.appendChild(fragment);
}

// funciton for scroll smoothly when clicking anchor
function _scroll(evt) {
    evt.preventDefault();
    const ele = document.querySelector(evt.target.getAttribute('href'));
    ele.scrollIntoView({behavior: 'smooth'});
    console.log(evt.target);
}

// functin for add active class to active section
function makeActive() {
    for (let section of sections) {
        const box = section.getBoundingClientRect();

        if (box.top <= 150 && box.bottom >= 150) {
            section.classList.add('active');
            document.querySelector('.' + section.id).classList.add('active_link');
            
        } else {
            section.classList.remove('active');
            document.querySelector('.' + section.id).classList.remove('active_link');
        }
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNavBarList();

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', makeActive, false);

// Scroll to anchor ID using scrollTO event

navBarList.addEventListener('click', _scroll, false);

/**
 * End Main Functions
 * Begin Events
 * 
*/





