import {codigos} from "./codigos.js";

const productValue = document.getElementById("prd");
const btnCode = document.getElementById("btn-prd");
const code = document.getElementById("cod");

function cambiarCodigo(){
 const productos = Object.keys(codigos);
 let productos2 = productos[Math.floor(Math.random()*productos.length)];
 let item = productos2;
 code.setAttribute("value",item);
 code.setAttribute("key",codigos[productos2]) 
};

cambiarCodigo()

productValue.addEventListener("keyup",()=>{
  productValue.value = productValue.value.toUpperCase();
});

productValue.addEventListener("keyup",(e)=>{
  e.preventDefault();
  if(e.keyCode == 13) {
    if(productValue.value == code.getAttribute("key")) {
      cambiarCodigo()
      console.log("hey")
    } else {
      console.log("no")
    }
    productValue.value = "";
  }
});

btnCode.addEventListener("click",()=>{
  if(productValue.value == code.getAttribute("key")) {
      cambiarCodigo()
      console.log("hey")
    } else {
      console.log("no")
    }
    productValue.value = "";
});
