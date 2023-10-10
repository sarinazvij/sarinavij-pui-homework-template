

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
let finalCart = new Set ();  

    let cartMain = new Roll2 ("Original", "Sugar Milk", "1", 2.49)
    let cartMain2 = new Roll2 ("Walnut", "Vanilla Milk", "12", 3.49)
    let cartMain3 = new Roll2 ("Raisin", "Sugar Milk", "3", 2.99)
    let cartMain4 = new Roll2 ("Apple", "Original", "3", 3.49)

finalCart.add(cartMain);
finalCart.add(cartMain2);
finalCart.add(cartMain3);
finalCart.add(cartMain4); 


function findPrice(){
    let totalPrice = (this.rollPrice) + glazeInfo[this.rollType].price * packAdapt[this.packSize].price;  
    console.log(totalPrice); 
}
   


function appendThing(){
    let mainThing = document.querySelector(".cartdescriptions1");
    cartMain.element 



 }