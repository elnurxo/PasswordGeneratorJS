//HTML elements get
let passwordLengthInput = document.querySelector("#passwordLength");
let hasUpperInput = document.querySelector("#checkUpper");
let hasLowerInput = document.querySelector("#checkLower");
let hasNumberInput = document.querySelector("#checkNumber");
let hasSymbolInput = document.querySelector("#checkSymbols");
let generateBtn = document.querySelector("#generatePassword");
let clipCopy = document.querySelector(".clip-icon i");
let passwordItself = document.querySelector("#pass"); 
//data
let passwordLength;
let hasUpper = false;
let hasLower = false;
let hasNumber = false;
let hasSymbol = false;
var numbers = "0123456789";
var lowerCases = "abcdefghijklmnopqrstuvwxyz";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!@#$%^&*()";
var password = "";

//get Password Length
passwordLengthInput.addEventListener("keyup",function(e){
    console.log('length: ',passwordLength);
    passwordLength = e.target.value;
})

//get Has Upper
hasUpperInput.addEventListener("change",function(e){
    hasUpper = e.target.checked;
})

//get Has Lower
hasLowerInput.addEventListener("change",function(e){
    hasLower = e.target.checked;
})

//get Has Number
hasNumberInput.addEventListener("change",function(e){
    hasNumber = e.target.checked;
})

//get Has Symbol
hasSymbolInput.addEventListener("change",function(e){
    hasSymbol = e.target.checked;
})

generateBtn.addEventListener("click",function(e){
    e.preventDefault();
    passwordItself.innerText = "";
    password = "";
    if (passwordLength>=4) {
        for (let i = 0; i < passwordLength; i++) {
            if (hasUpper) {
                var randomUpper = Math.floor(Math.random() * upperCases.length);
                password += upperCases.substring(randomUpper, randomUpper +1);
            }
            if (hasLower) {
                var randomLower = Math.floor(Math.random() * lowerCases.length);
                password += lowerCases.substring(randomLower, randomLower +1);
            }
            if (hasNumber) {
                var randomNum = Math.floor(Math.random() * numbers.length);
                password += numbers.substring(randomNum, randomNum +1);
            }
            if (hasSymbol) {
                var randomSymbol = Math.floor(Math.random() * symbols.length);
                password += symbols.substring(randomSymbol, randomSymbol +1);
            }
           
        }
       var checkedCount = 0;
       if (hasUpper) {
        checkedCount++;
       }
       if (hasNumber) {
        checkedCount++;
       }
       if (hasLower) {
        checkedCount++;
       }
       if (hasSymbol) {
        checkedCount++;
       }
       if(checkedCount>0){
        password = password.substring(0, password.length/checkedCount);
        passwordItself.textContent = password;
       }
       else{
        window.alert("you have to select 1 checkbox at least!");
        return;
       }
    } 
    else{
        window.alert("password length gotta be minimum 4!");
        return;
    } 
});

//ClipBoard Copy Click
clipCopy.addEventListener("click",function(){
    window.alert(`password copied: ${password}`);
    copy();
})
function copy() {
    navigator.clipboard.writeText(password);
  }