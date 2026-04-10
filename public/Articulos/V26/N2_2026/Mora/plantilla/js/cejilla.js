/* ═══════════════════════════════════════════════════════════
   CEJILLA - JavaScript para pestañas colapsables
   ═══════════════════════════════════════════════════════════ */
// cejilla.js - Botón desplegable para contenido matemático
(function() {
    'use strict';

    /// Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCejillas);
    } else {
        initCejillas();
    }

    function initCejillas() {
        // Buscar todos los botones cejilla
        const buttons = document.querySelectorAll('.cejilla-toggle');
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const expanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', String(!expanded));
                
                const contentId = this.getAttribute('aria-controls');
                const content = document.getElementById(contentId);
                
                if (content) {
                    content.hidden = expanded;
                    
                    // Si el contenido oculto contiene MathJax, re-renderizar
                    if (!expanded && window.MathJax && window.MathJax.typesetPromise) {
                        window.MathJax.typesetPromise([content]);
                    }
                }
            });
        });
    }

    // Escuchar eventos de MathJax
    if (window.MathJax) {
        MathJax.startup = MathJax.startup || {};
        const originalReady = MathJax.startup.ready;
        MathJax.startup.ready = function() {
            originalReady();
            initCejillas();
        };
    }
})();
