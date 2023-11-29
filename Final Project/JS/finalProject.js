// var data = [ 
//   { x: 0, y: 4 }, 
//   { x: 1, y: 9 },
//   { x: 2, y: 16}, 
//   { x: -2, y: 0 },
  
// ]; 



// for (var x = 0; x < 500; x++){
//   var y = a*(x - xIntercept1)*(x - xIntercept2);
//   data.push({x: x, y: y});
// }

// // var xScale = d3.scaleLinear() 
// //   .domain([0, 20]).range([25, 175]); 
// // var yScale = d3.scaleLinear() 
// //   .domain([0, 20]).range([175, 25]); 

// // var line = d3.line() 
// //   .x((d) => xScale(d.x)) 
// //   .y((d) => yScale(d.y)) 
// //   // curveBasisOpen is used 
// //   .curve(d3.curveBasisOpen); 

// d3.select("#gfg") 
//   .append("path") 
//   .attr("d", line(data)) 
//   .attr("fill", "white") 
//   .attr("stroke", "green"); 














let icedCoffeeCup = d3.select("#cup")
.append("svg")
.attr("height", 300)
.attr("width", 500); 

icedCoffeeCup.append("polygon")
  .attr("points", "500,0 290,800 400,800 200,0")
  .style("fill", "white");



function addCoffee(element){
  console.log(element.value)
  if (element.value === "Light"){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "453.25,175 350,550 340,550 243.75,175")
    .style("fill", "#C3890C");
  }
  else if (element.value === "Medium"){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "453.25,175 350,550 340,550 243.75,175")
    .style("fill", "#905B27");
  }
  else if (element.value === "Dark"){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "453.25,175 350,550 340,550 243.75,175")
    .style("fill", "#401D01");
  }
}

// function addSyrup(){
  

//  var syrup = document.getElementById("blah"); 
//  console.log(syrup)

//   if (syrup === "Caramel"){
  // icedCoffeeCup
  // .append("polygon")  
  // .attr("points", "500,0 487,50 212,50 200,0")
  // .style("fill", "yellow");


 icedCoffeeCup
  .append("polygon")  
  .attr("points", "500,0 487,50 212,50 200,0") //milk
  .style("fill", "yellow");


  icedCoffeeCup
  .append("polygon")  
  .attr("points", "453,176 487,50 212,50 244,176") //syrup
  .style("fill", "blue");

