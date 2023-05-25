let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
     menuIcon.classList.toggle('bx-x');
     navbar.classList.toggle('active');

};


 let Sections = document.querySelectorAll('section');
 let navLinks= document.querySelectorAll('header nav a');


window.onscroll = () => {
Selections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id +']').classList.add('active');
        });

    };
});

let header = document.querySelector('header');

header.classList.toggle('sticky' , window.scrollY > 100);


menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

 };

 ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
    });

    
    ScrollReveal().reveal('.home-content, .heading', { origin:'top' });

    ScrollReveal().reveal('.home-image, .Services-container, .portfolio-image, .input-box,.input-box2' ,{ origin:'bottom' });

    ScrollReveal().reveal('.home-content h1,.about-image' ,{ origin:'left' });

    ScrollReveal().reveal('.home-content p,.about-content' ,{ origin:'right' });



var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Cloud Developer', 'Student'],
    typeSpeed: 50,
    backSpeed:100,
    backDelay:1000,
loop: true
});