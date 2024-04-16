document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburgerMenu.addEventListener("click", function () {
        hamburgerMenu.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Add an event listener to each navigation link to hide the menu when a link is clicked
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            hamburgerMenu.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
});

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
const cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", function (e){
    window.requestAnimationFrame(() => {
        cursor.style.top = `${e.clientY - cursor.offsetHeight/2}px`;
        cursor.style.left = `${e.clientX - cursor.offsetWidth/2}px`;
    });
})
