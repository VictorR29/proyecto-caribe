import {codigos} from "./codigos.js";

const codeValue = document.getElementById("cod");
const btnCode = document.getElementById("btn-code");
const producto = document.getElementById("prd");

function cambiarProducto(){
 const productos = Object.keys(codigos);
 let productos2 = productos[Math.floor(Math.random()*productos.length)];
 let item = codigos[productos2];
 producto.setAttribute("value",item);
 producto.setAttribute("key",productos2) 
};

cambiarProducto()

codeValue.addEventListener("keyup",(e)=>{
  e.preventDefault();
  if(e.keyCode == 13) {
    if(codeValue.value == producto.getAttribute("key")) {
      cambiarProducto()
      console.log("hey")
    } else {
      console.log("no")
    }
    codeValue.value = "";
  }
});

btnCode.addEventListener("click",()=>{
  if(codeValue.value == producto.getAttribute("key")) {
      cambiarProducto()
      console.log("hey")
    } else {
      console.log("no")
    }
    codeValue.value = "";
});

