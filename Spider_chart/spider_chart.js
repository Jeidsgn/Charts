<!DOCTYPE html>
<html>
<head>
  <title>Gráfica de Telaraña con D3.js</title>
  <meta charset="utf-8">
  <script src="https://d3js.org/d3.v7.min.js"></script>
</head>
<body>
  <svg id="chart" width="400" height="400"></svg>

  <script>
    // Datos en formato JSON con más de 12 países
    const data = [
      { "country": "Argentina" },
      { "country": "Argentina" },
      { "country": "Argentina" },
      { "country": "Colombia" },
      { "country": "México" },
      { "country": "México" },
      { "country": "Brasil" },
      // Aquí van más países repetidos...
    ];

    // Carga y procesamiento de datos
    const countryCounts = {};
    data.forEach(d => {
      if (!countryCounts[d.country]) {
        countryCounts[d.country] = 0;
      }
      countryCounts[d.country]++;
    });

    // Obtener el top 10 de países más repetidos
    const topCountries = Object.keys(countryCounts).sort((a, b) => countryCounts[b] - countryCounts[a]).slice(0, 10);

    // Obtener el país con la mayor cantidad de repeticiones
    const maxCount = d3.max(topCountries.map(d => countryCounts[d]));

    // Representar la gráfica de telaraña
    const width = 400;
    const height = 400;
    const svg = d3.select("#chart");

    // Escalas
    const angleScale = d3.scaleBand().domain(topCountries).range([0, Math.PI * 2]);
    const radiusScale = d3.scaleLinear().domain([0, maxCount]).range([0, height / 2]);

    // Crear los ejes
    const axes = svg.append("g").attr("transform", `translate(${width / 2},${height / 2})`);
    axes
      .selectAll(".axis")
      .data(topCountries)
      .enter()
      .append("line")
      .attr("class", "axis")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", (d) => radiusScale(countryCounts[d]) * Math.cos(angleScale(d) - Math.PI / 2))
      .attr("y2", (d) => radiusScale(countryCounts[d]) * Math.sin(angleScale(d) - Math.PI / 2));

    // Crear las etiquetas con emojis
    const emojis = {
      "Argentina": "\u{1F1E6}\u{1F1F7}",
      "Colombia": "\u{1F1E8}\u{1F1F4}",
      "México": "\u{1F1F2}\u{1F1FD}",
      "Brasil": "\u{1F1E7}\u{1F1F7}",
      // Agregar más emojis de países aquí...
    };

    const labels = svg.append("g").attr("transform", `translate(${width / 2},${height / 2})`);
    labels
      .selectAll(".label")
      .data(topCountries)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", (d) => (radiusScale(countryCounts[d]) + 10) * Math.cos(angleScale(d) - Math.PI / 2))
      .attr("y", (d) => (radiusScale(countryCounts[d]) + 10) * Math.sin(angleScale(d) - Math.PI / 2))
      .text((d) => emojis[d])
      .style("font-size", "20px")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle");
  </script>
</body>
</html>
