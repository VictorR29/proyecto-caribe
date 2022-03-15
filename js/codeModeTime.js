import {codigos} from "./codigos.js";

const codeValue = document.getElementById("cod");
const btnCode = document.getElementById("btn-code");
const producto = document.getElementById("prd");
const tiempo10 = document.getElementById("10seg");
const tiempo30 = document.getElementById("30seg");
const tiempo60 = document.getElementById("60seg");

function cambiarProducto(){
 const productos = Object.keys(codigos);
 let productos2 = productos[Math.floor(Math.random()*productos.length)];
 let item = codigos[productos2];
 producto.setAttribute("value",item);
 producto.setAttribute("key",productos2) 
};



tiempo10.addEventListener("click",()=>{
  time(tiempo10,10);

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
});

tiempo30.addEventListener("click",()=>{
  time(tiempo30,30);

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
});

tiempo60.addEventListener("click",()=>{
  time(tiempo60,60);

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
});

function time(name,sec) {
  if(name.checked){
    let cronos = setInterval(function crono(){
      if(sec > 0) {
        --sec;
        document.getElementById("crono").innerHTML = sec;
        codeValue.disabled = false;
      }else if(sec == 0) {
        codeValue.disabled = true;
      }else {
        clearInterval(cronos)
      }
    },1000);
  }
}

