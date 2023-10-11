let glazeInfo = {
    "Original":{
        name: "Keep Original", 
        price: 0, 
    },
    "Sugar Milk":{
        name: "Sugar Milk", 
        price: 0,
    },
    "Vanilla":{
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


    let cartMain = new Roll2 ("Original", "Sugar Milk", "1", 2.49)
    let cartMain2 = new Roll2 ("Walnut", "Vanilla Milk", "12", 3.49)
    let cartMain3 = new Roll2 ("Raisin", "Sugar Milk", "3", 2.99)
    let cartMain4 = new Roll2 ("Apple", "Original", "3", 3.49)

finalCart.add(cartMain);
finalCart.add(cartMain2);
finalCart.add(cartMain3);
finalCart.add(cartMain4); 

console.log(cartMain);


function findPrice(roll){
    let totalPrice = (roll.rollPrice) + glazeInfo[roll.glazing].price * packAdapt[roll.size].price;  
    return totalPrice;
}

console.log(findPrice(cartMain));
console.log(findPrice(cartMain4));


function addThing(rollType, rollGlazing, packSize, rollPrice){
    const sarina = new Roll2(rollType, rollGlazing, packSize, rollPrice);
    finalCart.add(sarina);
    return sarina; 
}




function appendThing(sarina){
    let template = document.querySelector("#cardtemplate");
    let clone = template.content.cloneNode(true);
    sarina.element = clone.querySelector(".cartorder");
    // const remove = sarina.element.querySelector(".remove");
    // console.log(remove); 
    // remove.addEventListener("click", deleteEntry(sarina)); 
    // //);
const yikes = document.querySelector(".cartbox"); 
yikes.prepend(sarina.element);
addRollInfo(sarina);

}

function addRollInfo(sarina){
    let rollImageElement = sarina.element.querySelector(".cartimages");
    let rollNameElement = sarina.element.querySelector(".cartinfo");
    let rollGlazeElement = sarina.element.querySelector(".cartinfo");
    let rollSizeElement = sarina.element.querySelector(".cartinfo");
    let endPriceElement = sarina.element.querySelector(".cartinfoprice");

    //rollImageElement.src = 
    rollNameElement.innerText = sarina.type;
    rollGlazeElement.innerText = sarina.glazing; 
    rollSizeElement.innerText = sarina.size;
    endPriceElement.innerText = sarina.rollPrice;

}

function deleteEntry(sarina){
    sarina.element.remove(); 
    finalCart.delete(sarina);
}


const sup = addThing(cartMain); 

for (const sarina of finalCart){
console.log(sarina);
appendThing(sarina); 


}



