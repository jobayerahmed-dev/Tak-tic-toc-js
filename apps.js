const boxes = document.querySelectorAll(".box");
const resatbtn = document.querySelector("#reset-btn");
const msgcontener = document.querySelector(".msg-contener");
const Newbtn = document.querySelector("#New-btn");
const msg = document.querySelector("#msg");



 let trunO = true;//playerx, player0.


 const winpatterens = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,6,5],
    [6,7,8],

 ];

 const resetGame = () => {
   trunO = true;
   enableboxes();
   msgcontener.classList.add("hide");
 }

 boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
       
        if (trunO) {
         box.innerHTML = "O";
         trunO = false;
         
        } else {
         box.innerHTML = "X";
         trunO = true;
        }
        box.disabled = true;
        winergame();
    });
    
 });

 const disableboxes = () => {
   for(let box of boxes) {
      box.disabled = true;
   }
 };
 const enableboxes = () => {
   for(let box of boxes) {
      box.enabled = false;
      boxes.innerText = "";
   }
 };

 const showwinner = (winner) => {
   msg.innerHTML = `Congracullation ${winner} is will win!`;
   msgcontener.classList.remove("hide");
  disableboxes();
 };
 const winergame = () => {
   for (let patteren of winpatterens) {
      
      let pos1val =  boxes[patteren[0]].innerText;
      let pos2val =  boxes[patteren[1]].innerText;
      let pos3val =  boxes[patteren[2]].innerText;
   
   if(pos1val != "" && pos2val !="" && pos3val != ""){
      if(pos1val === pos2val && pos2val === pos3val){
        
         showwinner(pos1val);
      }

      }
   }
 };

 Newbtn.addEventListener("click", resetGame);
 resatbtn.addEventListener("click", resetGame);