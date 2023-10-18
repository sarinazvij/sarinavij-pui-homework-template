let glazeInfo = {
    "Keep Original": {
        name: "Keep Original",
        price: 0,
    },
    "Sugar Milk": {
        name: "Sugar Milk",
        price: 0,
    },
    "Vanilla Milk": {
        name: "Vanilla Milk",
        price: 0.50,
    },
    "Double Chocolate": {
        name: "Double Chocolate",
        price: 1.50,
    },
};

let packAdapt = {
    "1": {
        name: "1",
        price: 1,
    },
    "3": {
        name: "3",
        price: 3,
    },
    "6": {
        name: "6",
        price: 5,
    },
    "12": {
        name: "12",
        price: 10,
    },
};

class Roll2 {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

let mainCart = JSON.parse(localStorage.getItem("storedCart"));
let priceArray = [];
let finalCart = [];
console.log(mainCart);

function storeRoll() {
    let cartArray = Array.from(mainCart);
    let cartArrayUpdate = JSON.stringify(cartArray);
    console.log(cartArrayUpdate);
    localStorage.setItem("storedCart", cartArrayUpdate);
}

function findPrice(roll) {
    let totalPrice = ((roll.basePrice) + glazeInfo[roll.glazing].price) * packAdapt[roll.size].price;
    eval = (Math.floor(1000 * totalPrice) / 1000);
    let newEval = eval.toFixed(2); // This line of code was inspired by the following website: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    // console.log(newEval);
    return parseFloat(newEval);
}

function addRoll(rollType, rollGlazing, packSize, basePrice) {
    const cinroll = new Roll2(rollType, rollGlazing, packSize, basePrice);
    finalCart.push(cinroll);
    return cinroll;
}

function appendRoll(cinroll) {
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

function addRollInfo(cinroll) {
    let rollImageElement = cinroll.element.querySelector(".cartimages");
    let rollNameElement = cinroll.element.querySelector(".rollname");
    let rollSizeElement = cinroll.element.querySelector(".rollsize");
    let rollGlazeElement = cinroll.element.querySelector(".rollglaze");
    let endPriceElement = cinroll.element.querySelector(".rollfinalprice");
    let picTitle = cinroll.type.toLowerCase();
    rollImageElement.src = './../assets/products/' + picTitle + "-cinnamon-roll.jpg";
    rollNameElement.innerText = cinroll.type + " Cinnamon Roll";
    rollGlazeElement.innerText = "Glazing: " + cinroll.glazing;
    rollSizeElement.innerText = "Pack Size: " + cinroll.size;
    endPriceElement.innerText = "$" + " " + (findPrice(cinroll));
}

function deleteEntry(cinroll) {
    cinroll.element.remove();
    for (let i = 0; i < finalCart.length; i++) {
        if (finalCart[i] === cinroll) {
            finalCart.splice(i, 1);
            mainCart.splice(i, 1);
            console.log(finalCart);
            console.log(mainCart);
            storeRoll(); 
        }
    }
    console.log(finalCart);
    calcTotalRoll(); 
}

function getRoll() {
    let cartArrayUpdate = localStorage.getItem("storedCart");
    let cartArray = JSON.parse(cartArrayUpdate);
    for (const info of cartArray) {
        let rollz = addRoll(info.type, info.glazing, info.size, info.basePrice);
        appendRoll(rollz);
    }
    calcTotalRoll();  
}

function calcTotalRoll() {
    let sum = 0; 
    let cartArrayUpdate = localStorage.getItem("storedCart");
    let cartArray = JSON.parse(cartArrayUpdate);
    for (const info of cartArray) {
        let itemPrice = (info.basePrice + glazeInfo[info.glazing].price) * packAdapt[info.size].price;
        sum+=itemPrice; 
    }
    let finalPrice = document.querySelector("#finalprice2");
    sum = (Math.floor(1000 * sum) / 1000);
    let newEval = sum.toFixed(2); // This line of code was inspired by the following website: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    finalPrice.innerText = "$ " + newEval;
}

if (localStorage.getItem("storedCart") != null) {
    getRoll();
}

