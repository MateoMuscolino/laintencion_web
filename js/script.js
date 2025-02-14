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

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.nav-menu-btn'); // Selects the button
    const navMenu = document.querySelector('nav ul'); // Selects the menu

    if (!menuBtn || !navMenu) {
        console.error("Menu button or navigation menu not found!");
        return;
    }

    menuBtn.addEventListener('click', () => {
        console.log("Menu button clicked!"); // Debugging
        menuBtn.classList.toggle('active'); // Toggle button state
        navMenu.classList.toggle('active'); // Toggle menu visibility
    });

    // Close menu when clicking a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            console.log("Menu item clicked!");
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            console.log("Clicked outside, closing menu...");
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});
