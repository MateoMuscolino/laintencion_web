document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.slider-track');
    const slides = Array.from(track.children);
    let currentIndex = 0;

    function updateSlidePosition() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    }

    // Automatic slide change
    setInterval(moveToNextSlide, 5000); // Change slide every 5 seconds
});

document.addEventListener('DOMContentLoaded', function() { // It ensures that the JavaScript doesn't run until the HTML document is fully loaded
    const menuBtn = document.querySelector('.nav-menu-btn'); // hamburger menu button
    const navMenu = document.querySelector('nav ul'); // `<ul>` containing our navigation links

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active'); // triggers the CSS that changes the hamburger icon to an 'X'
        navMenu.classList.toggle('active'); // toggles the 'active' class on the navigation menu
    });

    // Close menu when clicking a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => { // adds click event listeners to all navigation links
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) { // It checks if the click was outside the navigation
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active'); // allows users to close the menu by clicking anywhere outside of it
        }
    });
});

