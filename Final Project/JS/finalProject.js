

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

// var theCircle = d3.select("#dataviz_buttonEventListener")
 

// // A function that update the color circle
// function changeSize() {
//   theCircle
//   .append("svg")
  
//   .append("polygon")
//   .attr("points", "400,100, 235,210, 160,210, 100,100")

// }

// // Add an event listener to the button created in the html part
// d3.select("#Button").on("input", changeSize )

  
// function createCup() {
//    theCircle
//    .append("tag")
//    .append("circle")

//    .attr("r", 180)
//  }
      
//  https://d3-graph-gallery.com/graph/interactivity_button.html
// var coffeeCup = d3.select("#cup")
// .append("svg")
// .attr("points", "300,100, 235,210, 160,210, 100,100")
   
  //  .attr("height", 1000)
  //  .attr("width", 500);

// poly = [{"x":0.0, "y":25.0},
// {"x":8.5,"y":23.4},
// {"x":13.0,"y":21.0},
// {"x":19.0,"y":15.5}]

   // .style("fill", "green")
   // .style("stroke", "black")
   // .style("strokeWidth", "10px");



//    function myFunc() { 
//       var para = document.getElementById("p"); 
//       para.classList.toggle("paragraphClass"); 
//   } 


//   var path = function(){
//    coffeeCup
//    .remove(); 

//   };
    
//     d3.select('#Button').on('click', function ); 



// if ( path ) {
   
//     path.remove();
//     // Remove dots
//     path = null;
// } else {
//    path=coffeeCup.selectAll("polygon")
//    .data([poly])
//    .enter().append("polygon")

//   .attr("stroke","black")
//   .attr("stroke-width",2);
  
   

// }

// });




// if (/Mobi/.test(navigator.userAgent)) {
//   // mobile!
// }