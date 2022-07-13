let button=document.querySelector("button");// get button
let menu=document.querySelector("#menu")//get menu
button.addEventListener("click",(e)=>{
menu.classList.toggle("hide")
});