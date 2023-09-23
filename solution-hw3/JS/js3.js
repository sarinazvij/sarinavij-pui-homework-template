
let glazeInfo = {
    "Keep Original":{
        name: "Keep Original", 
        price: 0, 
    },
    "Sugar Milk": {
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
    }  
}; 

let packSizeAdapt = {
    "one":{
        num: "1",
        price: 1, 
    },
    "three":{
        num: "3", 
        price: 3, 
    },
    "six":{
        num: "6", 
        price: 5, 
    },
    "twelve":{
        num: "12", 
        price: 10, 
    }
}



let basePrice = 2.49; 

function glazeChange(){
    let abc = this.value; 
    // console.log(abc);
    console.log(glazeInfo[abc]["price"])
    // console.log(Object.values(glazeInfo)[3].price)
    // let blah = abc.price; 
    // let blah = glazeInfo.abc[1];
    // console.log(blah); 
    //console.log("did it reach here"+abc);
    // let totalPrice = basePrice + blah; 
    // total.innerHTML = totalPrice;
}


let glazeOption = document.getElementById("glazeoptions");
// console.log(glazeOption); 
glazeOption.addEventListener('change', glazeChange); 


index = Array.from(glazeOption.children).indexOf(glazeChange.target)
console.log(index)

for (let glaze in glazeInfo){
    let option = document.createElement('option');
    option.innerHTML =  glazeInfo[glaze].name; 
    console.log(option);
    glazeOption.appendChild(option);
}

let newPack = document.querySelector("#packsize");
for (let size in packSizeAdapt){
    let option = document.createElement('option');
    option.innerHTML =  packSizeAdapt[size].num; 
    console.log(option);
    newPack.appendChild(option);
}


// packSizeAdapt.addEventListener('change', packChange); 
// function packChange(){
//     let totalPrice = (basePrice + glazeInfo[glaze].price) * packSizeAdapt.price; 
//     total.innerHTML = totalPrice; 
// }

let total = document.querySelector("#finalprice");





// function displayPrice(roll){
//     let finalPrice = document.getElementById("#pricecartdetail"); 
//     finalPrice.innerText = roll.cost; 
// }




