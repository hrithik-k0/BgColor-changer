const colors = ["green", "red", "rgba(133,122,200)", "#f15025","rgb(45, 19, 220)","rgb(220, 19, 220)","rgb(19, 193, 220)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", ()=>{
 const randomNumber = getRandomNumber();

 document.body.style.backgroundColor = colors[randomNumber];
 color.textContent = colors[randomNumber];
});

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}