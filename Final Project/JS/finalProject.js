let icedCoffeeCup = d3.select("#cup")
.append("svg")
.attr("height", 300)
.attr("width", 500)    
.attr("viewBox", `0 0 100 900`)
.attr("preserveAspectRatio", "xMinYMin meet")
.classed("svg-content", true); 

  
let hotCoffeeCup = d3.select("#cup")
.append("svg")
.attr("width", 200)
.attr("height", 200)
.append("g")
.attr("transform","translate(250,250)rotate(90)")
.attr("viewBox", `0 0 100 900`)
.attr("preserveAspectRatio", "xMinYMin meet")
.classed("svg-content", true); 

outerRadius = Math.min(width,height)/2,
innerRadius = (outerRadius/5)*4,
fontSize = (Math.min(width,height)/4);

var arc = d3.arc()

.innerRadius(0)
.outerRadius(150)
.startAngle(0)
.endAngle(Math.PI); 





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

    let hotCoffeeCup = d3.select("#cup")
    .append("svg")
    .append("g")
    .attr("transform","translate(250,250)rotate(90)")
    .attr("viewBox", `0 0 100 900`)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .classed("svg-content", true); 
    
    hotCoffeeCup.append("path")
    .style("fill", "white")
    .attr("d", arc());

  let rect =  hotCoffeeCup.append("rect")
     .attr("height", 200)
     .attr("width", 300)
        .attr("transform","translate(0,-150)rotate(90)")
        .style("fill", "white")
        

}
}


function addCoffee(element){

  let iceCheck = document.querySelector('input[name="flexRadioDefault1"]:checked');
  
    if (iceCheck === null){
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
    else if ((iceCheck.value === "Hot")){
      d3.select("body").select("svg").remove(); // aided by https://stackoverflow.com/questions/46499721/d3-js-graphs-not-getting-toggled-on-click-of-radio-buttons
      let hotCoffeeCup = d3.select("#cup")
      .append("svg")
      .append("g")
      .attr("transform","translate(250,250)rotate(90)")
      .attr("viewBox", `0 0 100 900`)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .classed("svg-content", true);  
      hotCoffeeCup.append("rect")
      .attr("height", 200)
      .attr("width", 300)
        .attr("transform","translate(0,-150)rotate(90)")
        .style("fill", "white"); 

      
      if (element.value === "Light") {
        hotCoffeeCup.append("path")
        .style("fill", "#C3890C")
        .attr("d", arc());
        }
      else if (element.value === "Medium") {
          hotCoffeeCup.append("path")
          .style("fill", "#905B27")
          .attr("d", arc());

}
      else if (element.value === "Dark") {
          hotCoffeeCup.append("path")
          .style("fill", "#401D01")
          .attr("d", arc());
      
      }
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

  else if ((milkText === "1% Milk") && (iceCheck.value === "Hot")){
    d3.select("body").select("svg")
    .append("polygon")  
    .attr("points", "400,250 400,100 100,100 100,250")
    .style("fill", "#F0ECE8");
  }
  
  else if ((milkText === "Almond Milk") && (iceCheck.value === "Hot")){
    d3.select("body").select("svg")
    .append("polygon")  
    .attr("points", "400,250 400,100 100,100 100,250")
    .style("fill", "#F9E9D3");
  }

  else if ((milkText === "Coconut Milk") && (iceCheck.value === "Hot")){
    d3.select("body").select("svg")
    .append("polygon")  
    .attr("points", "400,250 400,100 100,100 100,250")
    .style("fill", "#F2EFE7");
    
  }

  else if ((milkText === "Soy Milk") && (iceCheck.value === "Hot")){
    d3.select("body").select("svg")
    .append("polygon")  
    .attr("points", "400,250 400,100 100,100 100,250")
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
  else if (syrupText === "Caramel" && (iceCheck.value === "Hot")){
    d3.select("body").select("svg")
    .append("polygon")  
    .attr("points", "400,50 400,100 100,100 100,50")
    .style("fill", "#DB9C60");
  }
  else if (syrupText === "Hazelnut" && (iceCheck.value === "Hot")){
    d3.select("body").select("svg")
    .append("polygon")  
    .attr("points", "400,50 400,100 100,100 100,50")
    .style("fill", "#8F4E02");
  }
  else if (syrupText === "Mocha" && (iceCheck.value === "Hot")){
    d3.select("body").select("svg")
    .append("polygon")  
    .attr("points", "400,50 400,100 100,100 100,50")
    .style("fill", "#411900");
  }
else if (syrupText === "Vanilla" && (iceCheck.value === "Hot")){
  d3.select("body").select("svg")
  .append("polygon")  
  .attr("points", "400,50 400,100 100,100 100,50")
  .style("fill", "#EBE2D3");


}

else if (syrupText === "No Syrup" && (iceCheck.value === "Hot")){
  d3.select("body").select("svg")
  .append("polygon")  
  .attr("points", "400,50 400,100 100,100 100,50")
  .style("fill", "white");

}


}



 