document.addEventListener('DOMContentLoaded', () => {
        const widget = document.querySelector('.planotangente-widget');
        const plot3d = document.getElementById('plot3d');
        const canvas = document.getElementById('plot2d');
        const ctx = canvas.getContext('2d');
        const toggleTangents = document.getElementById('toggleTangents');

        let width, height;
        let x1 = 1.05, y1 = 0.68;
        const pointRadius = 5;
        const gridSize = 12;

        function resizeCanvas() {
            width = canvas.parentElement.clientWidth;
            height = canvas.parentElement.clientHeight;
            canvas.width = width;
            canvas.height = height;
            drawAll();
        }

        function toPixel(x, y) {
            return [(x / 2) * width, height - (y / 2) * height];
        }

        function drawGrid() {
            ctx.clearRect(0, 0, width, height);
            ctx.strokeStyle = 'rgba(200, 200, 200, 0.5)';
            ctx.lineWidth = 1;
            for (let i = 0; i <= gridSize; i++) {
                let gx = i * width / gridSize;
                let gy = i * height / gridSize;
                ctx.beginPath();
                ctx.moveTo(gx, 0);
                ctx.lineTo(gx, height);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(0, gy);
                ctx.lineTo(width, gy);
                ctx.stroke();
            }
        }

        function drawAxes() {
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, height);
            ctx.lineTo(width, height);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, height);
            ctx.stroke();
            ctx.font = '13px Arial';
            ctx.fillStyle = 'black';
            ctx.fillText('x', width - 20, height - 10);
            ctx.fillText('y', 10, 20);
        }

        function drawPoint() {
            const [xPixel, yPixel] = toPixel(x1, y1);
            ctx.beginPath();
            ctx.arc(xPixel, yPixel, pointRadius, 0, Math.PI * 2);
            ctx.fillStyle = 'blue';
            ctx.fill();
            ctx.strokeStyle = 'darkblue';
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        function drawAll() {
            drawGrid();
            drawAxes();
            drawPoint();
            update3DPlot();
        }

        function getTangentPlane(x, y) {
            const dfdx = -2 * (x - 1);
            const dfdy = -2 * (y - 1);
            const z0 = f(x, y);
            return { dfdx, dfdy, z0 };
        }

        function update3DPlot() {
            const z1 = f(x1, y1);
            const plane = getTangentPlane(x1, y1);

            widget.querySelector('#coords').textContent = 
                `Coordenadas: (${x1.toFixed(2)}, ${y1.toFixed(2)}, ${z1.toFixed(2)})`;

            const x = [], y = [], z = [];
            for (let i = 0; i <= 2; i += 0.1) {
                x.push(i);
                y.push(i);
            }
            for (let i = 0; i < x.length; i++) {
                z[i] = [];
                for (let j = 0; j < y.length; j++) {
                    z[i][j] = f(x[i], y[j]);
                }
            }

            const data = [
                {
                    x: x,
                    y: y,
                    z: z,
                    type: 'surface',
                    colorscale: [[0, 'rgba(0,100,255,0.6)'], [1, 'rgba(0,100,255,0.6)']],
                    opacity: 0.7,
                    showscale: false,
                    hoverinfo: 'none',
                     contours: {
        x: { highlight: false, show: false },
        y: { highlight: false, show: false },
        z: { highlight: false, show: false }
    },
    lighting: {
        ambient: 0.8,
        diffuse: 0.6,
        roughness: 0.5,
        specular: 0.2
    }
                },
                createPlaneTrace(x1, y1, plane),
                { // Punto en la superficie
                    x: [x1],
                    y: [y1],
                    z: [z1],
                    mode: 'markers',
                    marker: { size: 3, color: 'red' },
                    type: 'scatter3d',
                    showlegend: false
                },
                { // Punto en el plano XY
                    x: [x1],
                    y: [y1],
                    z: [0],
                    mode: 'markers',
                    marker: { size: 3, color: 'blue' },
                    type: 'scatter3d',
                    showlegend: false
                },
                { // Línea punteada que conecta ambos puntos
                    x: [x1, x1],
                    y: [y1, y1],
                    z: [0, z1],
                    mode: 'lines',
                    line: { dash: 'dot', width: 3, color: 'black' },
                    type: 'scatter3d',
                    showlegend: false
                }
            ];

            if (toggleTangents.checked) {
                data.push(...createTangents(x1, y1, plane));
            }

            Plotly.react(plot3d, data, {
                scene: {
                    xaxis: { range: [0, 2.2], title: 'X',showgrid: true,
            showline: true,
            showbackground: false,
            zeroline: false,
            showspikes: false,
            showticklabels: false },
                    yaxis: { range: [0, 2.2], title: 'Y',showgrid: true,
            showline: true,
            showbackground: false,
            zeroline: false,
            showspikes: false,
            showticklabels: false },
                    zaxis: { range: [0, 1.2], title: 'Z = f(X,Y)',showgrid: true,
            showline: true,
            showbackground: false,
            zeroline: false,
            showspikes: false,
            showticklabels: false },
                    camera: { eye: { x: 1.7, y: -1.7, z: 0.8 }, up: { x: 0, y: 0, z: 1 } },
                    aspectmode: 'manual',
                    aspectratio: { x: 1, y: 1, z: 0.7 }
                },
                margin: { l: 0, r: 0, b: 0, t: 0 },
                showlegend: false
            });
        }

        function createPlaneTrace(x1, y1, plane) {
            const size = 0.3;
            const X = [x1 - size, x1 + size, x1 + size, x1 - size, x1 - size];
            const Y = [y1 - size, y1 - size, y1 + size, y1 + size, y1 - size];
            const Z = X.map((x, i) => plane.z0 + plane.dfdx * (x - x1) + plane.dfdy * (Y[i] - y1));

            return {
                x: X,
                y: Y,
                z: Z,
                type: 'scatter3d',
                mode: 'lines',
                line: { color: 'green', width: 4 },
                fill: 'toself',
                fillcolor: 'rgba(50,205,50,0.7)',
                opacity: 0.9,
                showlegend: false
            };
        }

        function createTangents(x1, y1, plane) {
            const size = 0.5; // Aumentado para extender las líneas
            const arrowSize = 0.1;
            const orange = '#000080';
            
            // Recta tangente en dirección X
            const tangentX = {
                x: [x1 - size, x1 + size],
                y: [y1, y1],
                z: [
                    plane.z0 + plane.dfdx * -size,
                    plane.z0 + plane.dfdx * size
                ],
                type: 'scatter3d',
                mode: 'lines',
                line: { color: orange, width: 5 }, // Más grueso y naranja
                showlegend: false
            };

            // Flecha para tangente X
            const arrowX = {
                x: [
                    x1 + size - arrowSize, 
                    x1 + size, 
                    x1 + size - arrowSize
                ],
                y: [y1, y1, y1],
                z: [
                    plane.z0 + plane.dfdx * (size - arrowSize) + arrowSize*0.3,
                    plane.z0 + plane.dfdx * size,
                    plane.z0 + plane.dfdx * (size - arrowSize) - arrowSize*0.3
                ],
                type: 'scatter3d',
                mode: 'lines',
                line: { color: orange, width: 5 },
                showlegend: false
            };

            // Recta tangente en dirección Y
            const tangentY = {
                x: [x1, x1],
                y: [y1 - size, y1 + size],
                z: [
                    plane.z0 + plane.dfdy * -size,
                    plane.z0 + plane.dfdy * size
                ],
                type: 'scatter3d',
                mode: 'lines',
                line: { color: orange, width: 5 }, // Más grueso y naranja
                showlegend: false
            };

            // Flecha para tangente Y
            const arrowY = {
                x: [x1, x1, x1],
                y: [
                    y1 + size - arrowSize, 
                    y1 + size, 
                    y1 + size - arrowSize
                ],
                z: [
                    plane.z0 + plane.dfdy * (size - arrowSize) + arrowSize*0.3,
                    plane.z0 + plane.dfdy * size,
                    plane.z0 + plane.dfdy * (size - arrowSize) - arrowSize*0.3
                ],
                type: 'scatter3d',
                mode: 'lines',
                line: { color: orange, width: 5 },
                showlegend: false
            };

            return [tangentX, arrowX, tangentY, arrowY];
        }

        function f(x, y) {
            return 1 - (x - 1) ** 2 - (y - 1) ** 2;
        }

        let isDragging = false;

        canvas.addEventListener('mousedown', (e) => {
            const rect = canvas.getBoundingClientRect();
            const [xp, yp] = toPixel(x1, y1);
            const dist = Math.hypot((e.clientX - rect.left) - xp, (e.clientY - rect.top) - yp);
            if (dist <= pointRadius * 1.5) {
                isDragging = true;
                canvas.style.cursor = 'grabbing';
            }
        });

        canvas.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const rect = canvas.getBoundingClientRect();
            const x = Math.max(0, Math.min(width, e.clientX - rect.left));
            const y = Math.max(0, Math.min(height, e.clientY - rect.top));
            x1 = (x / width) * 2;
            y1 = (height - y) / height * 2;
            drawAll();
        });

        canvas.addEventListener('mouseup', () => { isDragging = false; canvas.style.cursor = ''; });
        canvas.addEventListener('mouseleave', () => { isDragging = false; canvas.style.cursor = ''; });

        window.addEventListener('resize', resizeCanvas);
        toggleTangents.addEventListener('change', drawAll);

        resizeCanvas();
    });
