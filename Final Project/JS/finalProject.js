let icedCoffeeCup = d3.select("#cup")
.append("svg")
.attr("height", 300)
.attr("width", 500)    
.attr("viewBox", `0 0 100 900`)
.attr("preserveAspectRatio", "xMinYMin meet")
.classed("svg-content", true); 

  
let hotCoffeeCup = d3.select("#cup")
.append("svg")
.attr("width", 400)
.attr("height", 200)
// .append("g")
.attr("viewBox", `0 0 200 300`)
.attr("preserveAspectRatio", "xMinYMin meet")
.classed("svg-content", true); 


// hotCoffeeCup
// .attr("viewBox", `0 0 100 300`)
// .attr("preserveAspectRatio", "xMinYMin meet")
// .attr("preserveAspectRatio", "xMinYMin meet")
// .classed("svg-content", true); 

// hotCoffeeCup
//   .append("polygon")  
//   .attr("viewBox", `0 0 100 300`)
// .attr("preserveAspectRatio", "xMinYMin meet")
// .attr("preserveAspectRatio", "xMinYMin meet")
// .classed("svg-content", true)
//   .attr("points", "70,115, 70,85, 130,85, 130,115")  
//   .attr("transform", "translate(-70,-10), rotate(0)") 
//   .style("stroke", "black")  
//   .style("fill", "none") 
//   .attr("stroke-width", 10); 


// hotCoffeeCup
//   .attr("viewBox", `0 0 100 300`)
//   .attr("preserveAspectRatio", "xMinYMin meet")
//   .attr("preserveAspectRatio", "xMinYMin meet")
//   .classed("svg-content", true); 

// hotCoffeeCup.append("polygon")
//   .attr("points", "10,50, 10,150, 100,150, 100,50")
//   .style("stroke", "black")
//   .style("fill", "white"); 









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
.append("svg")
.attr("width", 200)
.attr("height", 200)
// .append("g")
.attr("viewBox", `0 0 200 200`)
.attr("preserveAspectRatio", "xMinYMin meet")
.classed("svg-content", true); 

hotCoffeeCup
.append("polygon")  
.attr("viewBox", `0 0 100 300`)
.attr("preserveAspectRatio", "xMinYMin meet")
.attr("preserveAspectRatio", "xMinYMin meet")
.classed("svg-content", true)
.attr("points", "70,115, 70,85, 130,85, 130,115")  
.attr("transform", "translate(-70,-10), rotate(0)") 
.style("stroke", "black")  
.style("fill", "none") 
.attr("stroke-width", 10); 
    
    hotCoffeeCup
    .attr("viewBox", `0 0 100 300`)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .classed("svg-content", true); 
  hotCoffeeCup.append("polygon")
    .attr("points", "10,50, 10,150, 100,150, 100,50")
    .style("stroke", "black")
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
    else if ((iceCheck.value === "Hot") && (element.value === "Light")){
      hotCoffeeCup
            .append("polygon")  
            .attr("points", "10,130, 10,150, 100,150, 100,130")
            .style("fill", "#C3890C");
    }
    
      else if ((iceCheck.value === "Hot") && (element.value === "Medium")) {
        hotCoffeeCup
        .append("polygon")  
        .attr("points", "10,130, 10,150, 100,150, 100,130")
        .style("fill", "#905B27");
      

}
      else if ((iceCheck.value === "Hot") && (element.value === "Dark")) {
        hotCoffeeCup
        .append("polygon")  
        .attr("points", "10,130, 10,150, 100,150, 100,130")
        .style("fill", "#401D01");
      

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
    
          hotCoffeeCup
          .append("polygon")  
          .attr("points", "10,130, 10,65, 100,65, 100,130")
          .style("fill", "#F0ECE8");
  }
  
  else if ((milkText === "Almond Milk") && (iceCheck.value === "Hot")){
    hotCoffeeCup
    .append("polygon")  
    .attr("points", "10,130, 10,65, 100,65, 100,130")
    .style("fill", "#F9E9D3");
  
  }

  else if ((milkText === "Coconut Milk") && (iceCheck.value === "Hot")){
    hotCoffeeCup
    .append("polygon")  
    .attr("points", "10,130, 10,65, 100,65, 100,130")
    .style("fill", "#F2EFE7");

  
    
  }

  else if ((milkText === "Soy Milk") && (iceCheck.value === "Hot")){
    hotCoffeeCup
    .append("polygon")  
    .attr("points", "10,130, 10,65, 100,65, 100,130")
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


    hotCoffeeCup
    .append("polygon")  
    .attr("points", "10,65, 10,50, 100,50, 100,65")
    .style("fill", "#DB9C60");

  }
  else if (syrupText === "Hazelnut" && (iceCheck.value === "Hot")){

    hotCoffeeCup
    .append("polygon")  
    .attr("points", "10,65, 10,50, 100,50, 100,65")
    .style("fill", "#8F4E02");
  
  }
  else if (syrupText === "Mocha" && (iceCheck.value === "Hot")){
    hotCoffeeCup
    .append("polygon")  
    .attr("points", "10,65, 10,50, 100,50, 100,65")
    .style("fill", "#411900");
  
  }
else if (syrupText === "Vanilla" && (iceCheck.value === "Hot")){

  hotCoffeeCup
  .append("polygon")  
  .attr("points", "10,65, 10,50, 100,50, 100,65")
  .style("fill", "#EBE2D3");



}

else if (syrupText === "No Syrup" && (iceCheck.value === "Hot")){


  hotCoffeeCup
  .append("polygon")  
  .attr("points", "10,65, 10,50, 100,50, 100,65")
  .style("fill", "white");
 

}


}



 
