let glazeInfo = {
    original:{
        name: "Keep Original", 
        price: 0, 
    },
    sugarmilk:{
        name: "Sugar Milk", 
        price: 0,
    },
    vanilla:{
        name: "Vanilla Milk", 
        price: 0.50, 
    },
    doublechocolate:{
        name: "Double Chocolate",
        price: 1.50, 
    },
}; 

let packAdapt = {
    first:{
        name: "1",
        price: 1, 
    },
    second:{
        name: "3", 
        price: 3, 
    },
    third:{
        name: "6", 
        price: 5, 
    },
    fourth:{
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




// function rollToCart(){
//     console.log(callRoll());
// }


let priceArray = []; 
let finalCart = new Set ();  

function findPrice(roll){
    let totalPrice = ((roll.rollPrice) + glazeInfo[roll.glazing].price) * packAdapt[roll.size].price;  
    eval = (Math.floor(1000 * totalPrice)/1000);
    let newEval = eval.toFixed(2); // This line of code was inspired by the following website: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    return newEval;
}

// function addRoll(rollType, rollGlazing, packSize, rollPrice){
//     const cinroll = new Roll2(rollType, rollGlazing, packSize, rollPrice);
//     finalCart.add(cinroll);
//     return cinroll; 
// }

// function appendRoll(cinroll){
//     let template = document.querySelector("#cardtemplate");
//     let clone = template.content.cloneNode(true);
//     cinroll.element = clone.querySelector(".cartorder");
//     const remove = cinroll.element.querySelector(".remove");
//     //console.log(remove); 
//     remove.addEventListener("click", () => {
//         deleteEntry(cinroll);
//     });     
//     const insertRoll = document.querySelector(".cartbox"); 
//     insertRoll.prepend(cinroll.element);
//     addRollInfo(cinroll);
// }



function deleteEntry(cinroll){
    cinroll.element.remove(); 
    finalCart.delete(cinroll);
    priceArray = [];
    for (const cinroll of finalCart){
        console.log(cinroll);
        priceArray.push(findPrice(cinroll)); 
        console.log(priceArray);
    }  
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

function callRoll(){
    //console.log(packSize); 
    //console.log(rollGlazing); 
    let purchase = new Roll(rollType, rollGlazing, packSize, basePrice);
    finalCart.push(purchase); 
    console.log(finalCart); 
}



function storeRoll (){
    let cartArray = Array.from(finalCart);
    console.log(cartArray);
    let cartArrayUpdate = JSON.parse(cartArray); 
    console.log(cartArrayUpdate);
    localStorage.setItem("storedCart", cartArrayUpdate);
}




