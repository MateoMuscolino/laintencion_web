document.addEventListener('DOMContentLoaded', function() {
    // Image Slider
    const track = document.querySelector('.slider-track');
    if (track) {
        const slides = Array.from(track.children);
        let currentIndex = 0;

        function updateSlidePosition() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function moveToNextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlidePosition();
        }

        setInterval(moveToNextSlide, 5000);
    }

    // Mobile Navigation
    const menuBtn = document.querySelector('.nav-menu-btn');
    const navMenu = document.querySelector('nav ul');
    const nav = document.querySelector('nav');

    if (menuBtn && navMenu) {
        // Prevent click events from bubbling up from the menu button
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            menuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target)) {
                menuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});
