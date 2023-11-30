let icedCoffeeCup = d3.select("#cup")
.append("svg")
.attr("height", 300)
.attr("width", 500)
margin = ({top: 320, right: 330, bottom: 330, left: 430}); 




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
  d3.select("body").select("svg").remove(); // aided by https://stackoverflow.com/questions/46499721/d3-js-graphs-not-getting-toggled-on-click-of-radio-buttons
  if (element.value === "Iced"){
    icedCoffeeCup = d3.select("#cup")
    .append("svg")
    .attr("height", 300)
    .attr("width", 500); 
    icedCoffeeCup.append("polygon")
    .attr("points", "500,0 290,800 400,800 200,0")
    .style("fill", "white"); 
  }

else if (element.value === "Hot"){
  d3.select("body").select("svg").remove(); // aided by https://stackoverflow.com/questions/46499721/d3-js-graphs-not-getting-toggled-on-click-of-radio-buttons

hotCoffeeCup = d3.select("#cup")
  .append("svg") 
  .append("path")
  .attr("height", 600)
  .attr("width", 650); 
   arc = d3.arc()
.innerRadius(0) 
.outerRadius(100) 
.startAngle((Math.PI)*12) 
.endAngle(Math.PI*4); 
  hotCoffeeCup
  .attr("class", "arc") 
  .attr("transform", "translate(100, 20)")
  .attr("d", arc)
  .style("fill", "white"); 
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


function addMilk(){
  let iceCheck = document.querySelector('input[name="flexRadioDefault1"]:checked');

  
let milkType= document.getElementById("milk");
var milkText = milkType.options[milkType.selectedIndex].text;
console.log(milkText); 
 

  if ((milkText === "1% Milk") && (iceCheck.value === "Iced")){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "453,176 487,50 212,50 244,176")
    .style("fill", "#F0ECE8");
  }
  else if ((milkText === "Almond Milk") && (iceCheck.value === "Iced")){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "453,176 487,50 212,50 244,176")
    .style("fill", "#F9E9D3");
  }
  else if ((milkText === "Coconut Milk") && (iceCheck.value === "Iced")){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "453,176 487,50 212,50 244,176")
    .style("fill", "#F2EFE7");
  }
  else if ((milkText === "Soy Milk") && (iceCheck.value === "Iced")){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "453,176 487,50 212,50 244,176")
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
    .attr("points", "500,0 487,50 212,50 200,0")
    .style("fill", "#DB9C60");
  }
  else if (syrupText === "Hazelnut" && (iceCheck.value === "Iced")){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "500,0 487,50 212,50 200,0")
    .style("fill", "#8F4E02");
  }
  else if (syrupText === "Mocha" && (iceCheck.value === "Iced") ){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "500,0 487,50 212,50 200,0")
    .style("fill", "#411900");
  }
  else if (syrupText === "Vanilla"  && (iceCheck.value === "Iced")){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "500,0 487,50 212,50 200,0")
    .style("fill", "#EBE2D3");
  }
  else if (syrupText === "No Syrup" && (iceCheck.value === "Iced")){
    icedCoffeeCup
    .append("polygon")  
    .attr("points", "500,0 487,50 212,50 200,0")
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
