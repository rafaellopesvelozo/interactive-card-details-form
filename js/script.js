let inputName = document.getElementById("name");
let validName = false;

let inputNum = document.getElementById("inputNumber");
let validNum = false;

let inputMes = document.getElementById("mes");
let validMes = false;

let inputAno = document.getElementById("ano");
let validAno = false;

let InputCvc = document.getElementById("cvc");
let validCvc = false;

let cardNumber = document.getElementById("card-number");
let cardName = document.getElementById("cardName");
let cardMonth = document.getElementById("cardMonth");
let cardYear = document.getElementById("cardYear");
let cardCvc = document.getElementById("erroCardcvc");

let erroName = document.getElementById('erroCardName')
let erroNumber = document.getElementById("erroCardNumber");
let erroMes = document.getElementById("erroMes");
let erroDate = document.getElementById("erroDate");

let form = document.querySelector("form");
let CardComplete = document.querySelector(".cardComplete");

let btn_submit = document.getElementById("btn_submit");
let Continue = document.getElementById("continue");
let Input = document.querySelector('input')

inputName.addEventListener("keyup", () => {

  let nome = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/
  let upperName = inputName.value.toUpperCase().trim();
  if(!nome.test(upperName)){
    erroName.innerHTML = 'Just letters'
    inputName.classList.add("focus");
    upperName.innerHTML = 'LETICIA LEIRE'
    validName = false;
  }else {
    inputName.classList.remove("focus");
    erroName.innerHTML = ''
    cardName.innerHTML = upperName
    validName = true;
  }
    
});

inputNum.addEventListener("keyup", () => {
  inputNum.value = inputNum.value.substr(0, 16);
  if (
    inputNum.value < 0 ||
    inputNum.value == '' ||
    inputNum.value.length < 16
  ) {
    inputNum.classList.add("focus");
    erroNumber.innerHTML = "Wrong format, numbers only";
    cardNumber.innerHTML = "0000 0000 0000 0000";
    validNum = false;
  } else{
    inputNum.classList.remove("focus");
    erroNumber.innerHTML = "";
    cardNumber.innerHTML = inputNum.value.match(/\d{1,4}/g).join(' ');
    validNum = true;
  }
});

inputMes.addEventListener("keyup", () => {
  mes.value = mes.value.substr(0, 2);
  if (
    mes.value < 0 ||
    mes.value > 12 ||
    mes.value == 0 ||
    mes.value == "" ||
    mes.value.length < 2
  ) {
    erroMes.innerHTML = "can`t be blank";
    cardMonth.innerHTML = "00";
    mes.classList.add("focus");
    validMes = false;
  } else {
    mes.classList.remove("focus");
    erroMes.innerHTML = "";
    cardMonth.innerHTML = mes.value;
    validMes = true;
  }
});

inputAno.addEventListener("keyup", () => {
  inputAno.value = inputAno.value.substr(0, 2);
  if (
    inputAno.value < 0 ||
    inputAno.value > 30 ||
    inputAno.value == "" ||
    inputAno.value == 0 ||
    inputAno.value.length < 2
  ) {
    inputAno.classList.add("focus");
    erroMes.innerHTML = "can`t be blank";
    cardYear.innerHTML = "00";
    validAno = false;
  } else {
    inputAno.classList.remove("focus");
    erroMes.innerHTML = "";
    cardYear.innerHTML = inputAno.value;
    validAno = true;
  }
});

InputCvc.addEventListener("keyup", () => {
  InputCvc.value = InputCvc.value.substr(0, 3);

  if (
    InputCvc.value < 0 ||
    InputCvc.value > 999 ||
    InputCvc.value.length < 3 ||
    InputCvc.value == ""
  ) {
    InputCvc.classList.add("focus");
    erroDate.innerHTML = "can`t be blank";
    erroCardcvc.innerHTML = "000";
    validCvc = false;
  } else {
    erroDate.innerHTML = "";
    InputCvc.classList.remove("focus");
    erroCardcvc.innerHTML = InputCvc.value;
    validCvc = true;
  }
});

function Confirm(e) {
  e.preventDefault();

  if (
    validName &&
    validNum &&
    validMes &&
    validAno &&
    validCvc
  ) {
    setTimeout(function () {
      form.classList.add("none");
    CardComplete.classList.remove("none");
    }, 500);
    
  }
}


function btnContinue() {
  setTimeout(function () {
    CardComplete.classList.add("none");
    form.classList.remove("none");
    inputName.focus();
  }, 500);
  
 

  inputName.value = "";
  inputNum.value = "";
  mes.value = "";
  inputAno.value = "";
  InputCvc.value = "";
  
  cardNumber.innerHTML = "0000 0000 0000 0000";
  cardName.innerHTML = "FELICIA LEIRE";
  cardCvc.innerHTML = "000";
  cardMonth.innerHTML = "00";
  cardYear.innerHTML = "00";
}

btn_submit.addEventListener("click", Confirm);
Continue.addEventListener("click", btnContinue);
