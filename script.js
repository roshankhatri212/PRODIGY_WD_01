document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#555';
        } else {
            header.style.backgroundColor = '#333';
        }
    });

    var navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            this.style.color = '#3498db';
        });

        link.addEventListener('mouseout', function() {
            this.style.color = '#fff';
        });
    });
});
