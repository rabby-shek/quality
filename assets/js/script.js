document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Function to check if an element is in the viewport
    const isInViewport = function(elem) {
        const bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Function to handle intersection
    const handleIntersection = function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const navLink = document.querySelector(`.navbar-nav .nav-link[href="#${entry.target.id}"]`);
                if (navLink) {
                    // Remove 'active' class from all links
                    navLinks.forEach(navLink => {
                        navLink.classList.remove('active');
                    });
                    // Add 'active' class to the corresponding link
                    navLink.classList.add('active');
                }
            }
        });
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Change this threshold as needed
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});
