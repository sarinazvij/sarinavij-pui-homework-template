class Roll2 {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.rollPrice = rollPrice;  
    }
}

function callRoll(){
    
    let purchase = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(purchase); 
    return purchase; 
}

function rollToCart(){
    console.log(callRoll());

}

function storeRoll (){
    let cartArray = Array.from(finalCart);
    console.log(cartArray);
    let cartArrayUpdate = JSON.parse(cartArray); 
    console.log(cartArrayUpdate);
    localStorage.setItem("storedCart", cartArrayUpdate);
}



