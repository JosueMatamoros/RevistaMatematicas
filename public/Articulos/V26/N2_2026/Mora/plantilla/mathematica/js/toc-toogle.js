document.addEventListener('DOMContentLoaded', function() {
          const btn = document.querySelector('.toc-btn');
          const container = document.getElementById('toc-container');
          if (btn && container) {
            btn.addEventListener('click', function() {
              container.classList.toggle('visible');
              this.classList.toggle('collapsed');
            });
          }
        });
