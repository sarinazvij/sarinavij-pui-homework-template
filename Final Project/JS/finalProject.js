
let icedCoffeeCup = d3.select("#cup")
.append("svg")
.attr("height", 300)
.attr("width", 500)    
.attr("viewBox", `0 0 100 900`)
.attr("preserveAspectRatio", "xMinYMin meet")
.classed("svg-content", true); 



  



 
let r = 200;

let hotCoffeeCup = d3.select("#cup")
.append("svg")
.attr("viewBox", `0 0 100 900`)
.attr("preserveAspectRatio", "xMinYMin meet")
.classed("svg-content", true); 





 


function cupType(element){
  d3.select("body").select("svg").remove(); // aided by https://stackoverflow.com/questions/46499721/d3-js-graphs-not-getting-toggled-on-click-of-radio-buttons
  if (element.value === "Iced"){
    d3.select("body").select("svg").remove();
    icedCoffeeCup = d3.select("#cup")
    .append("svg")
    // .attr("height", 300)
    // .attr("width", 500)
    .attr("viewBox", `0 0 600 400`)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("preserveAspectRatio", "xMinYMin meet"); 
    icedCoffeeCup.append("polygon")
    .attr("points", "600,100 500,500 325,500 220,100")
    .style("fill", "white")
    .attr("stroke", "black"); 
  }

else if (element.value === "Hot"){
 
  d3.select("body").select("svg").remove(); // aided by https://stackoverflow.com/questions/46499721/d3-js-graphs-not-getting-toggled-on-click-of-radio-buttons
  hotCoffeeCup = d3.select("#cup")
  .append("svg");
  var grad = hotCoffeeCup.append("defs").append("linearGradient").attr("id", "grad")
  .attr("x1", "0%").attr("x2", "0%").attr("y1", "100%").attr("y2", "0%");
  
  grad.append("stop").attr("offset", "50%").style("stop-color", "white");
grad.append("stop").attr("offset", "50%").style("stop-color", "#D2F6F9");
// grad.append("stop").attr("offset", "30%").style("stop-color", "lightblue");
// grad.append("stop").attr("offset", "30%").style("stop-color", "white");

hotCoffeeCup.append("circle")
  .attr("cx", r)
  .attr("cy", r)
  .attr("r", r)
  .attr("fill", "url(#grad)");

}
}
// hotCoffeeCup = d3.select("#cup")
//   .append("svg") 
//   .append("path")
//   .attr("height", 100)
//   .attr("width", 100) 
//   .attr("viewBox", `0 0 100 900`)
//   .attr("transform", "translate(100, 20)"); 
//    arc = d3.arc()
// .innerRadius(0) 
// .outerRadius(76) 
// .startAngle((Math.PI)*6) 
// .endAngle(Math.PI*2); 
//   hotCoffeeCup
//   .attr("class", "arc") 
//   .attr("d", arc)
// //   .style("fill", "white"); 
// }
// }

function addCoffee(element){

  let iceCheck = document.querySelector('input[name="flexRadioDefault1"]:checked');
  
    if (iceCheck === null){
      alert("Please select whether you would like your drink iced or hot."); 
    }
    if ((element.value === "Light") && (iceCheck.value === "Iced")){
      icedCoffeeCup
      .append("polygon")  
      // 
      .attr("points", "537,350 500,500 325,500 286,350")
      .style("fill", "#C3890C");
    }
    else if ((element.value === "Medium") && (iceCheck.value === "Iced")){
      icedCoffeeCup
      .append("polygon")  
      .attr("points", "537,350 500,500 325,500 286,350")
      .style("fill", "#905B27");
    }
    else if ((element.value === "Dark") && (iceCheck.value === "Iced")){
      icedCoffeeCup
      .append("polygon")  
      .attr("points", "537,350 500,500 325,500 286,350")
      .style("fill", "#401D01");
    }
    else if ((element.value === "Light") && (iceCheck.value === "Hot")){
  
  var grad = hotCoffeeCup.append("defs").append("linearGradient").attr("id", "grad")
  .attr("x1", "0%").attr("x2", "0%").attr("y1", "100%").attr("y2", "0%");
  
  grad.append("stop").attr("offset", "50%").style("stop-color", "white");
grad.append("stop").attr("offset", "50%").style("stop-color", "#D2F6F9");
// grad.append("stop").attr("offset", "30%").style("stop-color", "lightblue");
// grad.append("stop").attr("offset", "30%").style("stop-color", "white");

hotCoffeeCup.append("circle")
  .attr("cx", r)
  .attr("cy", r)
  .attr("r", r)
  .attr("fill", "url(#grad)")
  .attr("stroke", "black"); 
  
  }

}

function addMilk(){
  let iceCheck = document.querySelector('input[name="flexRadioDefault1"]:checked');

  
let milkType= document.getElementById("milk");
var milkText = milkType.options[milkType.selectedIndex].text;
console.log(milkText); 
 

  if ((milkText === "1% Milk") && (iceCheck.value === "Iced")){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "537,350 581,175 240,175 286,350")
    .style("fill", "#F0ECE8");
  }
  else if ((milkText === "Almond Milk") && (iceCheck.value === "Iced")){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "537,350 581,175 240,175 286,350")
    .style("fill", "#F9E9D3");
  }
  else if ((milkText === "Coconut Milk") && (iceCheck.value === "Iced")){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "537,350 581,175 240,175 286,350")
    .style("fill", "#F2EFE7");
  }
  else if ((milkText === "Soy Milk") && (iceCheck.value === "Iced")){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "537,350 581,175 240,175 286,350")
    .style("fill", "#D2C7BF");
  }
  }





function addSyrup(){
  let iceCheck = document.querySelector('input[name="flexRadioDefault1"]:checked');

  let syruptype= document.getElementById("syrup");
  var syrupText = syruptype.options[syruptype.selectedIndex].text;
  console.log(syrupText); 
 

  if (syrupText === "Caramel" && (iceCheck.value === "Iced")){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "600,100 581,175 240,175 220,100")
    .style("fill", "#DB9C60");
  }
  else if (syrupText === "Hazelnut" && (iceCheck.value === "Iced")){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "600,100 581,175 240,175 220,100")
    .style("fill", "#8F4E02");
  }
  else if (syrupText === "Mocha" && (iceCheck.value === "Iced") ){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "600,100 581,175 240,175 220,100")
    .style("fill", "#411900");
  }
  else if (syrupText === "Vanilla"  && (iceCheck.value === "Iced")){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "600,100 581,175 240,175 220,100")
    .style("fill", "#EBE2D3");
  }
  else if (syrupText === "No Syrup" && (iceCheck.value === "Iced")){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "600,100 581,175 240,175 220,100")
    .style("fill", "white");
  }

}



// icedCoffeeCup
// .append("polygon")  
// .attr("points", "500,0 487,50 212,50 200,0") //milk
// .style("fill", "yellow");


// icedCoffeeCup
// .append("polygon")  
// .attr("points", "453,176 487,50 212,50 244,176") //syrup
// .style("fill", "blue");



