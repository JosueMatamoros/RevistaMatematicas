// toggleVentana.js
(function() {
    class ToggleVentana {
        constructor(button) {
            this.button = button;
            this.targetId = button.getAttribute('data-target');
            this.ventana = document.getElementById(this.targetId);
            
            if (!this.ventana) {
                console.error(`Elemento no encontrado: ${this.targetId}`);
                return;
            }

            this.button.addEventListener('click', () => this.toggle());
        }

        toggle() {
            this.ventana.style.display = 
                this.ventana.style.display === 'none' ? 'block' : 'none';
        }
    }

    // Inicialización
    document.addEventListener('DOMContentLoaded', () => {
        const buttons = document.querySelectorAll('.toggle-ventana-btn');
        buttons.forEach(button => new ToggleVentana(button));
    });
})();
