// Abrir e fechar o menu lateral
const menuToggle = document.getElementById('menu-toggle');
const menuLateral = document.getElementById('menu-lateral');

menuToggle.addEventListener('click', () => {
  menuLateral.style.display = menuLateral.style.display === 'flex' ? 'none' : 'flex';
});

// Fechar o menu ao clicar fora dele ou em um link
window.addEventListener('click', (e) => {
  if (!menuLateral.contains(e.target) && !menuToggle.contains(e.target)) {
    menuLateral.style.display = 'none';
  }
});

// Fechar menu ao clicar em qualquer link dentro dele
menuLateral.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuLateral.style.display = 'none';
  });
});
    // Mostrar elementos com efeito fade-in ao rolar
    window.addEventListener('scroll', () => {
      document.querySelectorAll('.bloco, .card').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
          el.classList.add('show');
        }
      });

      document.getElementById('topo').style.display = window.scrollY > 200 ? 'block' : 'none';
    });
    
    function toggleMenu() {
      const menu = document.getElementById('menuLateral');
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    }

    function fecharMenu() {
      document.getElementById('menuLateral').style.display = 'none';
    }