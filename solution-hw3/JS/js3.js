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
    }  
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
    }
}

console.log(glazeInfo[1]);

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

    // let totalPrice = basePrice * packAdapt[current].price; 
    // finalprice.innerHTML = totalPrice;
    // return totalPrice;
 }

function glazeChange(event){
    let currentoption = event.target.value;
    glazingPrice = glazeInfo[currentoption].price;
    updateTotalPrice();

    // console.log(currentoption); 
    // let totalPrice = basePrice + glazeInfo[currentoption].price; 


    // finalprice.innerHTML = totalPrice;

    // return totalPrice; 
}


function updateTotalPrice() {
    const totalPrice = (basePrice + glazingPrice) * packPrice;
    finalprice.innerHTML = totalPrice;
    console.log(totalPrice);
}




//finalprice.innerHTML = totalPrice;









for (let glaze in glazeInfo){
    let option = document.createElement('option');
    option.innerHTML =  glazeInfo[glaze].name; 
    option.setAttribute('value', glaze);
    //console.log(option);
    glazeOption.appendChild(option);
}

//let newPack = document.querySelector("#packsize");
for (let size in packAdapt){
    let option = document.createElement('option');
    option.innerHTML =  packAdapt[size].name; 
    option.setAttribute('value', size);
    //console.log(option);
    packOption.appendChild(option);
}


//packSizeAdapt.addEventListener('change', packChange); 
// function packChange(){
//     let totalPrice = index + basePrice; 
//     console.log(totalPrice); 
// }//

//let total = document.querySelector("#finalprice");





// function displayPrice(roll){
//     let finalPrice = document.getElementById("#pricecartdetail"); 
//     finalPrice.innerText = roll.cost; 
// }




