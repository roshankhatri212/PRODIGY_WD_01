// script.js
document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    var contentContainer = document.getElementById('content');

    function loadContent(route) {
        var filePath = 'content/' + route.slice(1) + '.html';

        fetch(filePath)
            .then(response => response.text())
            .then(content => {
                contentContainer.innerHTML = content;
            })
            .catch(error => {
                console.error('Error loading content:', error);
            });
    }

    function handleNavigation() {
        var route = window.location.hash || '#/section1';
        loadContent(route);
    }

    window.addEventListener('hashchange', handleNavigation);
    handleNavigation(); // Load content on initial page load
});
