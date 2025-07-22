// === Botón de scroll hacia arriba ===
const scrollUp = () => {
  const scrollUpBtn = document.getElementById('scroll-up');
  if (this.scrollY >= 350) {
    scrollUpBtn.classList.add('show-scroll');
  } else {
    scrollUpBtn.classList.remove('show-scroll');
  }
};
window.addEventListener('scroll', scrollUp);

// === Scroll activo en navegación ===
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add('active-link');
    } else {
      navLink.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);

// === Modo oscuro / claro ===
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Estado guardado del usuario
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtener el tema actual
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// Aplicar estado guardado si existe
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Alternar tema manualmente
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // Guardar en localStorage
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

// === Animaciones con ScrollReveal ===
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__data, .products__container, .footer__container`);
sr.reveal(`.home__images`, { delay: 600, origin: 'bottom' });
sr.reveal(`.new__card, .brand__img`, { interval: 100 });
