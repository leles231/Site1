
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu-lateral');

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

  window.addEventListener('scroll', () => {
    document.querySelectorAll('.bloco, .card').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 50) {
        el.classList.add('show');
      }
    });
  });

  function enviarFormulario(event) {
    event.preventDefault();
    document.getElementById("mensagem-enviada").style.display = "block";
    setTimeout(() => {
      document.getElementById("mensagem-enviada").style.display = "none";
      document.querySelector(".formulario").reset();
    }, 3000);
    return false;
  }
