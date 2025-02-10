document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.nav-menu-btn');
    const navMenu = document.querySelector('nav ul');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});