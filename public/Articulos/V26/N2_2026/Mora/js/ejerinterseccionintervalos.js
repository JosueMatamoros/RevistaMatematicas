
(function(){
  "use strict";
  const canvas = document.getElementById("canvasIntersect");
  const ctx = canvas.getContext("2d");
  const margin = 50;
  const domainMin = -2;
  const domainMax = 6;
  const scale = (canvas.width - 2 * margin) / (domainMax - domainMin);

  let intervalo1, intervalo2, interseccion;

  function generarIntervaloAleatorio() {
    let a = Math.floor(Math.random() * (domainMax - domainMin)) + domainMin;
    let b = Math.floor(Math.random() * (domainMax - domainMin)) + domainMin;
    if(a >= b) {
      if(a === domainMax) a = domainMin;
      b = a + 1;
      if(b > domainMax) b = domainMax;
    }
    const opciones = [
      { left: "[", right: "]" },
      { left: "]", right: "]" },
      { left: "]", right: "[" },
      { left: "[", right: "[" }
    ];
    const sel = opciones[Math.floor(Math.random() * opciones.length)];
    return {
      a, b,
      leftSymbol: sel.left,
      rightSymbol: sel.right,
      leftClosed: (sel.left === "["),
      rightClosed: (sel.right === "]")
    };
  }

  function actualizarControles() {
    document.getElementById("int1Intersect").value = `${intervalo1.leftSymbol}${intervalo1.a}, ${intervalo1.b}${intervalo1.rightSymbol}`;
    document.getElementById("int2Intersect").value = `${intervalo2.leftSymbol}${intervalo2.a}, ${intervalo2.b}${intervalo2.rightSymbol}`;
  }

  function dibujarEjeX() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const yLine = 100;
    ctx.beginPath();
    ctx.moveTo(margin, yLine);
    ctx.lineTo(canvas.width - margin, yLine);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();

    for(let i = domainMin; i <= domainMax; i++){
      const xPos = margin + (i - domainMin) * scale;
      ctx.beginPath();
      ctx.moveTo(xPos, yLine - 5);
      ctx.lineTo(xPos, yLine + 5);
      ctx.stroke();
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(i, xPos, yLine + 20);
    }

    const arrowSize = 10;
    const endX = canvas.width - margin;
    ctx.beginPath();
    ctx.moveTo(endX, yLine);
    ctx.lineTo(endX - arrowSize, yLine - arrowSize/2);
    ctx.lineTo(endX - arrowSize, yLine + arrowSize/2);
    ctx.closePath();
    ctx.fill();
  }

  function dibujarIntervalo(intervalo, color, alpha, yLine) {
    const xA = margin + (intervalo.a - domainMin) * scale;
    const xB = margin + (intervalo.b - domainMin) * scale;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.moveTo(xA, yLine);
    ctx.lineTo(xB, yLine);
    ctx.strokeStyle = color;
    ctx.lineWidth = 6;
    ctx.stroke();
    function drawDisk(x, isClosed) {
      ctx.beginPath();
      ctx.arc(x, yLine, 8, 0, 2 * Math.PI);
      if(isClosed) {
        ctx.fillStyle = color;
        ctx.fill();
      } else {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
    drawDisk(xA, intervalo.leftClosed);
    drawDisk(xB, intervalo.rightClosed);
    ctx.restore();
  }

  function calcularInterseccion(i1, i2) {
    let L, R;
    let leftClosed, rightClosed;
    if(i1.a >= i2.a) {
      L = i1.a;
      leftClosed = i1.leftClosed;
    } else {
      L = i2.a;
      leftClosed = i2.leftClosed;
    }
    if(i1.b <= i2.b) {
      R = i1.b;
      rightClosed = i1.rightClosed;
    } else {
      R = i2.b;
      rightClosed = i2.rightClosed;
    }
    if(L < R || (L === R && leftClosed && rightClosed)) {
      const leftSymbol = leftClosed ? "[" : "]";
      const rightSymbol = rightClosed ? "]" : "[";
      return {
        a: L,
        b: R,
        leftSymbol,
        rightSymbol,
        leftClosed,
        rightClosed
      };
    } else {
      return null;
    }
  }

  function actualizarResultadoInterseccion() {
    interseccion = calcularInterseccion(intervalo1, intervalo2);
    const resultadoDiv = document.getElementById("resultadoInterseccionIntersect");
    if(interseccion) {
      const texto = `${interseccion.leftSymbol}${interseccion.a}, ${interseccion.b}${interseccion.rightSymbol}`;
      resultadoDiv.innerHTML = `$$${texto}$$`;
      MathJax.typesetPromise();
    } else {
      resultadoDiv.innerHTML = "<em>No hay intersección</em>";
    }
    // Ahora sí dibujar todo
    dibujarEjeX();
    dibujarIntervalo(intervalo1, "blue", 1.0, 100);
    dibujarIntervalo(intervalo2, "green", 0.6, 100);
    if(interseccion) {
      dibujarIntervalo(interseccion, "magenta", 1.0, 80);
    }
  }

  function generarIntervalos() {
    intervalo1 = generarIntervaloAleatorio();
    intervalo2 = generarIntervaloAleatorio();
    interseccion = null;
    actualizarControles();
    document.getElementById("resultadoInterseccionIntersect").innerHTML = "";
    dibujarEjeX(); // solo el eje X
  }

  document.getElementById("btnGenerarIntersect").addEventListener("click", generarIntervalos);
  document.getElementById("btnCalcularIntersect").addEventListener("click", actualizarResultadoInterseccion);

  // Inicialización
  generarIntervalos(); // zona gráfica limpia + respuesta vacía
})();
