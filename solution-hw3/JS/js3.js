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

let basePrice = 2.49; 
let glazingPrice = 0;
let packPrice = 1;

let glazeOption = document.getElementById("glazeoptions");
glazeOption.addEventListener('change', glazeChange); 
let packOption = document.getElementById("packsize");
packOption.addEventListener('change', packChange);  

function packChange(event){
    let current = event.target.value;
    packPrice = packAdapt[current].price;
    updateTotalPrice();
}

function glazeChange(event){
    let currentoption = event.target.value;
    glazingPrice = glazeInfo[currentoption].price;
    updateTotalPrice();
}

function updateTotalPrice() {
    const totalPrice = (basePrice + glazingPrice) * packPrice;
    let eval = (Math.floor(1000 * totalPrice)/1000);
    let newEval = eval.toFixed(2); // This line of code was inspired by the following website: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    finalprice.innerHTML = newEval; 
    console.log(totalPrice);
}

for (let glaze in glazeInfo){
    let choice = document.createElement('option');
    choice.setAttribute('value', glaze);
    choice.innerHTML = glazeInfo[glaze].name; 
    console.log(option);
    glazeOption.appendChild(choice);
}

for (let size in packAdapt){
    let choice = document.createElement('option');
    choice.setAttribute('value', size);
    choice.innerHTML =  packAdapt[size].name; 
    console.log(option);
    packOption.appendChild(choice);
}