let output = document.querySelector(".passwordOutput");
const btnGen = document.querySelector(".btnGen");
const copyBtn = document.querySelector(".passwordCopy");
const check=document.querySelectorAll(".check input")
let passLength=document.querySelector(".passLength")

let lengthValue=document.querySelector(".lengthValue")

let passChar = [];
let strPass = "";
function getRange(){

    lengthValue.innerHTML=passLength.value;
    
     return passLength.value
 }
function genPass(len=getRange()) {
strPass=''
passChar=[]
  for (let i = 97; i <= 122; i++) {
    passChar.push(String.fromCodePoint(i));
  }
  check.forEach((item)=>{
      if(item.name=='upperCaseChar'&&item.checked==true){
          for(let i=65;i<=90;i++){
              passChar.push(String.fromCodePoint(i))
          }
      };
      if(item.name=='numbers'&&item.checked==true){
        for(let i=48;i<=57;i++){
            passChar.push(String.fromCodePoint(i))
        }
    };
    if(item.name=='symbols'&&item.checked==true){
        for(let i=33;i<=47;i++){
            passChar.push(String.fromCodePoint(i))
        }
    };
  })
  while (strPass.length <len) {
    strPass += passChar[randomChar()];
  }
  output.textContent = strPass;
}
function randomChar(min = 0, max = passChar.length - 1) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

btnGen.addEventListener("click", () => {
  genPass(getRange());
});
copyBtn.addEventListener("click", () => {

let popuptext=document.querySelector(".popuptext");

popuptext.style.visibility="visible"

 navigator.clipboard.writeText(output.textContent)
 setTimeout(()=>{
    popuptext.style.visibility="hidden"
 },2000)

});

