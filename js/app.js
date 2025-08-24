
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