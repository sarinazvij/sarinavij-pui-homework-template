let glazeInfo = {
    "Original":{
        name: "Keep Original", 
        price: 0, 
    },
    "Sugar Milk":{
        name: "Sugar Milk", 
        price: 0,
    },
    "Vanilla Milk":{
        name: "Vanilla Milk", 
        price: 0.50, 
    },
    "Double Chocolate":{
        name: "Double Chocolate",
        price: 1.50, 
    },
}; 

let packAdapt = {
    "1":  {
        name: "1",
        price: 1, 
    },
    "3":{
        name: "3", 
        price: 3, 
    },
    "6":{
        name: "6", 
        price: 5, 
    },
    "12":{
        name: "12", 
        price: 10,
    },
};

class Roll2 {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.rollPrice = rollPrice;  
    }
}


let mainCart = JSON.parse(localStorage.getItem("storedCart")); 
let priceArray = []; 
let finalCart = [];
//console.log(mainCart); 


function storeRoll (){
    let cartArray = Array.from(mainCart);
   // console.log(cartArray);
    let cartArrayUpdate = JSON.stringify(cartArray); 
    //console.log(cartArrayUpdate);
    localStorage.setItem("storedCart", cartArrayUpdate);
}
// function findPrice(roll){ 
//     let totalPrice = ((roll.rollPrice) + glazeInfo[roll.glazing].price) * packAdapt[roll.size].price;  
//     eval = (Math.floor(1000 * totalPrice)/1000);
//     let newEval = eval.toFixed(2); // This line of code was inspired by the following website: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
//     return newEval;
// }

function addRoll(rollType, rollGlazing, packSize, rollPrice){
    const cinroll = new Roll2(rollType, rollGlazing, packSize, rollPrice);
    finalCart.push(cinroll);
    return cinroll; 
}

function appendRoll(cinroll){
    let template = document.querySelector("#cardtemplate");
    let clone = template.content.cloneNode(true);
    cinroll.element = clone.querySelector(".cartorder");
    const remove = cinroll.element.querySelector(".remove");
    //console.log(remove); 
    remove.addEventListener("click", () => {
        deleteEntry(cinroll);
    });     
    const insertRoll = document.querySelector(".cartbox"); 
    insertRoll.prepend(cinroll.element);
    addRollInfo(cinroll);
}

function addRollInfo(cinroll){
    let rollImageElement = cinroll.element.querySelector(".cartimages");
    let rollNameElement = cinroll.element.querySelector(".rollname");
    let rollSizeElement = cinroll.element.querySelector(".rollsize");
    let rollGlazeElement = cinroll.element.querySelector(".rollglaze");
    let endPriceElement = cinroll.element.querySelector(".rollfinalprice");
    let picTitle = cinroll.type.toLowerCase();
    //console.log(picTitle);
    rollImageElement.src = './../assets/products/' + picTitle + "-cinnamon-roll.jpg";
    //console.log(rollImageElement.src); 
    rollNameElement.innerText = cinroll.type + " Cinnamon Roll";
    rollGlazeElement.innerText = "Glazing: " + cinroll.glazing; 
    rollSizeElement.innerText = "Pack Size: " + cinroll.size;
    // endPriceElement.innerText = "$" + " " + (findPrice(cinroll));
}


function deleteEntry(cinroll){

cinroll.element.remove(); 

    for (let i = 0; i < finalCart.length; i++){
        //console.log(cinroll)

        if (finalCart[i] === cinroll){
            finalCart.splice(i,1);
            mainCart.splice(i,1)
            console.log(finalCart);
            console.log(mainCart);
            storeRoll(); 
           return
        }
     
    }
    //console.log(finalCart); 
    // priceArray = [];
  
  
    

    // for (const cinroll of finalCart){
    //     console.log(cinroll);
    //     // priceArray.push(findPrice(cinroll)); 
    //     console.log(priceArray);
    // }  
    let finalPrice = document.querySelector("#finalprice2"); 
    let addPrice = 0;
    for (let element of priceArray){
        addPrice+=parseFloat(element);
            }
    if (priceArray.length == "0"){
        finalPrice.innerText = "$ 0.00";
    }
    else {
        finalPrice.innerText = "$ " + addPrice;
     }
}

for (const cinroll of finalCart){
    appendRoll(cinroll);
    priceArray.push(findPrice(cinroll)); 
    
}

let finalPrice = document.querySelector("#finalprice2"); 
let addPrice = parseFloat(priceArray[0]) + parseFloat(priceArray[1]) +  parseFloat(priceArray[2]) +  parseFloat(priceArray[3]); 
//console.log(addPrice); 
addPrice = (Math.floor(1000 * addPrice)/1000);
let newEval = addPrice.toFixed(2);
finalPrice.innerText = "$ " + newEval; 


function getRoll(){
    let cartArrayUpdate = localStorage.getItem("storedCart");
    let cartArray = JSON.parse(cartArrayUpdate);
    for (const info of cartArray){
        let rollz = addRoll (info.type, info.glazing, info.size); 
        appendRoll(rollz);
    }
}

if (localStorage.getItem("storedCart") != null){
    getRoll();
}
