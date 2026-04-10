(function(){
        const svg = document.getElementById("grafico");
        const tabla = document.getElementById("tablaDatos");
        const ns = "http://www.w3.org/2000/svg";
        
        // Dimensiones iniciales (se ajustarán automáticamente)
        let width = 600;
        let height = 400;
        
        const xMin = -1, xMax = 5;
        const yMin = -2, yMax = 5;
        
        let x0 = 1.5;
        let xh = 2.5;
        let historial = [];
        
        function resizeSVG() {
            const container = document.querySelector('.grafico-container');
            width = container.clientWidth;
            height = Math.min(width * 0.66, window.innerHeight * 0.6); // Mantener proporción 3:2
            
            svg.setAttribute('width', width);
            svg.setAttribute('height', height);
            
            dibujar();
        }
        
        function scaleX(x) {
            return (x - xMin) / (xMax - xMin) * width;
        }
        
        function scaleY(y) {
            return height - (y - yMin) / (yMax - yMin) * height;
        }
        
        function f(x) {
            return 3 - Math.pow(x - 2, 2);
        }
        
        function crearElemento(tag, atributos) {
            const el = document.createElementNS(ns, tag);
            for (const attr in atributos) el.setAttribute(attr, atributos[attr]);
            return el;
        }
        
        function arrastrarPunto(idx, clientX) {
            const rect = svg.getBoundingClientRect();
            const xVal = xMin + ((clientX - rect.left) / width) * (xMax - xMin);
            
            if (idx === 0) {
                const snap = Math.round(xVal * 10) / 10;
                x0 = Math.max(xMin, Math.min(xMax, snap));
            } else {
                const xhTry = Math.max(x0 + 0.01, Math.min(xMax, xVal));
                xh = Math.abs(xhTry - x0) < 0.005 ? x0 : xhTry;
            }
            dibujar();
        }
        
        function setupArrastre(punto, idx) {
            // Eventos para mouse
            punto.onmousedown = function(e) {
                e.preventDefault();
                const mover = e => {
                    arrastrarPunto(idx, e.clientX);
                };
                const soltar = () => {
                    document.removeEventListener("mousemove", mover);
                    document.removeEventListener("mouseup", soltar);
                };
                document.addEventListener("mousemove", mover);
                document.addEventListener("mouseup", soltar);
            };
            
            // Eventos para pantalla táctil
            punto.ontouchstart = function(e) {
                e.preventDefault();
                const touch = e.touches[0];
                const mover = e => {
                    arrastrarPunto(idx, e.touches[0].clientX);
                };
                const soltar = () => {
                    document.removeEventListener("touchmove", mover);
                    document.removeEventListener("touchend", soltar);
                };
                document.addEventListener("touchmove", mover, { passive: false });
                document.addEventListener("touchend", soltar);
            };
        }
        
        function dibujar() {
            svg.innerHTML = "";
            
            // Definiciones (filtros, marcadores)
            const defs = crearElemento("defs", {});
            
            // Filtro para el hover
            const filter = crearElemento("filter", { id: "blur" });
            filter.appendChild(crearElemento("feGaussianBlur", { in: "SourceGraphic", stdDeviation: 1 }));
            defs.appendChild(filter);
            
            // Marcadores para flechas
            const arrow = crearElemento("marker", {
                id: "arrow", markerWidth: "10", markerHeight: "10",
                refX: "0", refY: "3", orient: "auto", markerUnits: "strokeWidth"
            });
            arrow.appendChild(crearElemento("path", { d: "M0,0 L0,6 L9,3 z", fill: "#000" }));
            defs.appendChild(arrow);
            
            const arrowR = crearElemento("marker", {
                id: "arrow-right", markerWidth: "10", markerHeight: "10",
                refX: "0", refY: "3", orient: "auto", markerUnits: "strokeWidth"
            });
            arrowR.appendChild(crearElemento("path", { d: "M0,0 L0,6 L9,3 z", fill: "#000" }));
            defs.appendChild(arrowR);
            
            const arrowL = crearElemento("marker", {
                id: "arrow-left", markerWidth: "10", markerHeight: "10",
                refX: "9", refY: "3", orient: "auto", markerUnits: "strokeWidth"
            });
            arrowL.appendChild(crearElemento("path", { d: "M9,0 L9,6 L0,3 z", fill: "#000" }));
            defs.appendChild(arrowL);
            
            svg.appendChild(defs);
            
            // Ejes coordenados
            const pad = 20;
            svg.appendChild(crearElemento("line", {
                x1: scaleX(xMin) + pad, y1: scaleY(0),
                x2: scaleX(xMax) - pad, y2: scaleY(0),
                stroke: "#000", "stroke-width": 1, "marker-end": "url(#arrow)"
            }));
            
            svg.appendChild(crearElemento("line", {
                x1: scaleX(0), y1: scaleY(yMax) - pad,
                x2: scaleX(0), y2: scaleY(yMin) + pad,
                stroke: "#000", "stroke-width": 1, "marker-end": "url(#arrow)"
            }));
            
            // Gráfica de la función
            let curva = "";
            for (let x = xMin; x <= xMax; x += 0.05)
                curva += `${scaleX(x)},${scaleY(f(x))} `;
            svg.appendChild(crearElemento("polyline", {
                points: curva.trim(), stroke: "black", fill: "none", "stroke-width": 2
            }));
            
            // Líneas verticales desde los puntos al eje x
            [[x0, f(x0)], [xh, f(xh)]].forEach(([x, y]) => {
                svg.appendChild(crearElemento("line", {
                    x1: scaleX(x), y1: scaleY(0),
                    x2: scaleX(x), y2: scaleY(y),
                    stroke: "#ccc", "stroke-dasharray": "4,3"
                }));
            });
            
            // Línea secante (verde)
            const dx = xh - x0;
            const dy = f(xh) - f(x0);
            const mag = Math.sqrt(dx * dx + dy * dy);
            const ux = dx / mag, uy = dy / mag;
            const cx1 = x0 - 2 * ux, cy1 = f(x0) - 2 * uy;
            const cx2 = xh + 2 * ux, cy2 = f(xh) + 2 * uy;
            svg.appendChild(crearElemento("line", {
                x1: scaleX(cx1), y1: scaleY(cy1),
                x2: scaleX(cx2), y2: scaleY(cy2),
                stroke: "green", "stroke-width": 2
            }));
            
            // Línea tangente (marrón)
            const slope = -2 * (x0 - 2);
            const tx1 = x0 - 2, tx2 = x0 + 2;
            svg.appendChild(crearElemento("line", {
                x1: scaleX(tx1), y1: scaleY(slope * (tx1 - x0) + f(x0)),
                x2: scaleX(tx2), y2: scaleY(slope * (tx2 - x0) + f(x0)),
                stroke: "#6B4226", "stroke-width": 2,
                "marker-end": "url(#arrow)"
            }));
            
            // Puntos en el eje x
            [x0, xh].forEach((x, i) => {
                svg.appendChild(crearElemento("circle", {
                    cx: scaleX(x), cy: scaleY(0), r: 4,
                    fill: i === 0 ? "red" : "blue"
                }));
            });
            
            // Puntos en la curva (arrastrables)
            [x0, xh].forEach((x, i) => {
                const p = crearElemento("circle", {
                    cx: scaleX(x), cy: scaleY(f(x)), r: 8,
                    fill: i === 0 ? "red" : "blue",
                    style: "cursor: move; touch-action: none;"
                });
                setupArrastre(p, i);
                svg.appendChild(p);
            });
            
            // Etiquetas
            svg.appendChild(crearElemento("text", {
                x: scaleX(x0), y: scaleY(0) + 20,
                fill: "red", "text-anchor": "middle", "font-size": "14px"
            })).textContent = "x";
            
            svg.appendChild(crearElemento("text", {
                x: scaleX(xh), y: scaleY(0) + 20,
                fill: "blue", "text-anchor": "middle", "font-size": "14px"
            })).textContent = "x+h";
            
            // Flecha para h
            svg.appendChild(crearElemento("line", {
                x1: scaleX(xh), y1: scaleY(0) + 38,
                x2: scaleX(x0), y2: scaleY(0) + 38,
                stroke: "black",
                "marker-start": "url(#arrow-left)", "marker-end": "url(#arrow-right)"
            }));
            
            svg.appendChild(crearElemento("text", {
                x: scaleX((x0 + xh) / 2), y: scaleY(0) + 50,
                fill: "black", "text-anchor": "middle", "font-size": "14px"
            })).textContent = "h";
            
            // Actualizar tabla
            const pendiente = (f(xh) - f(x0)) / (xh - x0);
            historial.push([x0.toFixed(3), xh.toFixed(3), pendiente.toFixed(4)]);
            if (historial.length > 5) historial = historial.slice(-5);
            tabla.innerHTML = historial.map(row => `<tr>${row.map(c => `<td>${c}</td>`).join("")}</tr>`).join("");
        }
        
        // Inicialización
        window.addEventListener('load', function() {
            resizeSVG();
            dibujar();
        });
        
        window.addEventListener('resize', function() {
            resizeSVG();
        });
    })();