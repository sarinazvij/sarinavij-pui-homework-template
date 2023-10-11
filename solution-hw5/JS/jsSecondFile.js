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

let finalCart = new Set ();  

let cartMain2 = new Roll2 ("Walnut", "Vanilla Milk", "12", 3.49)
let cartMain4 = new Roll2 ("Apple", "Original", "3", 3.49)
let cartMain3 = new Roll2 ("Raisin", "Sugar Milk", "3", 2.99)

let cartMain = new Roll2 ("Original", "Sugar Milk", "1", 2.49)
  
finalCart.add(cartMain4);
finalCart.add(cartMain3);
finalCart.add(cartMain2);
finalCart.add(cartMain);




 

function findPrice(roll){
    let totalPrice = ((roll.rollPrice) + glazeInfo[roll.glazing].price) * packAdapt[roll.size].price;  
    eval = (Math.floor(1000 * totalPrice)/1000);
    let newEval = eval.toFixed(2); // This line of code was inspired by the following website: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    return newEval;
}

console.log(findPrice(cartMain));
console.log(findPrice(cartMain2));


function addThing(rollType, rollGlazing, packSize, rollPrice){
    const sarina = new Roll2(rollType, rollGlazing, packSize, rollPrice);
    finalCart.add(sarina);
    return sarina; 
}




function appendThing(sarina){
    let template = document.querySelector("#cardtemplate");
    let clone = template.content.cloneNode(true);
    sarina.element = clone.querySelector(".cartorder");
    const remove = sarina.element.querySelector(".remove");
    console.log(remove); 
    remove.addEventListener("click", () => {
    deleteEntry(sarina);
}); 
  
    
const yikes = document.querySelector(".cartbox"); 
yikes.prepend(sarina.element);
addRollInfo(sarina);

}

function addRollInfo(sarina){
    let rollImageElement = sarina.element.querySelector(".cartimages");
    let rollNameElement = sarina.element.querySelector(".notecardname");
    let rollGlazeElement = sarina.element.querySelector(".notecardsize");
    let rollSizeElement = sarina.element.querySelector(".notecardglaze");
    let endPriceElement = sarina.element.querySelector(".notecardprice");
    let totalPriceElement = document.querySelector("#finalprice2"); 

    rollImageElement.src = './../assets/products/' + sarina.type + "-cinnamon-roll.jpg"; 
   rollNameElement.innerText = sarina.type + " Cinnamon Roll";
    rollGlazeElement.innerText = sarina.glazing; 
    rollSizeElement.innerText = "Pack Size: " + sarina.size;
    endPriceElement.innerText = (findPrice(sarina));;
    totalPriceElement.innerText = (findPrice(sarina))
    
  
    console.log(endPriceElement); 
    
}


// function updatePrice(event){
// let totalPriceElement = document.querySelector("#finalprice2"); 
// totalPriceElement.innerText = 
//      -findPrice(sarina); 

//  }

function deleteEntry(sarina){
    sarina.element.remove(); 
    finalCart.delete(sarina);
    
}



for (const sarina of finalCart){
console.log(sarina);
appendThing(sarina); 


}




