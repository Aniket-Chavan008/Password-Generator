const pass = document.querySelector("#pass");
var length = 0;
let items= document.querySelectorAll('.dropdown-item');
items.forEach((btn)=>{
      btn.addEventListener('click',()=>{
        length = btn.innerText;
        console.log(length);
      })
});
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let digits = "0123456789";
let symbols = "!@#$%^&*()_?|}{][\/";
const all = upper + lower + digits + symbols;
let createPassword=()=>{
       let password = "";
       password += upper[Math.floor(Math.random()*upper.length)];
       password += lower[Math.floor(Math.random()*lower.length)];
       password += digits[Math.floor(Math.random()*digits.length)];
       password += symbols[Math.floor(Math.random()*symbols.length)];
       while(length > password.length)
       {
        password += all[Math.floor(Math.random()*all.length)];
       }
       pass.value = password;
}
document.querySelector('.clk').addEventListener('click',createPassword); 
let copy = () => {
    pass.select();
    document.execCommand("copy");
}
document.querySelector('#image').addEventListener('click',copy);
