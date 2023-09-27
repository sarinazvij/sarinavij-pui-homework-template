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

let packSizeAdapt = {
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





let packOption = document.getElementById("packsize");
packOption.addEventListener('change', packChange, glazeChange);  

let hello = packOption.options[packOption.selectedIndex].value
   console.log(hello); 
  
    let totalPrice = packSizeAdapt[hello].price; 

function packChange(){

   
    finalprice.innerHTML = totalPrice;
    //let blah = parseInt(packSizeAdapt[current].price); 
  console.log(totalPrice);
 }
 packChange(); 

 let glazeOption = document.getElementById("glazeoptions");
 glazeOption.addEventListener('change', glazeChange, packChange); 

function glazeChange(event){
 
let currentoption = event.target.value;
console.log(currentoption); 
let newPrice = basePrice + glazeInfo[currentoption].price; 
finalprice.innerHTML = newPrice;
}










for (let glaze in glazeInfo){
    let option = document.createElement('option');
    option.innerHTML =  glazeInfo[glaze].name; 
    option.setAttribute('value', glaze);
    //console.log(option);
    glazeOption.appendChild(option);
}

//let newPack = document.querySelector("#packsize");
for (let size in packSizeAdapt){
    let option = document.createElement('option');
    option.innerHTML =  packSizeAdapt[size].name; 
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




