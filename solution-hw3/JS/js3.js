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
let glazeOption = document.getElementById("glazeoptions");
//console.log(glazeOption); 
glazeOption.addEventListener('change', glazeChange); 

let packOption = document.getElementById("packsize");
packOption.addEventListener('change', packChange);  
function packChange(event){
   // glazeChange(); 

   let currentoption = Object.values(packSizeAdapt);
   console.log(currentoption); 
 
   


   // let current = packSizeAdapt.price
   // console.log(current); 
    //console.log(currentoption); 
   // console.log(packSizeAdapt[indexOf(current)]); 
  //  let totalPrice = basePrice + glazeInfo[current]; 


   // console.log(totalPrice); 
//finalprice.innerHTML = totalPrice;
   


 }




function glazeChange(event){
//     // console.log(Object.values(glazeInfo)[3].price)
//     // let blah = abc.price; 
//     // let blah = glazeInfo.abc[1];
//     // console.log(blah); 
//     //console.log("did it reach here"+abc);
let currentoption = event.target.value;
console.log(currentoption); 
let totalPrice = basePrice + glazeInfo[currentoption].price; 


finalprice.innerHTML = totalPrice;

return totalPrice; 

}





//finalprice.innerHTML = totalPrice;









for (let glaze in glazeInfo){
    let option = document.createElement('option');
    option.innerHTML =  glazeInfo[glaze].name; 
    option.setAttribute('value', glaze);
    //console.log(option);
    glazeOption.appendChild(option);
}

let newPack = document.querySelector("#packsize");
for (let size in packSizeAdapt){
    let option = document.createElement('option');
    option.innerHTML =  packSizeAdapt[size].name; 
    //console.log(option);
    newPack.appendChild(option);
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




