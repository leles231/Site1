// Abrir e fechar o menu lateral
const menuToggle = document.getElementById('menu-toggle');
const menuLateral = document.getElementById('menu-lateral');

menuToggle.addEventListener('click', () => {
  menuLateral.style.display = menuLateral.style.display === 'flex' ? 'none' : 'flex';
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

function enviarFormulario(event) {
  event.preventDefault();
  document.getElementById("mensagem-enviada").style.display = "block";

  setTimeout(() => {
    document.getElementById("mensagem-enviada").style.display = "none";
    document.querySelector(".formulario").reset();
  }, 3000);

  return false;
}

  // Fecha menu ao clicar fora (opcional)
  document.addEventListener('click', (e) => {
    if (!menuLateral.contains(e.target) && !menuToggle.contains(e.target)) {
      menuLateral.classList.remove('ativo');
      menuToggle.classList.remove('ativo');
    }
  });
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu-lateral');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('ativo');
    menu.classList.toggle('ativo');
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('ativo');
      toggle.classList.remove('ativo');
    }
  });



