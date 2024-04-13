function toggleNav() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function() {
    var landingPage = document.querySelector('.landing-page');
    var mainContent = document.querySelector('main');

    // Detect the end of the animation and show the main content
    landingPage.addEventListener('animationend', function() {
        showMainContent();
    });

    function showMainContent() {
        // Hide the landing page and display the main content
        landingPage.style.display = 'none';
        mainContent.style.display = 'block';
    }
});