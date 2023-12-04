
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;       
}

window.onload = function() {
  let blah = document.getElementById("arc1")
  blah.setAttribute("d", describeArc(250, 200, 100, 90, 270));
  blah.setAttribute("fill", "orange");
  document.getElementById("arc2").setAttribute("d", describeArc(250, 200, 100, 160, 200));


};



// var ctx = document.querySelector("arc1").getContext("2d"),
//     pst = 0, dlt = 2;

// ctx.fillStyle = "#28f";

// function drawCircle(ctx, x, y, radius, percent) {

//   var o = radius * 2,
//       h = o - (o * percent / 100);
  
//   ctx.globalCompositeOperation = "source-over";     // make sure we have default mode
//   ctx.beginPath();                                  // fill an arc
//   ctx.arc(x, y, radius, 0, 6.28);
//   ctx.fill();

//   ctx.globalCompositeOperation = "destination-out"; // mode to use for next op.
//   ctx.fillRect(x - radius, y - radius, o, h);       // "clear" part of arc
//   ctx.globalCompositeOperation = "source-over";     // be polite, set default mode back
// }



























// let icedCoffeeCup = d3.select("#cup")
// .append("svg")
// // .attr("height", 300)
// // .attr("width", 500)    
// .attr("viewBox", `0 0 100 900`)
// .attr("preserveAspectRatio", "xMinYMin meet")
// .classed("svg-content", true); 



  


//   let hotCoffeeCup = d3.select("#cup")
//   .append("svg") 
//   .append("path")
//   .attr("viewBox", `0 0 600 400`)
//   .attr("preserveAspectRatio", "xMinYMin meet")
//   .classed("svg-content", true);
    

 



// function cupType(element){
//   d3.select("body").select("svg").remove(); // aided by https://stackoverflow.com/questions/46499721/d3-js-graphs-not-getting-toggled-on-click-of-radio-buttons
//   if (element.value === "Iced"){
//     d3.select("body").select("svg").remove();
//     icedCoffeeCup = d3.select("#cup")
//     .append("svg")
//     // .attr("height", 300)
//     // .attr("width", 500)
//     .attr("viewBox", `0 0 600 400`)
//     .attr("preserveAspectRatio", "xMinYMin meet")
//     .attr("preserveAspectRatio", "xMinYMin meet"); 
//     icedCoffeeCup.append("polygon")
//     .attr("points", "500,0 290,800 400,800 200,0")
//     .style("fill", "white")
//     .attr("stroke", "black"); 
//   }

// else if (element.value === "Hot"){
//   d3.select("body").select("svg").remove(); // aided by https://stackoverflow.com/questions/46499721/d3-js-graphs-not-getting-toggled-on-click-of-radio-buttons

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
//   .style("fill", "white"); 
// }
// }

// function addCoffee(element){

//   let iceCheck = document.querySelector('input[name="flexRadioDefault1"]:checked');
  
//     if (iceCheck === null){
//       alert("Please select whether you would like your drink iced or hot."); 
//     }
//     if ((element.value === "Light") && (iceCheck.value === "Iced")){
//       icedCoffeeCup
//       .append("polygon")  
//       .attr("points", "453.25,175 350,550 340,550 243.75,175")
//       .style("fill", "#C3890C");
//     }
//     else if ((element.value === "Medium") && (iceCheck.value === "Iced")){
//       icedCoffeeCup
//       .append("polygon")  
//       .attr("points", "453.25,175 350,550 340,550 243.75,175")
//       .style("fill", "#905B27");
//     }
//     else if ((element.value === "Dark") && (iceCheck.value === "Iced")){
//       icedCoffeeCup
//       .append("polygon")  
//       .attr("points", "453.25,175 350,550 340,550 243.75,175")
//       .style("fill", "#401D01");
//     }
//   }


// function addMilk(){
//   let iceCheck = document.querySelector('input[name="flexRadioDefault1"]:checked');

  
// let milkType= document.getElementById("milk");
// var milkText = milkType.options[milkType.selectedIndex].text;
// console.log(milkText); 
 

//   if ((milkText === "1% Milk") && (iceCheck.value === "Iced")){
//     icedCoffeeCup
//     .append("polygon")  
//     .attr("points", "453,176 487,50 212,50 244,176")
//     .style("fill", "#F0ECE8");
//   }
//   else if ((milkText === "Almond Milk") && (iceCheck.value === "Iced")){
//     icedCoffeeCup
//     .append("polygon")  
//     .attr("points", "453,176 487,50 212,50 244,176")
//     .style("fill", "#F9E9D3");
//   }
//   else if ((milkText === "Coconut Milk") && (iceCheck.value === "Iced")){
//     icedCoffeeCup
//     .append("polygon")  
//     .attr("points", "453,176 487,50 212,50 244,176")
//     .style("fill", "#F2EFE7");
//   }
//   else if ((milkText === "Soy Milk") && (iceCheck.value === "Iced")){
//     icedCoffeeCup
//     .append("polygon")  
//     .attr("points", "453,176 487,50 212,50 244,176")
//     .style("fill", "#D2C7BF");
//   }
//   }





// function addSyrup(){
//   let iceCheck = document.querySelector('input[name="flexRadioDefault1"]:checked');

//   let syruptype= document.getElementById("syrup");
//   var syrupText = syruptype.options[syruptype.selectedIndex].text;
//   console.log(syrupText); 
 

//   if (syrupText === "Caramel" && (iceCheck.value === "Iced")){
//     icedCoffeeCup
//     .append("polygon")  
//     .attr("points", "500,0 487,50 212,50 200,0")
//     .style("fill", "#DB9C60");
//   }
//   else if (syrupText === "Hazelnut" && (iceCheck.value === "Iced")){
//     icedCoffeeCup
//     .append("polygon")  
//     .attr("points", "500,0 487,50 212,50 200,0")
//     .style("fill", "#8F4E02");
//   }
//   else if (syrupText === "Mocha" && (iceCheck.value === "Iced") ){
//     icedCoffeeCup
//     .append("polygon")  
//     .attr("points", "500,0 487,50 212,50 200,0")
//     .style("fill", "#411900");
//   }
//   else if (syrupText === "Vanilla"  && (iceCheck.value === "Iced")){
//     icedCoffeeCup
//     .append("polygon")  
//     .attr("points", "500,0 487,50 212,50 200,0")
//     .style("fill", "#EBE2D3");
//   }
//   else if (syrupText === "No Syrup" && (iceCheck.value === "Iced")){
//     icedCoffeeCup
//     .append("polygon")  
//     .attr("points", "500,0 487,50 212,50 200,0")
//     .style("fill", "white");
//   }

// }



// icedCoffeeCup
// .append("polygon")  
// .attr("points", "500,0 487,50 212,50 200,0") //milk
// .style("fill", "yellow");


// icedCoffeeCup
// .append("polygon")  
// .attr("points", "453,176 487,50 212,50 244,176") //syrup
// .style("fill", "blue");
