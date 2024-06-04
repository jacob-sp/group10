// JavaScript code for interactive features

// Example: Smooth Scroll for Navigation Links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href').substring(0, event.currentTarget.getAttribute('href').lastIndexOf('.'));
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            } else {
                window.location.href = event.currentTarget.getAttribute('href');
            }
        });
    });
});
