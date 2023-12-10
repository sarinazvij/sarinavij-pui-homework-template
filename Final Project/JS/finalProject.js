let iceClear = document.getElementById('flexRadioDefault1'); // Inspirtation came from: https://linuxhint.com/check-uncheck-checkbox-using-javascript/#:~:text=uncheck%20the%20checkbox.-,Inside%20the%20body%20of%20the%20function%2C%20get%20the%20reference%20of,checked%E2%80%9D%20property%20%E2%80%9Cfalse%E2%80%9D.
let hotClear = document.getElementById('flexRadioDefault2');
let lightClear = document.getElementById('flexRadioDefault3');
let medClear = document.getElementById('flexRadioDefault4');
let darkRoastClear = document.getElementById('flexRadioDefault5');
let iceCheck = document.querySelector('input[name="flexRadioDefault1"]:checked'); //Helped me determine how to figure out when something is checked: https://developer.mozilla.org/ru/docs/Web/CSS/:checked
let milkType= document.getElementById("milk");
let milkText = milkType.options[milkType.selectedIndex].text;
let milkSelection = document.getElementById('milk'); // Inspirtation came from: https://linuxhint.com/check-uncheck-checkbox-using-javascript/#:~:text=uncheck%20the%20checkbox.-,Inside%20the%20body%20of%20the%20function%2C%20get%20the%20reference%20of,checked%E2%80%9D%20property%20%E2%80%9Cfalse%E2%80%9D.
let syrupSelection = document.getElementById('syrup');
let syruptype= document.getElementById("syrup");
let syrupText = syruptype.options[syruptype.selectedIndex].text;
let roastCheck = document.querySelector('input[name="flexRadioDefault2"]:checked'); //Helped me determine how to figure out when something is checked: https://developer.mozilla.org/ru/docs/Web/CSS/:checked

let icedCoffeeCup = d3.select("#cup") // The following websites helped me to create the structure for my polygon shapes: https://stackoverflow.com/questions/13204562/proper-format-for-drawing-polygon-data-in-d3 , https://d3-graph-gallery.com/graph/shape.html , 
  .append("svg")
  .attr("height", 300)
  .attr("width", 500)    
  .attr("viewBox", `0 0 600 500`)
  .attr("preserveAspectRatio", "xMinYMin meet")
  .classed("svg-content", true); 

let hotCoffeeCup = d3.select("#cup")
  .append("svg")
  .attr("width", 400)
  .attr("height", 200)
  .attr("viewBox", `0 0 200 300`) // All viewbox attributed below were created with help from: https://www.geeksforgeeks.org/svg-viewbox-attribute/
  .attr("preserveAspectRatio", "xMinYMin meet") // Aspect ratio assistance: https://stackoverflow.com/questions/13632169/using-viewbox-to-resize-svg-depending-on-the-window-size
  .classed("svg-content", true); // Another responsive element: https://stackoverflow.com/questions/9400615/whats-the-best-way-to-make-a-d3-js-visualisation-layout-responsive

function cupType(element){
  d3.select("body").select("svg").remove(); // aided by https://stackoverflow.com/questions/46499721/d3-js-graphs-not-getting-toggled-on-click-of-radio-buttons
  if (element.value === "Iced"){
    d3.select("body").select("svg").remove();
    icedCoffeeCup = d3.select("#cup")
      .append("svg")
      .attr("viewBox", `0 0 600 500`) 
      .attr("preserveAspectRatio", "xMinYMin meet")  
    icedCoffeeCup.append("polygon")
      .attr("points", "600,100 500,500 325,500 220,100")
      .style("fill", "white")
      .attr("stroke", "black"); 
  }
  else if (element.value === "Hot"){
    d3.select("body").select("svg").remove(); // aided by https://stackoverflow.com/questions/46499721/d3-js-graphs-not-getting-toggled-on-click-of-radio-buttons
    hotCoffeeCup = d3.select("#cup")
      .append("svg")
      .attr("width", 200)
      .attr("height", 200)
      .attr("viewBox", `0 0 200 200`) 
      .attr("preserveAspectRatio", "xMinYMin meet")
      .classed("svg-content", true); 
    hotCoffeeCup
      .append("polygon")  
      .attr("viewBox", `0 0 100 300`)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .classed("svg-content", true)
      .attr("points", "60,115, 60,70, 130,70, 130,115")  
      .attr("transform", "translate(-10,100), rotate(0)") 
      .style("stroke", "black")  
      .style("fill", "none") 
      .attr("stroke-width", 10); 
    hotCoffeeCup
      .attr("viewBox", `0 0 100 300`)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .classed("svg-content", true); 
    hotCoffeeCup.append("polygon") // In general, this link helped me determine how to append shapes: https://stackoverflow.com/questions/32409136/d3-js-adding-polygon-inside-rectangle
      .attr("points", "90,100, 90,280, 250,280, 250,100")
      .style("stroke", "black")
      .style("fill", "white")
  }
}

function addCoffee(element){
  if (iceCheck === null){
    lightClear.checked = false;
    medClear.checked = false;
    darkRoastClear.checked = false;
    alert("Please select whether you would like your drink iced or hot."); 
  }
  if ((element.value === "Light") && (iceCheck.value === "Iced")){
    icedCoffeeCup
      .append("polygon")  
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
  else if ((iceCheck.value === "Hot") && (element.value === "Light")){
    hotCoffeeCup
      .append("polygon")  
      .attr("points", "90,250, 90,280, 250,280, 250,250")
      .style("fill", "#C3890C");
    }
  else if ((iceCheck.value === "Hot") && (element.value === "Medium")) {
    hotCoffeeCup
      .append("polygon")  
      .attr("points", "90,250, 90,280, 250,280, 250,250")
      .style("fill", "#905B27");
}
  else if ((iceCheck.value === "Hot") && (element.value === "Dark")) {
    hotCoffeeCup
      .append("polygon")  
      .attr("points", "90,250, 90,280, 250,280, 250,250")
      .style("fill", "#401D01");
  }
}

function addMilk(){
  console.log(milkText); 
  if (iceCheck === null || (roastCheck === null)){
    alert("Please check to ensure all previous entries have been selected.");
    for(i = 0; i < milkSelection.options.length; i++){
      milkSelection.selectedIndex = 0;
    }
  } 

  else if ((milkText === "1% Milk") && (iceCheck.value === "Iced")){
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
  else if ((milkText === "1% Milk") && (iceCheck.value === "Hot")){
    hotCoffeeCup
      .append("polygon")  
      .attr("points", "90,250, 90,140, 250,140, 250,250")
      .style("fill", "#F0ECE8");
  }
  else if ((milkText === "Almond Milk") && (iceCheck.value === "Hot")){
    hotCoffeeCup
      .append("polygon")  
      .attr("points", "90,250, 90,140, 250,140, 250,250")
      .style("fill", "#F9E9D3");
  }
  else if ((milkText === "Coconut Milk") && (iceCheck.value === "Hot")){
    hotCoffeeCup
      .append("polygon")  
      .attr("points", "90,250, 90,140, 250,140, 250,250")
      .style("fill", "#F2EFE7");
  }
  else if ((milkText === "Soy Milk") && (iceCheck.value === "Hot")){
    hotCoffeeCup
      .append("polygon")  
      .attr("points", "90,250, 90,140, 250,140, 250,250")
      .style("fill", "#D2C7BF");
  }
}

function addSyrup(){
  console.log(syrupText); 
  if (iceCheck === null || (milkText === "Select Milk Type") || (roastCheck === null)){
    alert("Please check to ensure all previous entries have been selected.");
    for(i = 0; i < syrupSelection.options.length; i++){
      syrupSelection.selectedIndex = 0;
    } 

  }



  else if (syrupText === "Caramel" && (iceCheck.value === "Iced")){
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
  else if (syrupText === "Caramel" && (iceCheck.value === "Hot")){
    hotCoffeeCup
      .append("polygon")  
      .attr("points", "90,100, 90,140, 250,140, 250,100")
      .style("fill", "#DB9C60");
  }
  else if (syrupText === "Hazelnut" && (iceCheck.value === "Hot")){
    hotCoffeeCup
      .append("polygon")  
      .attr("points", "90,100, 90,140, 250,140, 250,100")
      .style("fill", "#8F4E02");
  }
  else if (syrupText === "Mocha" && (iceCheck.value === "Hot")){
    hotCoffeeCup
      .append("polygon")  
      .attr("points", "90,100, 90,140, 250,140, 250,100")
      .style("fill", "#411900");
  }
  else if (syrupText === "Vanilla" && (iceCheck.value === "Hot")){
    hotCoffeeCup
      .append("polygon")  
      .attr("points", "90,100, 90,140, 250,140, 250,100")
      .style("fill", "#EBE2D3");
  }
  else if (syrupText === "No Syrup" && (iceCheck.value === "Hot")){
  hotCoffeeCup
    .append("polygon")  
    .attr("points", "90,100, 90,140, 250,140, 250,100")
    .style("fill", "white");  
  }
}

function clearAll(){
  d3.select("body").select("svg").remove();
  iceClear.checked = false;
  hotClear.checked = false;
  lightClear.checked = false;
  medClear.checked = false;
  darkRoastClear.checked = false;
    for(i = 0; i < milkSelection.options.length; i++){
      milkSelection.selectedIndex = 0;
    }
    for(i = 0; i < syrupSelection.options.length; i++){
      syrupSelection.selectedIndex = 0;
    }
}
