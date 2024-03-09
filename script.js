
// JavaScript for hamburger menu
const toggleButton = document.querySelector('.toggle-button');
const navList = document.getElementById('navList');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});


// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Image slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("gallery-slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// Responsive navigation menu
const toggleButton = document.getElementById('toggleButton');
const navList = document.getElementById('navList');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});
