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

let cart = [];
const queryString = window.location.search; 
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");
//console.log(rollType);
const headerElement = document.querySelector("#handmade");
headerElement.innerText = rollType + " Cinnamon Roll"; 
let rollArray = Object.keys(rolls); 
//console.log(rollArray);
let mainIndex = rollArray.indexOf(rollType); 
//console.log(mainIndex); 
let basePrice = Object.values(rolls)[mainIndex].basePrice; 
const rollPicture = document.querySelector("#originalimageorder"); 
rollPicture.src = './../assets/products/' + Object.values(rolls)[mainIndex].imageFile; 
let packSize = "1"
let rollGlazing = "Keep original"
let glazingPrice = 0;
let packPrice = 1;
finalprice.innerHTML = basePrice; 
let glazeOption = document.getElementById("glazeoptions");
glazeOption.addEventListener('change', glazeChange); 
let packOption = document.getElementById("packsize");
packOption.addEventListener('change', packChange);  

function packChange(event){
    let current = event.target.value;
    packSize = packAdapt[current].name;
    packPrice = packAdapt[current].price;
    updateTotalPrice();
    callRoll(); 
}

function glazeChange(event){
    let currentoption = event.target.value;
    //console.log(currentoption); 
    glazingPrice = glazeInfo[currentoption].price;
    rollGlazing = glazeInfo[currentoption].name;
    updateTotalPrice();
    callRoll();
}

function updateTotalPrice() {
    const totalPrice = (basePrice + glazingPrice) * packPrice;
    let eval = (Math.floor(1000 * totalPrice)/1000);
    let newEval = eval.toFixed(2); // This line of code was inspired by the following website: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    finalprice.innerHTML = newEval; 
   // console.log(totalPrice);
}

for (let glaze in glazeInfo){
    let choice = document.createElement('option');
    choice.setAttribute('value', glaze);
    choice.innerHTML = glazeInfo[glaze].name; 
    glazeOption.appendChild(choice);
}

for (let size in packAdapt){
    let choice = document.createElement('option');
    choice.setAttribute('value', size);
    choice.innerHTML =  packAdapt[size].name; 
    packOption.appendChild(choice);
}

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function callRoll(){
    //console.log(packSize); 
    //console.log(rollGlazing); 
    let purchase = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(purchase); 
    return purchase; 
}

function rollToCart(){
    console.log(callRoll());
}


