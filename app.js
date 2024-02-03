let user1=[];
let user2=[];
let m=[1,2,3,4,5,6,7,8,9];
let win=[['1','2','3'],['2','5','8'],['1','5','9'],['3','6','9'],['1','4','7'],['3','5','7'],['4','5','6'],['7','8','9']];
let boxes=document.querySelectorAll(".box");
let text=document.querySelector("h2");
let audio=document.getElementById("game_over");
let player=true;
let board=document.querySelector(".board");
let btn=document.getElementById("button");
let img=document.querySelector("img");
console.dir(boxes);
for(box of boxes){
    console.log(box);
    box.addEventListener("click",player1);
}
function clicked(x){
    setTimeout(function(){
        x.innerText="x";
        x.style.color="red";
    },50);
}
function click(x){
    setTimeout(function(){
        x.innerText="o";
        x.style.color="green";
    },50);
}

function player1(){
    if(player){
        player=false;
        text.innerText="Player 2's Turn"
        text.style.color="white";
        clicked(this);
        console.log(this);
        let id=this.getAttribute("id");
        this.disabled=true;
        user1.push(id);
        console.log(user1);
        m[Number(id)-1]='x';
        check();
    }
    else{
        player=true;
        text.innerText="Player 1's Turn"
        text.style.color="yellow";
        click(this);
        console.log(this);
        let id=this.getAttribute("id");
        user2.push(id);
        this.disabled=true;
        console.log(user2);
        m[Number(id)-1]='o';
        check();
    }
}
function check(){
    let l=0;
    if((m[l]==m[l+1]&&m[l+1]==m[l+2])||(m[l+3]==m[l+4]&&m[l+4]==m[l+5])||
    (m[l+6]==m[l+7]&&m[l+7]==m[l+8])||(m[l]==m[l+3]&&m[l+3]==m[l+6])||
    (m[l+1]==m[l+4]&&m[l+4]==m[l+7])||(m[l+2]==m[l+5]&&m[l+5]==m[l+8])||
    (m[l]==m[l+4]&&m[l+4]==m[l+8])||(m[l+2]==m[l+4]&&m[l+4]==m[l+6])){
        if(player){
            setTimeout(function(){
                text.innerHTML="Player 2: O Wins<br>Press Below button to Start a new Game";
                board.classList.add("hide");
                btn.innerText="New Game";
                img.classList.remove("hide");
            },100);
            audio.play();
        }
        else{
            setTimeout(function(){
                text.innerHTML="Player 1: X Wins<br>Press Below button to Start a new Game";
                board.classList.add("hide");
                btn.innerText="New Game";
                img.classList.remove("hide");
            },100);
            audio.play();
        }
    }
}
btn.addEventListener("click",()=>{
    for(box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    setTimeout(()=>{
        board.classList.remove("hide");
        img.classList.add("hide");
        text.innerText="Press any Block to Start the game";
        player=true;
        text.style.color="white";
        m=[1,2,3,4,5,6,7,8,9];
        audio.pause();
        audio.currentTime=0;
        btn.innerText="Reset";
    },100);
});