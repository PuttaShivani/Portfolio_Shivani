
var typed =new Typed('.text',{
  strings:['Web Developer','Full-Stack Developer','Mern-Stack Developer'],
  typeSpeed:50,
  backSpeed:50,
  loop:true,
});

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    const icon = menuToggle.querySelector('i');
    if (icon) {
      icon.className = menu.classList.contains('open') ? 'ri-close-line' : 'ri-menu-line';
    }
  });

  document.querySelectorAll('.menu li a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      const icon = menuToggle.querySelector('i');
      if (icon) icon.className = 'ri-menu-line';
    });
  });
}