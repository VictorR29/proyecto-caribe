import {codigos} from "./codigos.js";

const codeValue = document.getElementById("cod");
const btnCode = document.getElementById("btn-code");
const itemValue = document.getElementById("item");

codeValue.addEventListener("keyup",(e)=>{
  e.preventDefault();
  if(e.keyCode == 13) {
    const codes = Object.keys(codigos);
    if(codes.includes(codeValue.value)){
      let codes2 = codes[codes.indexOf(codeValue.value)];
      let codigos2 = codigos[codes2];
      itemValue.textContent = codigos2;
      console.log(codes2)
      console.log(codigos2)
    } else {
      itemValue.textContent = "codigo no catalogado";
    }
    codeValue.value = "";
  }
});

btnCode.addEventListener("click",()=>{
  const codes = Object.keys(codigos);
  if(codes.includes(codeValue.value)){
    let codes2 = codes[codes.indexOf(codeValue.value)];
    let codigos2 = codigos[codes2];
    itemValue.textContent = codigos2;
    console.log(codes2)
    console.log(codigos2)
  } else {
    itemValue.textContent = "codigo no catalogado";
  }
    codeValue.value = "";
});
