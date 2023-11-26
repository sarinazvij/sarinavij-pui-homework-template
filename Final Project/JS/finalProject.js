let icedCoffeeCup = d3.select("#cup")
.append("svg")
.attr("height", 1000)
.attr("width", 1000); 

icedCoffeeCup.append("polygon")
  // .attr("points", "200,800 400,0 700,0 900,800")
  .attr("points", "900,800 700,0 400,0 200,800")
  .style("fill", "white");


// icedCoffeeCup.append("polygon")
// .attr("points", "775,300 700,0 400,0 325,300")
// .style("fill", "red");



function addIce(){

  let lightCoffee = document.getElementById("inlineCheckbox1"); 
  let medCoffee = document.getElementById("inlineCheckbox2"); 
  let darkCoffee = document.getElementById("inlineCheckbox3"); 

  if (lightCoffee.checked){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "775,300 700,0 400,0 325,300")
    .style("fill", "#C3890C");
      if (!(lightCoffee.checked)){
      icedCoffeeCup
      .append("polygon")  
      .attr("points", "775,300 700,0 400,0 325,300")
      .style("fill", "black");
    }
  }

  else if (medCoffee.checked){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "775,300 700,0 400,0 325,300")
    .style("fill", "#905B27");
  }
  else if (darkCoffee.checked){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "775,300 700,0 400,0 325,300")
    .style("fill", "#401D01");
  }
  
  else{
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "775,300 700,0 400,0 325,300")
    .style("fill", "transparent");
   

  }
 
}










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