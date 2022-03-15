import {codigos} from "./codigos.js";

const productValue = document.getElementById("prd");
const btnCode = document.getElementById("btn-prd");
const code = document.getElementById("cod");
const tiempo10 = document.getElementById("10seg");
const tiempo30 = document.getElementById("30seg");
const tiempo60 = document.getElementById("60seg");

function cambiarCodigo(){
 const productos = Object.keys(codigos);
 let productos2 = productos[Math.floor(Math.random()*productos.length)];
 let item = productos2;
 code.setAttribute("value",item);
 code.setAttribute("key",codigos[productos2]) 
};

productValue.addEventListener("keyup",()=>{
  productValue.value = productValue.value.toUpperCase();
});


tiempo10.addEventListener("click",()=>{
  time(tiempo10,30);

  cambiarCodigo();

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
});

tiempo30.addEventListener("click",()=>{
  time(tiempo30,60);

  cambiarCodigo();

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
});

tiempo60.addEventListener("click",()=>{
  time(tiempo60,90);

  cambiarCodigo();

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
});

function time(name,sec) {
  if(name.checked){
    let cronos = setInterval(function crono(){
      if(sec > 0) {
        --sec;
        document.getElementById("crono").innerHTML = sec;
        productValue.disabled = false;
      }else if(sec == 0) {
        productValue.disabled = true;
      }else {
        clearInterval(cronos)
      }
    },1000);
  }
}
