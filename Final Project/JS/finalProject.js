

// Plot.plot({
//     marks: [
//       Plot.ruleY([0]),
//       Plot.areaY(data, {
//         x: "x",
//         y: d => d.y > 10 ? d.y : null,
//         fill: 'red', fillOpacity: 0.3}),
//       Plot.lineY(data, {x: "x", y: "y"})
//     ]
//   })


                     
         
var coffeeCup = d3.select("body")
   .append("svg")
  //  .attr("height", 1000)
  //  .attr("width", 500);

coffeeCup.append("polygon")
   .attr("points", "300,100 250,210 160,210, 100,100")
   .style("fill", "green")
   .style("stroke", "black")
   .style("strokeWidth", "10px");