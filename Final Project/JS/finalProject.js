let icedCoffeeCup = d3.select("#cup")
.append("svg")
.attr("height", 300)
.attr("width", 500); 

let arc = d3.arc()
.innerRadius(0) 
.outerRadius(100) 
.startAngle((Math.PI)*12) 
.endAngle(Math.PI*4); 

    
let hotCoffeeCup = d3.select("#cup")
  .append("svg") 
  .append("path")
  .attr("height", 600)
  .attr("width", 650); 





//   let cupHandle = d3.select("#cup")
//   .append("svg") 
//   .append("path")
//   .attr("height", 400)
// .attr("width", 350); 


// let newArc = d3.arc()
// .innerRadius(0) 
// .outerRadius(50) 
// .startAngle((Math.PI)*2) 
// .endAngle(Math.PI*1); 


// cupHandle
//   .attr("class", "arc") 
//   .attr("transform", "translate(100, 100)")
//   .attr("d", newArc)
//   .style("fill", "orange"); 



function cupType(element){

 
  if (element.value === "Iced"){

    icedCoffeeCup.append("polygon")
    .attr("points", "500,0 290,800 400,800 200,0")
    .style("fill", "white"); 

 
  }
else if (element.value === "Hot"){
  
  hotCoffeeCup
  .attr("class", "arc") 
  .attr("transform", "translate(100, 20)")
  .attr("d", arc)
  .style("fill", "white"); 

 
}
}






d3.select("#cup").html("")








function addCoffee(element){

  let iceCheck = document.querySelector('input[name="flexRadioDefault1"]:checked');


  console.log(element.value)
  if ((element.value === "Light") && (iceCheck.value === "Iced")){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "453.25,175 350,550 340,550 243.75,175")
    .style("fill", "#C3890C");
  }
  else if ((element.value === "Medium") && (iceCheck.value === "Iced")){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "453.25,175 350,550 340,550 243.75,175")
    .style("fill", "#905B27");
  }
  else if ((element.value === "Dark") && (iceCheck.value === "Iced")){
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


//  icedCoffeeCup
//   .append("polygon")  
//   .attr("points", "500,0 487,50 212,50 200,0") //milk
//   .style("fill", "yellow");


//   icedCoffeeCup
//   .append("polygon")  
//   .attr("points", "453,176 487,50 212,50 244,176") //syrup
//   .style("fill", "blue");

