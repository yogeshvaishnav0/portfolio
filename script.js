const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('mobile-open');
  nav.style.display = open ? 'flex' : '';
  nav.style.position = open ? 'absolute' : '';
  nav.style.top = open ? '76px' : '';
  nav.style.left = open ? '0' : '';
  nav.style.right = open ? '0' : '';
  nav.style.padding = open ? '20px 7vw' : '';
  nav.style.background = open ? '#080a0c' : '';
  nav.style.flexDirection = open ? 'column' : '';
  nav.style.borderBottom = open ? '1px solid #1c2226' : '';
});

document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', () => {
  if (window.innerWidth <= 900) {
    nav.classList.remove('mobile-open');
    nav.style.display = '';
  }
}));

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    nav.classList.remove('mobile-open');
    nav.style = '';
  }
});
