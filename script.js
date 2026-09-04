const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '76px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '20px 7vw';
  nav.style.background = '#080a0c';
  nav.style.flexDirection = 'column';
  nav.style.borderBottom = '1px solid #1c2226';
});
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', () => {
  if (window.innerWidth <= 900) nav.style.display = '';
}));

