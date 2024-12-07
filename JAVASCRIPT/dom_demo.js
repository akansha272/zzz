const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set");

setText.addEventListener("click",()=>{

setText.textContent = "It was a dark and stormy night"});

const clearText = document.body.querySelector("#clear");
clearText.addEventListener("click",()=>{
    story.textContent="";
})