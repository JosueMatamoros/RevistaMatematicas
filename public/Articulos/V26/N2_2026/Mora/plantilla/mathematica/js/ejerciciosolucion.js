document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".ejercicio-solucion button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const sol = btn.nextElementSibling;
      if (sol) {
        sol.classList.toggle("visible");
      }
    });
  });
});

