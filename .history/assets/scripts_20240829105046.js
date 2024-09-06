// script.js
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#2575fc';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = 'white';
        });
    });
});
