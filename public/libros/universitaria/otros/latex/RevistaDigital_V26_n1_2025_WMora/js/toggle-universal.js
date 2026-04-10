/* ═══════════════════════════════════════════════════════════
   TOGGLE UNIVERSAL - Sistema unificado para todos los toggles
   Reemplaza: toc-toggle.js, toggleVentana.js, cejilla.js
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';
  
  /**
   * Sistema universal de toggle con tres modos:
   * 
   * 1. MODO CEJILLA (aria-expanded + hidden)
   *    - Selector: .cejilla-toggle
   *    - Usa: aria-expanded, aria-controls
   *    - Target: hidden attribute
   * 
   * 2. MODO TOC (clase visible/collapsed)
   *    - Selector: .toc-btn
   *    - Target: #toc-container
   *    - Usa: .visible, .collapsed
   * 
   * 3. MODO VENTANA (data-target + display)
   *    - Selector: .toggle-ventana-btn
   *    - Usa: data-target
   *    - Target: display none/block
   */
  
  // ═══════════════════════════════════════════════════════════
  // MODO 1: CEJILLA (aria-expanded + hidden)
  // ═══════════════════════════════════════════════════════════
  function initCejillas() {
    document.querySelectorAll('.cejilla-toggle').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        
        var bodyId = btn.getAttribute('aria-controls');
        var body = document.getElementById(bodyId);
        
        if (body) {
          body.hidden = expanded;
        }
      });
    });
  }
  
  // ═══════════════════════════════════════════════════════════
  // MODO 2: TOC (tabla de contenidos)
  // ═══════════════════════════════════════════════════════════
  function initTOC() {
    var btn = document.querySelector('.toc-btn');
    var container = document.getElementById('toc-container');
    
    if (btn && container) {
      btn.addEventListener('click', function() {
        container.classList.toggle('visible');
        this.classList.toggle('collapsed');
      });
    }
  }
  
  // ═══════════════════════════════════════════════════════════
  // MODO 3: VENTANA (data-target + display)
  // ═══════════════════════════════════════════════════════════
  function initVentanas() {
    document.querySelectorAll('.toggle-ventana-btn').forEach(function(button) {
      var targetId = button.getAttribute('data-target');
      var ventana = document.getElementById(targetId);
      
      if (!ventana) {
        console.warn('Toggle Universal: Elemento no encontrado:', targetId);
        return;
      }
      
      button.addEventListener('click', function() {
        ventana.style.display = 
          ventana.style.display === 'none' ? 'block' : 'none';
      });
    });
  }
  
  // ═══════════════════════════════════════════════════════════
  // INICIALIZACIÓN AUTOMÁTICA
  // ═══════════════════════════════════════════════════════════
  function initAll() {
    initCejillas();
    initTOC();
    initVentanas();
  }
  
  // Inicializar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
  
  // Exportar para uso manual si es necesario
  window.ToggleUniversal = {
    initCejillas: initCejillas,
    initTOC: initTOC,
    initVentanas: initVentanas,
    initAll: initAll
  };
  
}());
