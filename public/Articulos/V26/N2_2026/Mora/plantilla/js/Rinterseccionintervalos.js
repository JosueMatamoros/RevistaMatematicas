(function(){
  "use strict";
  
  // Configuración adaptable
  const config = {
    containerClass: 'intervalos-container',
    canvasId: 'intervalos-canvas',
    input1Id: 'intervalos-input1',
    input2Id: 'intervalos-input2',
    resultadoId: 'intervalos-resultado',
    margin: 40,
    domainMin: -2,
    domainMax: 6,
    yLine: 100,
    baseWidth: 600,
    baseHeight: 250
  };

  // Elementos del DOM
  const canvas = document.getElementById(config.canvasId);
  const ctx = canvas.getContext("2d");
  let scale;
  
  // Ajustar tamaño del canvas
  function resizeCanvas() {
    const container = canvas.parentElement;
    const availableWidth = container.clientWidth;
    const width = Math.min(availableWidth, config.baseWidth);
    const height = (width / config.baseWidth) * config.baseHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    // Recalcular escala
    scale = (canvas.width - 2 * config.margin) / (config.domainMax - config.domainMin);
    config.yLine = height * 0.6;
    
    // Redibujar
    actualizar();
  }
  
  // Inicializar tamaño del canvas
  window.addEventListener('load', resizeCanvas);
  window.addEventListener('resize', resizeCanvas);

  // Datos del estado
  const state = {
    int1: { a: -2, b: 3, leftClosed: true, rightClosed: true, color: "blue", grosor: 6, alpha: 1.0 },
    int2: { a: 0, b: 4, leftClosed: false, rightClosed: true, color: "green", grosor: 8, alpha: 0.6 },
    interseccion: null,
    dragTarget: null,
    hoverTarget: null
  };

  // Funciones utilitarias
  function formatVal(num) {
    let r = Math.round(num * 100) / 100;
    return (r % 1 === 0) ? r.toString() : r.toFixed(2);
  }

  function notacion(intv) {
    const left = intv.leftClosed ? "[" : "]";
    const right = intv.rightClosed ? "]" : "[";
    return `${left}${formatVal(intv.a)}, ${formatVal(intv.b)}${right}`;
  }

  function xToCanvas(x) {
    return config.margin + (x - config.domainMin) * scale;
  }

  function canvasToX(px) {
    return config.domainMin + (px - config.margin) / scale;
  }

  // Funciones de dibujo
  function dibujarRecta() {
    ctx.beginPath();
    ctx.moveTo(config.margin, config.yLine);
    ctx.lineTo(canvas.width - config.margin, config.yLine);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.font = (canvas.height * 0.05) + "px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    
    for(let i = config.domainMin; i <= config.domainMax; i++) {
      const x = xToCanvas(i);
      ctx.beginPath();
      ctx.moveTo(x, config.yLine - 5);
      ctx.lineTo(x, config.yLine + 5);
      ctx.stroke();
      ctx.fillText(i, x, config.yLine + 20);
    }

    // Flecha al final
    ctx.beginPath();
    const endX = canvas.width - config.margin;
    ctx.moveTo(endX, config.yLine);
    ctx.lineTo(endX - 10, config.yLine - 5);
    ctx.lineTo(endX - 10, config.yLine + 5);
    ctx.closePath();
    ctx.fill();
  }

  function dibujarIntervalo(intv, yPos, isIntersection = false) {
    const xA = xToCanvas(intv.a), xB = xToCanvas(intv.b);
    const circleRadius = canvas.height * 0.06;
    
    ctx.save();
    ctx.globalAlpha = intv.alpha;
    ctx.beginPath();
    ctx.moveTo(xA, yPos);
    ctx.lineTo(xB, yPos);
    ctx.strokeStyle = intv.color;
    ctx.lineWidth = intv.grosor;
    ctx.stroke();

    if (!isIntersection) {
      ctx.beginPath();
      ctx.arc(xA, yPos, circleRadius, 0, 2*Math.PI);
      if (state.hoverTarget && state.hoverTarget.interval === (intv === state.int1 ? 1 : 2) && state.hoverTarget.edge === "left") {
        ctx.shadowColor = intv.color;
        ctx.shadowBlur = 15;
      }
      intv.leftClosed ? ctx.fillStyle = intv.color : ctx.strokeStyle = intv.color;
      intv.leftClosed ? ctx.fill() : ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.beginPath();
      ctx.arc(xB, yPos, circleRadius, 0, 2*Math.PI);
      if (state.hoverTarget && state.hoverTarget.interval === (intv === state.int1 ? 1 : 2) && state.hoverTarget.edge === "right") {
        ctx.shadowColor = intv.color;
        ctx.shadowBlur = 15;
      }
      intv.rightClosed ? ctx.fillStyle = intv.color : ctx.strokeStyle = intv.color;
      intv.rightClosed ? ctx.fill() : ctx.stroke();
      ctx.shadowBlur = 0;
    } else {
      ctx.beginPath();
      ctx.arc(xA, yPos, circleRadius, 0, 2*Math.PI);
      intv.leftClosed ? ctx.fillStyle = intv.color : ctx.strokeStyle = intv.color;
      intv.leftClosed ? ctx.fill() : ctx.stroke();

      ctx.beginPath();
      ctx.arc(xB, yPos, circleRadius, 0, 2*Math.PI);
      intv.rightClosed ? ctx.fillStyle = intv.color : ctx.strokeStyle = intv.color;
      intv.rightClosed ? ctx.fill() : ctx.stroke();
    }

    ctx.restore();
  }

  function dibujarLineasPunteadas() {
    if (!state.interseccion) return;
    
    const xA = xToCanvas(state.interseccion.a);
    const xB = xToCanvas(state.interseccion.b);
    const yInt = config.yLine - (canvas.height * 0.15);
    
    ctx.save();
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 3]);
    
    ctx.beginPath();
    ctx.moveTo(xA, config.yLine);
    ctx.lineTo(xA, yInt);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(xB, config.yLine);
    ctx.lineTo(xB, yInt);
    ctx.stroke();
    
    ctx.setLineDash([]);
    ctx.restore();
  }

  function roundIfClose(val) {
    const rounded = Math.round(val);
    return Math.abs(val - rounded) < 0.05 ? rounded : val;
  }

  function calcularInterseccion(i1, i2) {
    i1.a = roundIfClose(i1.a);
    i1.b = roundIfClose(i1.b);
    i2.a = roundIfClose(i2.a);
    i2.b = roundIfClose(i2.b);

    let L, R, leftClosed, rightClosed;
    if (i1.a > i2.a) { L = i1.a; leftClosed = i1.leftClosed; }
    else if (i1.a < i2.a) { L = i2.a; leftClosed = i2.leftClosed; }
    else { L = i1.a; leftClosed = i1.leftClosed && i2.leftClosed; }

    if (i1.b < i2.b) { R = i1.b; rightClosed = i1.rightClosed; }
    else if (i1.b > i2.b) { R = i2.b; rightClosed = i2.rightClosed; }
    else { R = i1.b; rightClosed = i1.rightClosed && i2.rightClosed; }

    L = roundIfClose(L);
    R = roundIfClose(R);

    if (L < R || (L === R && leftClosed && rightClosed)) {
      return {
        a: L, b: R, leftClosed, rightClosed,
        color: "magenta", grosor: 6, alpha: 1.0
      };
    } else {
      return null;
    }
  }

  function actualizar() {
    state.interseccion = calcularInterseccion(state.int1, state.int2);
    document.getElementById(config.input1Id).value = notacion(state.int1);
    document.getElementById(config.input2Id).value = notacion(state.int2);
    document.getElementById(config.resultadoId).value = state.interseccion ? notacion(state.interseccion) : "∅";
    
    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dibujar elementos
    dibujarRecta();
    dibujarIntervalo(state.int1, config.yLine);
    dibujarIntervalo(state.int2, config.yLine);
    
    if (state.interseccion) {
      dibujarIntervalo(state.interseccion, config.yLine - (canvas.height * 0.15), true);
      dibujarLineasPunteadas();
    }
  }

  function detectarHover(mx, my) {
    const tol = canvas.height * 0.05; // Tolerancia proporcional
    function cerca(x, y0) { return Math.hypot(mx - x, my - y0) <= tol; }
    const x1a = xToCanvas(state.int1.a), x1b = xToCanvas(state.int1.b);
    const x2a = xToCanvas(state.int2.a), x2b = xToCanvas(state.int2.b);
    
    if(cerca(x1a, config.yLine)) return { interval: 1, edge: "left" };
    else if(cerca(x1b, config.yLine)) return { interval: 1, edge: "right" };
    else if(cerca(x2a, config.yLine)) return { interval: 2, edge: "left" };
    else if(cerca(x2b, config.yLine)) return { interval: 2, edge: "right" };
    return null;
  }

  // Funciones para manejar eventos
  function getCanvasCoordinates(event) {
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;
    
    if (event.touches) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }
    
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  // Event listeners para mouse y touch
  function handleStart(x, y) {
    state.dragTarget = detectarHover(x, y);
  }

  function handleMove(x, y) {
    const newHover = detectarHover(x, y);
    if ((state.hoverTarget && !newHover) || (!state.hoverTarget && newHover) || 
        (state.hoverTarget && newHover && (state.hoverTarget.interval !== newHover.interval || state.hoverTarget.edge !== newHover.edge))) {
      state.hoverTarget = newHover;
      actualizar();
    }
    
    if(!state.dragTarget) return;
    
    let nuevoVal = canvasToX(x);
    if(nuevoVal < config.domainMin) nuevoVal = config.domainMin;
    if(nuevoVal > config.domainMax) nuevoVal = config.domainMax;

    if(state.dragTarget.interval === 1) {
      if(state.dragTarget.edge === "left") {
        if(nuevoVal >= state.int1.b) nuevoVal = state.int1.b - 0.1;
        state.int1.a = nuevoVal;
      } else {
        if(nuevoVal <= state.int1.a) nuevoVal = state.int1.a + 0.1;
        state.int1.b = nuevoVal;
      }
    } else {
      if(state.dragTarget.edge === "left") {
        if(nuevoVal >= state.int2.b) nuevoVal = state.int2.b - 0.1;
        state.int2.a = nuevoVal;
      } else {
        if(nuevoVal <= state.int2.a) nuevoVal = state.int2.a + 0.1;
        state.int2.b = nuevoVal;
      }
    }

    actualizar();
  }

  function handleEnd() {
    state.dragTarget = null;
    if (state.hoverTarget) {
      state.hoverTarget = null;
      actualizar();
    }
  }

  function handleDoubleClick(x, y) {
    const target = detectarHover(x, y);
    
    if(target) {
      if(target.interval === 1) {
        if(target.edge === "left") state.int1.leftClosed = !state.int1.leftClosed;
        else state.int1.rightClosed = !state.int1.rightClosed;
      } else {
        if(target.edge === "left") state.int2.leftClosed = !state.int2.leftClosed;
        else state.int2.rightClosed = !state.int2.rightClosed;
      }
      actualizar();
    }
  }

  // Asignar eventos
  canvas.addEventListener("mousedown", function(e) {
    const coords = getCanvasCoordinates(e);
    handleStart(coords.x, coords.y);
  });

  canvas.addEventListener("mousemove", function(e) {
    const coords = getCanvasCoordinates(e);
    handleMove(coords.x, coords.y);
  });

  canvas.addEventListener("mouseup", handleEnd);
  canvas.addEventListener("mouseleave", handleEnd);

  canvas.addEventListener("touchstart", function(e) {
    const coords = getCanvasCoordinates(e);
    handleStart(coords.x, coords.y);
    e.preventDefault();
  }, { passive: false });

  canvas.addEventListener("touchmove", function(e) {
    const coords = getCanvasCoordinates(e);
    handleMove(coords.x, coords.y);
    e.preventDefault();
  }, { passive: false });

  canvas.addEventListener("touchend", handleEnd);
  canvas.addEventListener("touchcancel", handleEnd);

  canvas.addEventListener("dblclick", function(e) {
    const coords = getCanvasCoordinates(e);
    handleDoubleClick(coords.x, coords.y);
  });

  // Inicialización
  resizeCanvas();
})();