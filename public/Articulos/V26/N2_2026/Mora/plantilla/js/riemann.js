
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("graphSVG");
  const sumDisplay = document.getElementById("riemannSum");
  const tableBody = document.getElementById("tableBody");
  const sumTotal = document.getElementById("sumTotal");

  const inputFuncion = document.getElementById("funcion");
  const inputA = document.getElementById("a");
  const inputB = document.getElementById("b");
  const botonAplicar = document.getElementById("aplicarBtn");

  const slider = document.getElementById("nSlider");
  const nValue = document.getElementById("nValue");

  let f = x => -Math.pow(x, 3) + Math.pow(x, 2) + x;
  let a = -1;
  let b = 1;
  let n = 5;

  function parseFunction(expr) {
    try {
      let replaced = expr.replace(/\s+/g, '');
      replaced = replaced.replace(/(\d)([a-zA-Z(])/g, '$1*$2');
      replaced = replaced.replace(/([a-zA-Z)])(\d)/g, '$1*$2');
      replaced = replaced.replace(/([a-zA-Z)])([a-zA-Z(])/g, '$1*$2');
      replaced = replaced.replace(/([\w\.\)]+)\^([\w\.\(\)]+)/g, 'Math.pow($1,$2)');
      replaced = replaced.replace(/sin\(/g, 'Math.sin(')
                         .replace(/cos\(/g, 'Math.cos(')
                         .replace(/tan\(/g, 'Math.tan(')
                         .replace(/sqrt\(/g, 'Math.sqrt(')
                         .replace(/ln\(/g, 'Math.log(')
                         .replace(/log\(/g, 'Math.log10(')
                         .replace(/exp\(/g, 'Math.exp(')
                         .replace(/abs\(/g, 'Math.abs(');
      return new Function('x', 'with(Math){ return ' + replaced + '; }');
    } catch (e) {
      console.error("Error en parseFunction:", e.message);
      return x => NaN;
    }
  }

  function scaleX(x, width) {
    return ((x - (a - 1)) / ((b + 1) - (a - 1))) * width;
  }

  function scaleY(y, height, yMin, yMax) {
    return height - ((y - yMin) / (yMax - yMin)) * height;
  }

  function drawGraph() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const NS = "http://www.w3.org/2000/svg";

    canvas.innerHTML = `
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" markerUnits="strokeWidth"
          refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#888"/>
        </marker>
      </defs>
    `;

    const dx = (b - a) / n;
    let yMin = 0;
    let yMax = 1;
    for (let i = 0; i <= n; i++) {
      const x = a + i * dx;
      const y = f(x);
      if (isFinite(y)) {
        yMin = Math.min(yMin, y);
        yMax = Math.max(yMax, y);
      }
    }
    yMin -= 0.1 * Math.abs(yMin);
    yMax += 0.1 * Math.abs(yMax);

    // Rectángulos y puntos
    let sum = 0;
    tableBody.innerHTML = "";
    for (let i = 0; i < n; i++) {
      const x = a + i * dx;
      const y = f(x);
      const area = y * dx;
      sum += area;

      const rect = document.createElementNS(NS, "rect");
      rect.setAttribute("x", scaleX(x, width));
      rect.setAttribute("y", scaleY(Math.max(0, y), height, yMin, yMax));
      rect.setAttribute("width", scaleX(x + dx, width) - scaleX(x, width));
      rect.setAttribute("height", Math.abs(scaleY(y, height, yMin, yMax) - scaleY(0, height, yMin, yMax)));
      rect.setAttribute("fill", y >= 0 ? "#decd87" : "#8dd35f");
      rect.setAttribute("stroke", "#333");
      rect.setAttribute("stroke-width", "1");
      canvas.appendChild(rect);

      const baseDot = document.createElementNS(NS, "circle");
      baseDot.setAttribute("cx", scaleX(x, width));
      baseDot.setAttribute("cy", scaleY(0, height, yMin, yMax));
      baseDot.setAttribute("r", 3);
      baseDot.setAttribute("fill", "black");
      canvas.appendChild(baseDot);

      const topDot = document.createElementNS(NS, "circle");
      topDot.setAttribute("cx", scaleX(x, width));
      topDot.setAttribute("cy", scaleY(y, height, yMin, yMax));
      topDot.setAttribute("r", 4);
      topDot.setAttribute("fill", "#174a7e");
      canvas.appendChild(topDot);

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${i}</td>
        <td>${x.toFixed(3)}</td>
        <td>${y.toFixed(3)}</td>
        <td>${area.toFixed(4)}</td>
      `;
      if (i >= n - 5) tableBody.appendChild(row);
    }

    // Curva encima
    const path = document.createElementNS(NS, "path");
    let d = "";
    for (let x = a - 0.5; x <= b + 0.5; x += 0.01) {
      const sx = scaleX(x, width);
      const sy = scaleY(f(x), height, yMin, yMax);
      d += `${d ? "L" : "M"}${sx},${sy}`;
    }
    path.setAttribute("d", d);
    path.setAttribute("stroke", "#3490dc");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke-width", "4");
    canvas.appendChild(path);

    // Ejes encima de todo
    const x0 = scaleX(0, width);
    const y0 = scaleY(0, height, yMin, yMax);
    const axes = document.createElementNS(NS, "g");

    const xAxis = document.createElementNS(NS, "line");
    xAxis.setAttribute("x1", scaleX(a - 1, width));
    xAxis.setAttribute("x2", scaleX(b + 1, width));
    xAxis.setAttribute("y1", y0);
    xAxis.setAttribute("y2", y0);
    xAxis.setAttribute("stroke", "#bbb");
    xAxis.setAttribute("stroke-width", "1.5");
    xAxis.setAttribute("marker-end", "url(#arrowhead)");
    axes.appendChild(xAxis);

    const yAxis = document.createElementNS(NS, "line");
    yAxis.setAttribute("x1", x0);
    yAxis.setAttribute("x2", x0);
    yAxis.setAttribute("y1", scaleY(yMax, height, yMin, yMax));
    yAxis.setAttribute("y2", scaleY(yMin, height, yMin, yMax));
    yAxis.setAttribute("stroke", "#bbb");
    yAxis.setAttribute("stroke-width", "1.5");
        yAxis.setAttribute("marker-start", "url(#arrowhead)");
    axes.appendChild(yAxis);

    
    const labelA = document.createElementNS(NS, "text");
    labelA.textContent = a.toFixed(2);
    labelA.setAttribute("x", scaleX(a, width));
    labelA.setAttribute("y", y0 + 20);
    labelA.setAttribute("fill", "#555");
    labelA.setAttribute("text-anchor", "middle");
    labelA.setAttribute("font-size", "12px");
    canvas.appendChild(labelA);

    const labelB = document.createElementNS(NS, "text");
    labelB.textContent = b.toFixed(2);
    labelB.setAttribute("x", scaleX(b, width));
    labelB.setAttribute("y", y0 + 20);
    labelB.setAttribute("fill", "#555");
    labelB.setAttribute("text-anchor", "middle");
    labelB.setAttribute("font-size", "12px");
    canvas.appendChild(labelB);

    canvas.appendChild(axes);

    sumDisplay.textContent = sum.toFixed(4);
    sumTotal.textContent = sum.toFixed(4);
  }

  function actualizar() {
    f = parseFunction(inputFuncion.value);
    a = parseFloat(inputA.value);
    b = parseFloat(inputB.value);
    n = parseInt(slider.value);
    nValue.textContent = n;
    drawGraph();
  }

  slider.addEventListener("input", actualizar);
  botonAplicar.addEventListener("click", actualizar);
  [inputFuncion, inputA, inputB].forEach(el => {
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        actualizar();
      }
    });
  });

  inputFuncion.value = "-x^3 + x^2 + x";
  actualizar();
});
