//Implementing hamburger on small screens//
let menuIcon = document.querySelector('#icon-menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header nav a');

// Adding active field class in navbar links on scroll//
window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    //removing toggle icon and navbar on click or scroll//
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};

//Scroll reveal//
ScrollReveal({
    reset:true,
    distance:'60px',
    duration:2500,
    delay:400
});
ScrollReveal().reveal('.home-content, .heading',{ delay:500,origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{ delay:600,origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{ delay:700,origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content',{ delay:700,origin:'right' });

//Typed  multiple-line javaScript//
const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer','Graphic Designer','Videographer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
