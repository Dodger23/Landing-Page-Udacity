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

/**
 * Define Global Variables
 * 
 */

let nav = document.getElementById('navbar__list');

let main = document.getElementsByTagName('main')[0];

let content = [{
        head: "Section 1",
        id: "1",
        p1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci
        eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam
        in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.`,
        p2: `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet
    porttitor tortor, eget elementum tortor mollis non.`,
    },
    {
        head: "Section 2",
        id: "2",
        p1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci
        eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam
        in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.`,
        p2: `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet
    porttitor tortor, eget elementum tortor mollis non.`,
    },
    {
        head: "Section 3",
        id: "3",
        p1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci
        eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam
        in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.`,
        p2: `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet
    porttitor tortor, eget elementum tortor mollis non.`,
    },
    {
        head: "Section 4",
        id: "4",
        p1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci
        eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam
        in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.`,
        p2: `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet
    porttitor tortor, eget elementum tortor mollis non.`,
    },
];







/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

/**
 * @description Checks if an element is in the current viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= 200 && rect.top >= -500
    );
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
/**
 * @description Build the navbar from the sections objects array 
 */
function buildNav() {
    let sections = document.querySelectorAll('section');
    let frag = document.createDocumentFragment();
    sections.forEach(function(section) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.innerText = section.getAttribute('data-nav');
        a.style.cursor = 'pointer';
        a.classList.add('menu__link');
        li.appendChild(a);
        frag.appendChild(li);
    })
    nav.appendChild(frag);
}




// Add class 'active' to section when near top of viewport

/**
 * @description Add class 'active' to section when near top of viewport
 */
function addClassActiveToSection() {
    let sections = [...document.querySelectorAll('section')];
    let nav = document.querySelectorAll('li a');
    console.log(nav);

    document.addEventListener('scroll', function() {
        let i = 0;
        sections.forEach(function(section) {
            if (isInViewport(section)) {
                section.classList.add('your-active-class')
                nav.item(i).classList.add('menu__active__link');
            } else {
                section.classList.remove('your-active-class');
                nav.item(i).classList.remove('menu__active__link');
            }
            i++;
        })
    })
}




// Scroll to anchor ID using scrollTO event
/**
 * @description Scroll to anchor ID using scrollTO event
 */
function scrollToSection() {
    let sections = [...document.querySelectorAll('section')];
    for (let i = 0; i < content.length; i++) {
        nav.childNodes[i].addEventListener('click', function() {
            sections[i].scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}



/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build sections 
content.forEach(function(section) {
    let s = document.createElement('section');
    s.setAttribute('id', `section${section.id}`);
    s.setAttribute('data-nav', `Section ${section.id}`);
    s.innerHTML = `
    <div class="landing__container">
        <h2>${section.head}</h2>
        <p>${section.p1}</p>
        <p>${section.p2}</p>
    </div>
    `;
    main.appendChild(s);
})

// Build menu
buildNav();

// Scroll to section on link click
scrollToSection();

// Set sections as active
addClassActiveToSection();