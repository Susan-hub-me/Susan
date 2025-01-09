// JavaScript to handle the navbar toggling on small screens
const navbarLinks = document.querySelector('.nav-links');
const navbarToggle = document.createElement('div');
navbarToggle.classList.add('navbar-toggle');
navbarToggle.innerHTML = '<i class="fas fa-bars"></i>';

document.querySelector('.navbar').appendChild(navbarToggle);

navbarToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// For smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
