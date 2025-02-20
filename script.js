window.onload = () => {
  const button = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');

  button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  const currentYearSpan = document.getElementById('current-year');
  currentYearSpan.innerHTML = `© ${new Date().getFullYear()}`;
};
