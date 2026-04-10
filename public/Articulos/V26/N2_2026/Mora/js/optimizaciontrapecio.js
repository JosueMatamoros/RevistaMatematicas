// Simular carga inicial
setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    initializeVisualization();
}, 100);

function initializeVisualization() {
    // Funciones matemáticas
    const semicircleFunction = (x) => Math.sqrt(16 - x*x);
    const trapezoidArea = (a) => (2*a + 8) * semicircleFunction(a) / 2;
    
    // Estado inicial
    let currentA = 1.0;
    let valueHistory = [];
    
    // Valores iniciales para la tabla
    for (let x = 0; x <= 1; x += 0.2) {
        valueHistory.push({ a: x, area: trapezoidArea(x) });
    }
    
    // Actualizar tabla de valores
    function updateValueTable() {
        const recentValues = valueHistory.slice(-5);
        
        let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>a</th>
                        <th>A(a)</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        recentValues.forEach(row => {
            tableHTML += `
                <tr>
                    <td>${row.a.toFixed(2)}</td>
                    <td>${row.area.toFixed(4)}</td>
                </tr>
            `;
        });
        
        tableHTML += `</tbody></table>`;
        document.getElementById('values-table').innerHTML = tableHTML;
    }
    
    // Dibujar gráfico del trapecio
    function drawTrapezoidVisualization() {
        const container = document.getElementById('trapezoid-graph');
        const width = container.clientWidth;
        const height = width; // Gráfico cuadrado
        const margin = { top: 25, right: 25, bottom: 35, left: 45 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;
        
        container.innerHTML = '';
        
        const svg = d3.select('#trapezoid-graph')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', `0 0 ${width} ${height}`)
            .attr('preserveAspectRatio', 'xMidYMid meet');
        
        // Dominio idéntico para X e Y (-5 a 5)
        const axisDomain = [-5, 5];
        
        const xScale = d3.scaleLinear()
            .domain(axisDomain)
            .range([0, innerWidth]);
        
        const yScale = d3.scaleLinear()
            .domain(axisDomain)
            .range([innerHeight, 0]);
        
        const visualizationGroup = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
        
        // Cuadrícula con líneas delgadas
        const gridTicks = xScale.ticks(10);
        
        visualizationGroup.selectAll('.x-grid-line')
            .data(gridTicks)
            .enter()
            .append('line')
            .attr('class', 'grid-line')
            .attr('x1', d => xScale(d))
            .attr('x2', d => xScale(d))
            .attr('y1', 0)
            .attr('y2', innerHeight);
        
        visualizationGroup.selectAll('.y-grid-line')
            .data(gridTicks)
            .enter()
            .append('line')
            .attr('class', 'grid-line')
            .attr('y1', d => yScale(d))
            .attr('y2', d => yScale(d))
            .attr('x1', 0)
            .attr('x2', innerWidth);
        
        // Eje X en y=0
        visualizationGroup.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', `translate(0,${yScale(0)})`)
            .call(d3.axisBottom(xScale).ticks(10));
        
        // Eje Y
        visualizationGroup.append('g')
            .attr('class', 'axis axis--y')
            .call(d3.axisLeft(yScale).ticks(10));
        
        // Dibujar semicírculo
        const semicirclePoints = Array.from({length: 101}, (_, i) => {
            const t = (i / 100) * Math.PI;
            return [4 * Math.cos(t), 4 * Math.sin(t)];
        });
        
        visualizationGroup.append('path')
            .datum(semicirclePoints)
            .attr('d', d3.line()
                .x(d => xScale(d[0]))
                .y(d => yScale(d[1])))
            .attr('stroke', '#2e7d32')
            .attr('stroke-width', 2.5)
            .attr('fill', 'none');
        
        // Dibujar trapecio
        const trapezoidPoints = [
            [-4, 0],
            [-currentA, semicircleFunction(-currentA)],
            [currentA, semicircleFunction(currentA)],
            [4, 0]
        ];
        
        visualizationGroup.append('polygon')
            .attr('points', trapezoidPoints.map(p => `${xScale(p[0])},${yScale(p[1])}`).join(' '))
            .attr('fill', 'rgba(30, 136, 229, 0.5)')
            .attr('stroke', 'rgba(30, 136, 229, 0.8)')
            .attr('stroke-width', 1.2);
        
        // Dibujar puntos importantes
        visualizationGroup.selectAll('.vertex')
            .data(trapezoidPoints)
            .enter()
            .append('circle')
            .attr('cx', d => xScale(d[0]))
            .attr('cy', d => yScale(d[1]))
            .attr('r', 4.5)
            .attr('fill', '#0d47a1');
        
        // Líneas de altura
        visualizationGroup.append('line')
            .attr('x1', xScale(currentA))
            .attr('y1', yScale(0))
            .attr('x2', xScale(currentA))
            .attr('y2', yScale(semicircleFunction(currentA)))
            .attr('stroke', 'white')
            .attr('stroke-dasharray', '5,3')
            .attr('stroke-width', 1.5);
        
        visualizationGroup.append('line')
            .attr('x1', xScale(-currentA))
            .attr('y1', yScale(0))
            .attr('x2', xScale(-currentA))
            .attr('y2', yScale(semicircleFunction(-currentA)))
            .attr('stroke', 'white')
            .attr('stroke-dasharray', '5,3')
            .attr('stroke-width', 1.5);
        
        // Etiqueta 'h'
        visualizationGroup.append('text')
            .attr('x', xScale(currentA - 0.1))
            .attr('y', yScale(semicircleFunction(currentA)/2))
            .attr('text-anchor', 'end')
            .attr('fill', 'white')
            .attr('font-weight', 'bold')
            .attr('font-family', 'Times')
            .attr('font-style', 'italic')
            .attr('font-size', '14px')
            .text('h');
        
        // Flecha doble para la base menor
        visualizationGroup.append('line')
            .attr('x1', xScale(-currentA))
            .attr('y1', yScale(-0.4))
            .attr('x2', xScale(currentA))
            .attr('y2', yScale(-0.4))
            .attr('stroke', '#333')
            .attr('stroke-width', 1.2)
            .attr('marker-start', 'url(#arrow-start)')
            .attr('marker-end', 'url(#arrow-end)');
        
        // Definir marcadores de flecha
 // Definir marcadores de flecha (versión corregida)
svg.append('defs').append('marker')
    .attr('id', 'arrow-start')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 5)
    .attr('refY', 0)
    .attr('markerWidth', 6)
    .attr('markerHeight', 6)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M10,-5L0,0L10,5')  // Cambiado de M0,-5L10,0L0,5
    .attr('fill', '#333');

svg.append('defs').append('marker')
    .attr('id', 'arrow-end')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 5)
    .attr('refY', 0)
    .attr('markerWidth', 6)
    .attr('markerHeight', 6)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M0,-5L10,0L0,5')  // Cambiado de M10,-5L0,0L10,5
    .attr('fill', '#333');
        
        // Etiqueta '2a'
        visualizationGroup.append('text')
            .attr('x', xScale(0))
            .attr('y', yScale(-0.95))
            .attr('text-anchor', 'middle')
            .attr('font-family', 'Arial')
            .attr('font-size', '12px')
            .text('2a');
        
        // Etiquetas 'a' y '-a'
        visualizationGroup.append('text')
            .attr('x', xScale(currentA))
            .attr('y', yScale(-0.95))
            .attr('text-anchor', 'middle')
            .attr('font-weight', 'bold')
            .attr('font-size', '12px')
            .attr('fill', '#d32f2f')
            .text('a');
        
        visualizationGroup.append('text')
            .attr('x', xScale(-currentA))
            .attr('y', yScale(-0.95))
            .attr('text-anchor', 'middle')
            .attr('font-weight', 'bold')
            .attr('font-size', '12px')
            .attr('fill', '#d32f2f')
            .text('-a');
    }
    
    // Dibujar gráfico de área vs a
    function drawAreaChart() {
        const container = document.getElementById('area-graph');
        const width = container.clientWidth;
        const height = width * 0.75;
        const margin = { top: 25, right: 25, bottom: 35, left: 45 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;
        
        container.innerHTML = '';
        
        const svg = d3.select('#area-graph')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', `0 0 ${width} ${height}`)
            .attr('preserveAspectRatio', 'xMidYMid meet');
        
        const xScale = d3.scaleLinear()
            .domain([0, 4.5])
            .range([0, innerWidth]);
        
        const yScale = d3.scaleLinear()
            .domain([0, 25])
            .range([innerHeight, 0]);
        
        const chartGroup = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
        
        // Cuadrícula
        const xTicks = xScale.ticks(5);
        chartGroup.selectAll('.x-grid-line')
            .data(xTicks)
            .enter()
            .append('line')
            .attr('class', 'grid-line')
            .attr('x1', d => xScale(d))
            .attr('x2', d => xScale(d))
            .attr('y1', 0)
            .attr('y2', innerHeight);
        
        const yTicks = yScale.ticks(5);
        chartGroup.selectAll('.y-grid-line')
            .data(yTicks)
            .enter()
            .append('line')
            .attr('class', 'grid-line')
            .attr('y1', d => yScale(d))
            .attr('y2', d => yScale(d))
            .attr('x1', 0)
            .attr('x2', innerWidth);
        
        // Ejes
        chartGroup.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', `translate(0,${innerHeight})`)
            .call(d3.axisBottom(xScale).ticks(5));
        
        chartGroup.append('g')
            .attr('class', 'axis axis--y')
            .call(d3.axisLeft(yScale).ticks(5));
        
        // Etiquetas de ejes
        chartGroup.append('text')
            .attr('x', innerWidth / 2)
            .attr('y', innerHeight + margin.bottom - 5)
            .attr('text-anchor', 'middle')
            .style('fill', '#d32f2f')
            .style('font-weight', 'bold')
            .style('font-size', '12px')
            .text('a');
        
        chartGroup.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -margin.left + 10)
            .attr('x', -innerHeight / 2)
            .attr('text-anchor', 'middle')
            .style('fill', '#d32f2f')
            .style('font-weight', 'bold')
            .style('font-size', '12px')
            .text('Área');
        
        // Puntos históricos
        chartGroup.selectAll('.data-point')
            .data(valueHistory)
            .enter()
            .append('circle')
            .attr('cx', d => xScale(d.a))
            .attr('cy', d => yScale(d.area))
            .attr('r', 3.5)
            .attr('fill', '#1976d2')
            .attr('opacity', 0.7);
        
        // Punto actual
        chartGroup.append('circle')
            .attr('cx', xScale(currentA))
            .attr('cy', yScale(trapezoidArea(currentA)))
            .attr('r', 6)
            .attr('fill', '#d32f2f');
    }
    
    // Manejar cambios en el slider
    document.getElementById('a-slider').addEventListener('input', function(e) {
        currentA = parseFloat(e.target.value);
        document.getElementById('a-value').textContent = currentA.toFixed(2);
        
        // Registrar nuevo valor si es significativamente diferente
        const lastValue = valueHistory.length > 0 ? valueHistory[valueHistory.length - 1].a : null;
        if (lastValue === null || Math.abs(lastValue - currentA) > 0.01) {
            valueHistory.push({ a: currentA, area: trapezoidArea(currentA) });
        }
        
        // Actualizar visualizaciones
        drawTrapezoidVisualization();
        updateValueTable();
        drawAreaChart();
    });
    
    // Redibujar al cambiar tamaño de ventana
    window.addEventListener('resize', function() {
        drawTrapezoidVisualization();
        drawAreaChart();
    });
    
    // Inicializar visualizaciones
    drawTrapezoidVisualization();
    updateValueTable();
    drawAreaChart();
}
