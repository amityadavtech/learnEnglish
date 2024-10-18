document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    // Toggle menu on click
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('show');
            menuToggle.textContent = nav.classList.contains('show') ? '✖' : '☰';
        });
    } else {
        console.error('Element with class "menu-toggle" not found.');
    }

    const typedElement = document.querySelector('.typedText');
    if (typedElement) {
        const options = {
            strings: ["Mentor", "Guide", "Teacher"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            showCursor: true,
        };
        // Initialize Typed.js only if the element exists
        new Typed('.typedText', options);
    } else {
        console.error('Element with class "typedText" not found.');
    }

    // Toggle more content visibility on click
    document.querySelector('.about-more').addEventListener('click', function (e) {
        e.preventDefault();
        const moreContent = document.getElementById('more-content');
        moreContent.classList.toggle('hidden');

        // Start counting if more content is shown
        if (!moreContent.classList.contains('hidden')) {
            startCounting();
        }
    });

    function startCounting() {
        const counters = {
            experience: { element: document.getElementById('experience-count'), target: 5 },
            students: { element: document.getElementById('students-count'), target: 100 },
            courses: { element: document.getElementById('courses-count'), target: 10 },
            workshops: { element: document.getElementById('workshops-count'), target: 20 },
        };

        for (const key in counters) {
            const { element, target } = counters[key];
            let count = 0;
            const interval = setInterval(() => {
                if (count < target) {
                    count++;
                    element.innerText = `${count}+`;
                } else {
                    clearInterval(interval);
                }
            }, 100); // Changed interval time to make counting visible
        }
    }

    // Smooth scroll for navigation links
    const menuLinks = document.querySelectorAll('nav a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default anchor click behavior

            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Select the target section

            // Scroll to the target section smoothly
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Close the menu after clicking
                if (nav.classList.contains('show')) {
                    nav.classList.remove('show');
                    menuToggle.textContent = '☰'; // Reset menu toggle icon
                }

                // Remove 'active' class from all links
                menuLinks.forEach(item => item.classList.remove('active'));
                // Add 'active' class to the clicked link
                this.classList.add('active');
            } else {
                console.error(`Element with ID ${targetId} not found.`);
            }
        });
    });
});


document.querySelector('.cta-button').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor click behavior
    const targetId = this.getAttribute('href'); // Get the target ID from href
    const targetElement = document.querySelector(targetId); // Select the target element

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element smoothly
    } else {
        console.error(`Element with ID ${targetId} not found.`);
    }
});
