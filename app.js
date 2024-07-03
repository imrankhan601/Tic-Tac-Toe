let backMusic=new Audio("music.mp3");
let tuntun=new Audio("gameover.mp3");
let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContener =document.querySelector(".imsg-contener");
let msg=document.querySelector("#imsg");

let end =document.querySelector(".end");
let end2=document.querySelector("#end2");
let turnO= true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContener.classList.add("hide");
    document.querySelector(".cutton").getElementsByTagName("img")[0].style.width="0px";
    backMusic.pause();
}
backMusic.play();
boxes.forEach((box)=>{
box.addEventListener("click",() =>{
    
    if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
tuntun.play();
backMusic.play();
    checkwinner();
})
})

const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner =(winner) =>{
msg.innerText=`Congratulations, Winner is ${winner}`;
msgContener.classList.remove("hide");
disableBoxes();
document.querySelector(".cutton").getElementsByTagName("img")[0].style.width="200px";


}



const checkwinner =() =>{
  for(let pattern of winPatterns){
   let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;
if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
    if(pos1Val === pos2Val && pos2Val === pos3Val){
        console.log("winner");
        showWinner(pos1Val);
    }
    
}

  }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
