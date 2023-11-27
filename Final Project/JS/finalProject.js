var data = [ 
  { x: 0, y: 4 }, 
  { x: 1, y: 9 },
  { x: 2, y: 16}, 
  { x: -2, y: 0 },
  
]; 



for (var x = 0; x < 500; x++){
  var y = a*(x - xIntercept1)*(x - xIntercept2);
  data.push({x: x, y: y});
}

// var xScale = d3.scaleLinear() 
//   .domain([0, 20]).range([25, 175]); 
// var yScale = d3.scaleLinear() 
//   .domain([0, 20]).range([175, 25]); 

// var line = d3.line() 
//   .x((d) => xScale(d.x)) 
//   .y((d) => yScale(d.y)) 
//   // curveBasisOpen is used 
//   .curve(d3.curveBasisOpen); 

d3.select("#gfg") 
  .append("path") 
  .attr("d", line(data)) 
  .attr("fill", "white") 
  .attr("stroke", "green"); 














let icedCoffeeCup = d3.select("#cup")
.append("svg")
.attr("height", 300)
.attr("width", 500); 

icedCoffeeCup.append("polygon")
  // .attr("points", "900,800 700,0 400,0 200,800")
  .attr("points", "500,0 290,800 400,800 200,0")
  .style("fill", "white");


// icedCoffeeCup.append("polygon")
// .attr("points", "775,300 700,0 400,0 325,300")
// .style("fill", "red");



function addIce(){

  let lightCoffee = document.getElementById("inlineCheckbox2a"); 
  let medCoffee = document.querySelectorAll("#inlineCheckbox2b"); 
  let darkCoffee = document.getElementById("inlineCheckbox2c"); 


  for (let i = 0; i < lightCoffee.length; i++){
    let ohNo = lightCoffee[i].checked; 
  

    if (ohNo.innerHTML = "Light"){
    console.log(ohNo.innerHTML); 
      icedCoffeeCup
      .append("polygon")  
      .attr("points", "455,175 350,550 340,550 242,175")
      .style("fill", "#C3890C");
    }
    else{
      console.log(ohNo.innerHTML);
        icedCoffeeCup
        .append("polygon")  
        .attr("points", "455,175 350,550 340,550 242,175")
        .style("fill", "yellow");
    }
  }
}


//     if (ohNo.innerHTML = "Medium"){
//       icedCoffeeCup
//       .append("polygon")  
//       .attr("points", "455,175 350,550 340,550 242,175")
//       .style("fill", "#905B27");
//     }

//     else if (ohNo.innerHTML = "Dark"){
//       icedCoffeeCup
//       .append("polygon")  
//       .attr("points", "455,175 350,550 340,550 242,175")
//       .style("fill", "#401D01");
//     }
//   else{
//     console.log(ohNo.innerHTML);
//       icedCoffeeCup
//       .append("polygon")  
//       .attr("points", "455,175 350,550 340,550 242,175")
//       .style("fill", "yellow");
//   }
// }
// }




//   if (lightCoffee.checked){
//     icedCoffeeCup
//     .append("polygon")  
//     .attr("points", "775,300 700,0 400,0 325,300")
//     .style("fill", "#C3890C");
//   }
  
// else {
//   icedCoffeeCup
//   .append("polygon")  
//   .attr("points", "775,300 700,0 400,0 325,300")
//   .style("fill", "yellow");

// }

// if (medCoffee.checked){
//     icedCoffeeCup
//     .append("polygon")  
//     .attr("points", "775,300 700,0 400,0 325,300")
//     .style("fill", "#905B27");
//   }
    
// else {
//   icedCoffeeCup
//   .append("polygon")  
//   .attr("points", "775,300 700,0 400,0 325,300")
//   .style("fill", "yellow");
// }

  
// if (darkCoffee.checked){
//     icedCoffeeCup
//     .append("polygon")  
//     .attr("points", "775,300 700,0 400,0 325,300")
//     .style("fill", "#401D01");
  
//   }
//   else {
//     icedCoffeeCup
//     .append("polygon")  
//     .attr("points", "775,300 700,0 400,0 325,300")
//     .style("fill", "yellow");
//   }
  
  // else{
  //   icedCoffeeCup
  //   .append("polygon")  
  //   .attr("points", "775,300 700,0 400,0 325,300")
  //   .style("fill", "transparent");
   

  // }
 











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