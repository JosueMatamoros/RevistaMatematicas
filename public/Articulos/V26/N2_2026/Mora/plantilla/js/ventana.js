// js/ventana.js
function AbrirVentana(url, titulo, ancho, alto) {
  titulo = titulo || "Ventana";
  // Calcular dimensiones como porcentaje de la pantalla disponible
  // Si se pasa un valor, usarlo como porcentaje (ej: 70 = 70%)
  // Si no, usar 75% por defecto
  var porcentajeAncho = ancho || 75;
  var porcentajeAlto = alto || 80;
  
  var anchoFinal = Math.floor(screen.availWidth * porcentajeAncho / 100);
  var altoFinal = Math.floor(screen.availHeight * porcentajeAlto / 100);
  
  // Centrar la ventana
  var left = Math.floor((screen.availWidth - anchoFinal) / 2);
  var top = Math.floor((screen.availHeight - altoFinal) / 2);
  
  var ventana = window.open(
    url, titulo,
    "width=" + anchoFinal + ",height=" + altoFinal +
    ",left=" + left + ",top=" + top +
    ",scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no,status=yes"
  );
  
  if (!ventana || ventana.closed || typeof ventana.closed === "undefined") {
    alert(
      "El bloqueador de popups impidió abrir la ventana.\n\n" +
      "Por favor, permite los popups para este sitio o haz clic en el enlace:\n\n" +
      url
    );
  }
}
