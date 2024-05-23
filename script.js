
// navbar
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
//cursor
const cursor = document.querySelector('.cursor_outline');

window.addEventListener('mousemove', (e) =>{

    let posX = e.clientX;
    let posY = e.clientY;

    cursor.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 400, fill: 'forwards'});

});

//project slider
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
//background star animation
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const particleContainer = document.querySelector('.particles');
const starBackground = document.querySelector('.star-background');

for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    particleContainer.appendChild(particle);
}

for (let i = 0; i < 300; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    starBackground.appendChild(star);
}


