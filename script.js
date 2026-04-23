const scrollLinks = document.querySelectorAll('a[href^="#"]');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
const heroHeading = document.querySelector('.hero h1');

function animateHeadingText() {
    if (!heroHeading) return;
    const text = heroHeading.textContent.trim();
    heroHeading.textContent = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        heroHeading.appendChild(span);

        setTimeout(() => {
            span.classList.add('visible');
        }, index * 40);
    });
}

function setActiveNav(id) {
    navLinks.forEach(link => {
        const isActive = link.hash === `#${id}`;
        link.classList.toggle('active', isActive);
    });
}

scrollLinks.forEach(link => {
    const targetId = link.getAttribute('href');
    if (targetId === '#' || !targetId) return;

    link.addEventListener('click', event => {
        const target = document.querySelector(targetId);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        if (entry.target.id) setActiveNav(entry.target.id);
    });
}, {
    threshold: 0.18,
});

sections.forEach(section => {
    section.classList.add('reveal');
    revealObserver.observe(section);
});

window.addEventListener('load', () => {
    animateHeadingText();
    const hero = document.querySelector('.hero');
    if (hero) hero.classList.add('visible');
});

window.addEventListener('mousemove', event => {
    const x = (event.clientX / window.innerWidth - 0.5) * 22;
    const y = (event.clientY / window.innerHeight - 0.5) * 22;
    document.documentElement.style.setProperty('--pointer-x', `${x}px`);
    document.documentElement.style.setProperty('--pointer-y', `${y}px`);
});
