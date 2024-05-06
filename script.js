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


/*document.addEventListener("DOMContentLoaded", function() {
    var landingPage = document.querySelector('.landing-page');
    var mainContent = document.querySelector('main');

    // Detect the end of the animation and show the main content
    landingPage.addEventListener('animationend', function() {
        showMainContent();
    });*/

/*    function showMainContent() {
        // Hide the landing page and display the main content
        landingPage.style.display = 'none';
        mainContent.style.display = 'block';
    }
});*/
const cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", function (e){
    window.requestAnimationFrame(() => {
        cursor.style.top = `${e.clientY - cursor.offsetHeight/2}px`;
        cursor.style.left = `${e.clientX - cursor.offsetWidth/2}px`;
    });
})
document.addEventListener('DOMContentLoaded', function() {
    // Select all images within .box-project
    const images = document.querySelectorAll('.fa-regular');

    // Add click event listener to each image
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            // Get the current project's ID
            const currentProjectId = this.closest('.box-container-sub').id;
            // Determine the next project's ID
            let nextProjectId = '';
            if (currentProjectId === 'project1') {
                nextProjectId = 'project2';
            } else if (currentProjectId === 'project2') {
                nextProjectId = 'project3';
            } else {
                // Reset to the first project if the current is the last
                nextProjectId = 'project1';
            }

            // Calculate the transform value based on the next project's position
            const nextProjectElement = document.getElementById(nextProjectId);
            const nextProjectPosition = nextProjectElement.offsetTop;
            const transformValue = `translateY(-${nextProjectPosition}px)`;

            // Apply the transform to the .box-container-projects div
            const container = document.querySelector('.box-container-projects');
            container.style.transform = transformValue;
        });
    });
});

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e1)=>observer.observe(e1));