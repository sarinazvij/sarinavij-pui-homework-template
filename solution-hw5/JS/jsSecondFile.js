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

let priceArray = []; 
let finalCart = new Set ();  
let cartMain2 = new Roll2 ("Walnut", "Vanilla Milk", "12", 3.49);
let cartMain4 = new Roll2 ("Apple", "Original", "3", 3.49);
let cartMain3 = new Roll2 ("Raisin", "Sugar Milk", "3", 2.99);
let cartMain1 = new Roll2 ("Original", "Sugar Milk", "1", 2.49);
finalCart.add(cartMain4);
finalCart.add(cartMain3);
finalCart.add(cartMain2);
finalCart.add(cartMain1);

function findPrice(roll){
    let totalPrice = ((roll.rollPrice) + glazeInfo[roll.glazing].price) * packAdapt[roll.size].price;  
    eval = (Math.floor(1000 * totalPrice)/1000);
    let newEval = eval.toFixed(2); // This line of code was inspired by the following website: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    return newEval;
}

function addRoll(rollType, rollGlazing, packSize, rollPrice){
    const cinroll = new Roll2(rollType, rollGlazing, packSize, rollPrice);
    finalCart.add(cinroll);
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
    rollImageElement.src = './../assets/products/' + cinroll.type + "-cinnamon-roll.jpg"; 
    rollNameElement.innerText = cinroll.type + " Cinnamon Roll";
    rollGlazeElement.innerText = "Glazing: " + cinroll.glazing; 
    rollSizeElement.innerText = "Pack Size: " + cinroll.size;
    endPriceElement.innerText = "$" + " " + (findPrice(cinroll));; 
}

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



