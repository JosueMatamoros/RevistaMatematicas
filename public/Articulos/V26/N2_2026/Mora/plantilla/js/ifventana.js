/**
 * Sistema de ventanas emergentes con iframe
 * Curso de Probabilidad - ITCR
 */

(function() {
  'use strict';

  const overlay = document.getElementById('ifventana-overlay');
  const popup = document.getElementById('ifventana-popup');
  const iframe = document.getElementById('ifventana-iframe');
  const closeBtn = document.querySelector('.ifventana-close');

  // Función para abrir ventana
  function ifventanaAbrir(url) {
    if (!url) return;
    
    iframe.src = url;
    overlay.classList.add('active');
    popup.classList.add('active');
    document.body.style.overflow = 'hidden'; // Bloquear scroll
  }

  // Función para cerrar ventana
  function ifventanaCerrar() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
    
    // Limpiar iframe después de la animación
    setTimeout(() => {
      iframe.src = '';
    }, 300);
  }

  // Event listeners
  if (closeBtn) {
    closeBtn.addEventListener('click', ifventanaCerrar);
  }

  if (overlay) {
    overlay.addEventListener('click', ifventanaCerrar);
  }

  // Cerrar con ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && popup.classList.contains('active')) {
      ifventanaCerrar();
    }
  });

  // Delegar eventos a los enlaces
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('ifventana-link')) {
      e.preventDefault();
      const url = e.target.getAttribute('data-url');
      ifventanaAbrir(url);
    }
  });

  // Exponer funciones globalmente (por si se necesitan)
  window.ifventanaAbrir = ifventanaAbrir;
  window.ifventanaCerrar = ifventanaCerrar;

})();
