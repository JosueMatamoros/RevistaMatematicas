		function toggleSolution(id, btn) {
			var el = document.getElementById('sol-' + id);
			if (el.style.display === "none") {
				el.style.display = "block";
				btn.innerText = "Ocultar solución";
			} else {
				el.style.display = "none";
				btn.innerText = "Mostrar solución";
			}
		}
