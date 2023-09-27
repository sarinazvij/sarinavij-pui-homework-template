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
}; 

let basePrice = 2.49; 


 let packOption = document.getElementById("packsize");

let glazeOption = document.getElementById("glazeoptions");
glazeOption.addEventListener('change', glazeChange); 
 

function glazeChange(){
    let abc = this.value; 
    // console.log(abc);
    let thingy = glazeInfo[abc]["price"]; 

}



index = Array.from(glazeOption.children).indexOf(glazeChange.target)
console.log(index)
    


let glazeOption = document.getElementById("glazeoptions");
// console.log(glazeOption); 
glazeOption.addEventListener('change', glazeChange); 




  //console.log(blue); 

 // let totalPrice = basePrice + yellow[2]; 
    //indexOf(glazeChange.target); 
   // console.log(newPrice); 
    //return newPrice; 
   //finalprice.innerHTML = newPrice;
   //console.log(totalPrice); 




//document.querySelector("#finalprice"); 
// glazeOption.addEventListener('change', finalprod); 
// packOption.addEventListener('change', finalprod); 




// // // console.log(boop);

// function finalprod(event){
    
// packChange(event);
// glazeChange(event) 
//     //return happy; 

// //console.log(happy) 

// finalprice.innerHTML = (basePrice );


   

//     //finalprice.innerHTML = (basePrice + blah);
// 



// glazeOption.addEventListener('change', packChange); 
// packOption.addEventListener('change', glazeChange);  







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


