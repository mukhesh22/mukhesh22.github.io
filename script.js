//hamburger icon and the navigation links
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');


burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    // We also animate the burger icon into a cross
    burger.classList.toggle('toggle');
});

const links = document.querySelectorAll('.nav-links li a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80, 
            behavior: 'smooth'
        });

        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) { 
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').substring(1); 
        if (href === current) {
            link.classList.add('active');
        }
    });
});