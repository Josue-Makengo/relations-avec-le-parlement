
const submenuButtons = document.querySelectorAll('.nav__link--submenu');

submenuButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation(); // Empêche le clic de remonter et de fermer le menu immédiatement

    const expanded = button.getAttribute('aria-expanded') === 'true';

    // Fermer tous les autres sous-menus
    submenuButtons.forEach(btn => btn.setAttribute('aria-expanded', 'false'));

    // Ouvrir ou fermer le menu actuel
    button.setAttribute('aria-expanded', String(!expanded));
  });
});

// Fermer les sous-menus si clic en dehors
document.addEventListener('click', () => {
  submenuButtons.forEach(button => button.setAttribute('aria-expanded', 'false'));
});


// navigations version mobile 

class MobileMenu {
  constructor() {
    this.checkbox = document.querySelector('.navbar__checkbox');
    this.menu = document.querySelector('.nav__list');
    this.menuIcon = document.getElementById('menu');
    this.closeIcon = document.getElementById('close');
    this.toggle = document.querySelector('.navbar__toggle');

    this.toggle.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    this.menu.classList.toggle('open'); // on gère via classe CSS
    this.menuIcon.style.display = this.menu.classList.contains('open') ? 'none' : 'block';
    this.closeIcon.style.display = this.menu.classList.contains('open') ? 'block' : 'none';
    this.checkbox.checked = this.menu.classList.contains('open'); // synchronise la checkbox
  }
}

// Initialisation
new MobileMenu();

